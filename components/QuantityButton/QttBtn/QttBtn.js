import styles from './QttBtn.module.css';
import { useDispatch } from 'react-redux';

const QttBtn = ({ type, quantityProduct, idProduct }) => {
  const dispatch = useDispatch();
  if (type === 'add') {
    const addQuantity = () => {
      dispatch({
        type: 'cart/modifyQuantityOfProduct',
        payload: {
          idProduct,
          quantityProduct: quantityProduct + 1,
        },
      });
    };
    return (
      <button className={styles.btn} onClick={addQuantity}>
        +
      </button>
    );
  } else {
    const removeQuantity = () => {
      if (quantityProduct > 1) {
        dispatch({
          type: 'cart/modifyQuantityOfProduct',
          payload: {
            idProduct,
            quantityProduct: quantityProduct - 1,
          },
        });
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
