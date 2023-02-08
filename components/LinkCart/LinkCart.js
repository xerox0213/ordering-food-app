import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';
import styles from './LinkCart.module.css';

const LinkCart = () => {
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

export default LinkCart;
