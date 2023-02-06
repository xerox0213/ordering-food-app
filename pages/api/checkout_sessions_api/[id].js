// API Endpoint permettant de récupérer une checkout session en utilisant le session ID

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;
  // Vérifie que l'id de session commence par -> cs_
  if (!id.startsWith('cs_')) {
    throw Error('Incorrect CheckoutSession ID.');
  }
  // Si id valide on récupère le checkout session en contournant l'id de session
  const checkout_session = await stripe.checkout.sessions.retrieve(id);
  res.status(200).json(checkout_session);
  try {
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
