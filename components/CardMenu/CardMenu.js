import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from './CardMenu.module.css';

const CardMenu = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: 'cart/addProduct',
      payload: { ...data, quantityProduct: 1 },
    });
  };

  return (
    <div className={styles.cardMenu}>
      <div className={styles.headerCard}>
        <Image src={data.img} fill loading='lazy' />
      </div>
      <div className={styles.contentCard}>
        <h3>{data.name}</h3>
      </div>

      <div className={styles.footerCard}>
        <p className={styles.priceCard}>{data.price}€</p>
        <button className={styles.btnAddToCart} onClick={addToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
