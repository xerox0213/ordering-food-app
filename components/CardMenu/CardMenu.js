import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from './CardMenu.module.css';

const CardMenu = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: 'cart/addProduct',
      payload: { ...data },
    });
  };

  return (
    <div className={styles.cardMenu}>
      <div className={styles.headerCard}>
        <Image src={data.img} fill loading='lazy' />
      </div>
      <div className='contentCard'>
        <h3 className='titleCard'>{data.name}</h3>
        <p className={styles.priceCard}>{data.price}€</p>
        <button className={styles.btnAddToCart} onClick={addToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
