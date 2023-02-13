import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '@/styles/Success.module.css';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'cart/clearCart', payload: [] });
  }, []);

  return (
    <div className='section'>
      <div className={styles.successMsg}>
        <h1 style={{ width: '100%' }}> 🎉 Merci de votre achat ! 🎉</h1>
        <p>😋 Votre repas est déjà en préparation. Bon appétit ! 🍽️</p>
      </div>
    </div>
  );
};

export default Success;
