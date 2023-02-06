// Script permettant de charger stripedans notre app Next JS via loadStripe
import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

const getStripe = () => {
  // Vérifie qu'on a pas déjà charger stripe
  if (!stripePromise) {
    // On charge stripe
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};

export default getStripe;
