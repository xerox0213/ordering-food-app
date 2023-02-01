import Image from 'next/image';
import styles from './CheckoutItem.module.css';
import ContainerQttBtn from '@/components/QuantityButton/ContainerQttBtn/ContainerQttBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ data }) => {
  const [quantityProduct, setQuantityProduct] = useState(data.quantityProduct);
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
        <div className={styles.btnCheckoutItemContainer}>
          <ContainerQttBtn
            setQuantityProduct={setQuantityProduct}
            quantityProduct={quantityProduct}
          />
          <button onClick={removeProduct} className={styles.deleteItem}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
