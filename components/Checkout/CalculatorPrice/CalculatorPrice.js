import styles from './CalculatorPrice.module.css';

const CalculatorPrice = () => {
  return (
    <div className={styles.calculatorPrice}>
      <div className={styles.infoContainer}>
        <p className={styles.infoText}>Eléments</p>
        <p className={styles.valueInfoText}>7</p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoText}>Total</p>
        <p className={styles.valueInfoText}>31 €</p>
      </div>
      <button className={styles.btn}>Passez commande</button>
    </div>
  );
};

export default CalculatorPrice;
