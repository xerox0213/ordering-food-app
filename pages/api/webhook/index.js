import Stripe from 'stripe';
// Va nous permettre de récupérer les données brut de requête http
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Va nous permettre de dire à Next JS de ne pas analyser le body de la requête car on a besoin des données brut de ce body. C'est très important car on doit vérifier que le webhook event (checkout.session.completed = paiement effectué) a bien été envoyé par stripe et pas par quelqu'un d'autre. Sinon bah le gars il recoit des truc gratos

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let event;
    // 1. Récupérer l'event en vérifiant la signature à l'aide du body brut de la requête et de notre clé secrète
    const rawBody = await buffer(req);
    // On récupère la signature apd des en têtes de la requête
    const signature = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(
      rawBody.toString(),
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Syccessfully constructed event
    console.log('success', event.id);

    // 2. On vérifie que le type d'évènement est celui que nous surveillons
    if (event.type === 'checkout.sesssion.completed') {
      // Logique de l'on veut mettre en place : envoie email ...
      console.log('Paiement réussi bien ouej');
    } else {
      console.warn('On connais pas cet event');
    }

    // 3. Renvoie une réponse à stripe pour dire qu'on a bien reçu l'évènement
    res.json({ received: true });
    try {
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
