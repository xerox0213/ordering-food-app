import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IoIosCart } from 'react-icons/io';
import { BsFillCartFill } from 'react-icons/bs';

const IconCart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <Link className='cartLink' href={'/cart'}>
      <BsFillCartFill />
      <span className='qttCartLink'>
        {'('}
        {products.length === 0
          ? 'Nada'
          : products.reduce((acc, v) => acc + v.quantityProduct, 0)}
        {')'}
      </span>
    </Link>
  );
};

export default IconCart;
