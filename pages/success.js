import styles from '@/styles/Success.module.css';

const Success = () => {
  return (
    <div className='section'>
      <div className={styles.successMsg}>
        <h1> 🎉 Merci de votre achat ! 🎉</h1>
        <p>😋 Votre repas est déjà en préparation. Bon appétit ! 🍽️</p>
      </div>
    </div>
  );
};

export default Success;
