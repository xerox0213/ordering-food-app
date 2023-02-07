// Un Webhook permet à une application tierce de nous prévenir lorsqu'un évènement a été effectué dans l'environnement DE L'APPLICATION TIERCE. Grâce à cet alerte, de notre côté (côté serveur) on pourra exécuter du code comme l'envoi d'un email ...

// C'est avec cet API endpoint que Stripe va donc pouvoir communiquer

import Stripe from 'stripe';
import { db } from '@/firebase-config';
import {
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
  arrayUnion,
} from 'firebase/firestore';
// Permet de récupérer le contenu brut de la requête
// Stripe a besoin du contenu brut de la requête pour procéder à la vérification de la signature.
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Va nous permettre de dire à Next JS de ne pas analyser le body de la requête car on a besoin des données brut de ce body. C'est très important car on doit vérifier que le webhook event (checkout.session.completed = paiement effectué) a bien été envoyé par stripe et pas par quelqu'un d'autre. Sinon bah le gars il recoit des truc gratos

// Next JS par défaut manipule le contenu brut, on l'en empêche grâce à cet objet config pour que Stripe puisse bien avoir accès au contenu brut de la requête lors de la vérification de la signature
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let event;
    try {
      // === 1. Récupérer l'event en vérifiant la signature à l'aide du contenu brut de la requête et de notre clé secrète ===
      const rawBody = await buffer(req);
      // On récupère la signature apd des en têtes de la requête
      const signature = req.headers['stripe-signature'];
      // Vérification de la signature
      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        'whsec_c86af51f3ba5dcb0d35cd3d49671f0fa36a4df6b525bb6e32549559607b31089'
      );

      // Evènement construit avec succès
      console.log('success', event.id);

      // 2. On vérifie que le type d'évènement est celui que nous surveillons
      if (event.type === 'checkout.session.completed') {
        // Logique de l'on veut mettre en place : envoie email ...
        const moreInfo = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ['line_items'],
          }
        );
        // console.log("plus d'infos", moreInfo.line_items.data);
        const customerDetails = event.data.object.customer_details;
        const customerEmail = customerDetails.email;
        const obj = {
          date_order: getCurrentDate(),
          firstname: 'Nasreddine',
          items: moreInfo.line_items.data.map((item) => {
            return {
              name_item: item.description,
              quantity_item: item.quantity,
              price_item: item.amount_total,
            };
          }),
          total_order: event.data.object.amount_subtotal,
          subtotal_order: event.data.object.amount_subtotal,
          deliveryCharges_order: 0,
          sale_order: 0,
        };
        const { statusCode } = await addAnOrder(customerEmail, obj);
        console.log('Ajout réussi', statusCode);
      } else {
        console.warn('On connais pas cet event');
      }

      // 3. Renvoie une réponse à stripe pour dire qu'on a bien reçu l'évènement
      res.json({ received: true });
    } catch (error) {
      console.log(`Error message : ${error.message}`);
      res.status(400).send(`Webhook Error : ${error.message}`);
      return;
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

async function getUID(customerEmail) {
  const q = query(
    collection(db, 'user'),
    where('email', '==', customerEmail, limit(1))
  );
  const querySnapshot = await getDocs(q);
  let idOfDoc;
  querySnapshot.forEach((doc) => {
    idOfDoc = doc.id;
  });
  return idOfDoc;
}

async function addAnOrder(customerEmail, obj) {
  const idOfDoc = await getUID(customerEmail);
  const q = query(
    collection(db, 'orders'),
    where('uid', '==', idOfDoc, limit(1))
  );
  const querySnapshot = await getDocs(q);
  let orderRef;
  querySnapshot.forEach((doc) => {
    orderRef = doc.ref;
  });
  await updateDoc(orderRef, {
    orders: arrayUnion(obj),
  });
  return { statusCode: 500 };
}

function getCurrentDate() {
  const date = new Date();
  const locales = 'fr-FR';
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let newDate = date.toLocaleDateString(locales, options);
  newDate = newDate.split(' ');
  newDate[0] = newDate[0].slice(0, 3) + '.';
  newDate[2] = newDate[2].slice(0, 3) + '.';
  newDate = newDate.join(' ');
  return newDate;
}
