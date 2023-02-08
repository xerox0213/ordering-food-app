import styles from './OrderItem.module.css';

const OrderItem = ({ setVisibilityModal, orderData, setCurrentOrderData }) => {
  return (
    <div className={styles.orderItem}>
      <p>
        {orderData.date_order.charAt(0).toUpperCase() +
          orderData.date_order.slice(1)}
      </p>
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
