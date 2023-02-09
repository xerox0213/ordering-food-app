import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './LinkToCart.module.css';
import { BsFillCartFill } from 'react-icons/bs';

const LinkToCart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <Link className={styles.cartLink} href={'/cart'}>
      <BsFillCartFill />
      <span className={styles.qttCartLink}>
        {'('}
        {products.length === 0
          ? 0
          : products.reduce((acc, v) => acc + v.quantityProduct, 0)}
        {')'}
      </span>
    </Link>
  );
};

export default LinkToCart;
