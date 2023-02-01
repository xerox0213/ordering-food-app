import { useSelector } from 'react-redux';
import styles from './CheckoutContainer.module.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CalculatorPrice from '../CalculatorPrice/CalculatorPrice';

const CheckoutContainer = () => {
  const products = useSelector((state) => state.cart);
  // Rendu
  return (
    <div className={styles.checkoutContainer}>
      <h1>Panier</h1>
      {products.length === 0 ? (
        <p>Il n'y a rien dans votre panier ...</p>
      ) : (
        <>
          <div className={styles.products}>
            {products.map((data) => (
              <CheckoutItem data={data} />
            ))}
          </div>
          <CalculatorPrice />
        </>
      )}
    </div>
  );
};

export default CheckoutContainer;
