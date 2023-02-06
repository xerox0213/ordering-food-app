import styles from './CalculatorPrice.module.css';

const CalculatorPrice = ({ products, redirectToCheckout }) => {
  return (
    <div className={styles.calculatorPrice}>
      <div className={styles.infoContainer}>
        <p className={styles.infoText}>Eléments</p>
        <p className={styles.valueInfoText}>
          {products.reduce((acc, v) => {
            return acc + v.quantityProduct;
          }, 0)}
        </p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoText}>Total</p>
        <p className={styles.valueInfoText}>
          {products.reduce((acc, v) => {
            return acc + v.price * v.quantityProduct;
          }, 0)}
          €
        </p>
      </div>
      <button onClick={redirectToCheckout} className={styles.btn}>
        Passez commande
      </button>
    </div>
  );
};

export default CalculatorPrice;
