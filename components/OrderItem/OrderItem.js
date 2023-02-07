import styles from './OrderItem.module.css';

const OrderItem = ({ setVisibilityModal, orderData, setCurrentOrderData }) => {
  return (
    <div className={styles.orderItem}>
      <p>Numéro commande : #145874</p>
      <button
        onClick={() => {
          setCurrentOrderData(orderData);
          setVisibilityModal(true);
        }}
      >
        Voir la commande
      </button>
    </div>
  );
};

export default OrderItem;
