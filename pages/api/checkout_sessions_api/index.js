// API endpoint permettant de créer une checkout session stripe

import { db } from '@/firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import Stripe from 'stripe';
// On instancie un objet nous permettant de créer notre checkout session
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // On vérifie qu'il y a bien un utilisateur connecté
      const uid = req.cookies.token;
      // Si pas de token alors utilisateur pas connecté on renvoit une erreur
      if (!uid) {
        throw new Error("L'utilisateur n'est pas connecté");
      }
      // On récupère l'email de l'utilisateur
      const email = await getEmailOfUser(uid);
      // Créer une session Checkout Stripe
      const session = await stripe.checkout.sessions.create({
        // Mode de paiement
        mode: 'payment',
        // Email utilisé
        customer_email: email,
        // Type de paiement
        payment_method_types: ['card'],
        // Elements que le client souhaite acheter
        line_items: req.body,
        // Lien vers lequel le client sera redirigé si le paiement est réussi
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        // Lien vers lequel le client sera redirigé si le paiement a été annulé
        cancel_url: `${req.headers.origin}/cart`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

async function getEmailOfUser(uid) {
  const docRef = doc(db, 'user', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const email = docSnap.data().email;
    return email;
  } else {
    return 'nada';
  }
}
