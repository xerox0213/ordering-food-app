import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';
import ContainerQttBtn from '@/components/QuantityButton/ContainerQttBtn/ContainerQttBtn';

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch({ type: 'cart/removeProduct', payload: data.id });
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.headerCartItem}>
        <Image src={data.img} fill loading='lazy' />
      </div>
      <div className={styles.contentCartItem}>
        <h4>{data.name}</h4>
        <p className={styles.priceCard}>{data.price}€</p>
      </div>
      <div className={styles.btnCheckoutItemContainer}>
        <ContainerQttBtn
          quantityProduct={data.quantityProduct}
          idProduct={data.id}
        />
        <button onClick={removeProduct} className={styles.deleteItem}>
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
