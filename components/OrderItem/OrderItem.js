import styles from './OrderItem.module.css';

const OrderItem = ({ setVisibilityModal }) => {
  return (
    <div className={styles.orderItem}>
      <p>Numéro commande : #145874</p>
      <button onClick={() => setVisibilityModal(true)}>
        Voir les détails de la commande
      </button>
    </div>
  );
};

export default OrderItem;
