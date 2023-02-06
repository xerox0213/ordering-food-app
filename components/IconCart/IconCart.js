import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';

const IconCart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <Link className='cartLink' href={'/cart'}>
      <BsFillCartFill />
      <span className='qttCartLink'>
        {'('}
        {products.length === 0
          ? 0
          : products.reduce((acc, v) => acc + v.quantityProduct, 0)}
        {')'}
      </span>
    </Link>
  );
};

export default IconCart;
