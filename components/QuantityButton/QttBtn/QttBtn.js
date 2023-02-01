import styles from './QttBtn.module.css';

const QttBtn = ({ type, setQuantityProduct, quantityProduct }) => {
  if (type === 'add') {
    const addQuantity = () => {
      setQuantityProduct(quantityProduct + 1);
    };
    return (
      <button className={styles.btn} onClick={addQuantity}>
        +
      </button>
    );
  } else {
    const removeQuantity = () => {
      if (quantityProduct > 1) {
        setQuantityProduct((current) => current - 1);
      } else {
        return;
      }
    };
    return (
      <button className={styles.btn} onClick={removeQuantity}>
        -
      </button>
    );
  }
};

export default QttBtn;
