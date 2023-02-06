import getStripe from '@/get-stripe';
import { useSelector } from 'react-redux';
import styles from './CheckoutContainer.module.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CalculatorPrice from '../CalculatorPrice/CalculatorPrice';
import { useRouter } from 'next/router';

const CheckoutContainer = () => {
  const products = useSelector((state) => state.cart);
  const router = useRouter();
  const redirectToCheckout = async () => {
    try {
      // Créer un checkout session
      const request = await fetch('/api/checkout_sessions_api', {
        method: 'POST',
      });
      const data = await request.json();
      if (data.statusCode === 500) {
        throw new Error(data.message);
      }
      const id = data.id;
      // Chargement de stripe
      const stripe = await getStripe();
      // Redirige au checkout en passant le session ID que l'on a récupérer de la première requête tout en haut
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      if (error.message === "L'utilisateur n'est pas connecté") {
        router.push('/sign-in');
      }
    }
  };

  // Rendu du composant
  return (
    <div className={styles.checkoutContainer}>
      <h1>Panier</h1>
      {products.length === 0 ? (
        <p>Il n'y a rien dans votre panier ...</p>
      ) : (
        <>
          <div className={styles.products}>
            {products.map((data) => (
              <CheckoutItem key={data.id} data={data} />
            ))}
          </div>
          <CalculatorPrice
            redirectToCheckout={redirectToCheckout}
            products={products}
          />
        </>
      )}
    </div>
  );
};

export default CheckoutContainer;
