import Image from 'next/image';
import { useState } from 'react';
import test from '@/public/test.avif';
import styles from './CardMenu.module.css';

const CardMenu = () => {
  const [quantityProduct, setQuantityProduct] = useState(1);

  const addQuantity = () => {
    setQuantityProduct((current) => current + 1);
  };

  const removeQuantity = () => {
    if (quantityProduct > 1) {
      setQuantityProduct((current) => current - 1);
    } else {
      return;
    }
  };

  return (
    <div className={styles.cardMenu}>
      <div className={styles.headerCard}>
        <Image src={test} />
      </div>
      <div className='contentCard'>
        <h2 className='titleCard'>American</h2>
        <p className={styles.priceCard}>5.00 €</p>
        <div className={styles.quantityCard}>
          <button onClick={removeQuantity}>-</button>
          <p>{quantityProduct}</p>
          <button onClick={addQuantity}>+</button>
        </div>
        <button className={styles.btnAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default CardMenu;
