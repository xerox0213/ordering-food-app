import { IoMdClose } from 'react-icons/io';
import styles from './OrderModal.module.css';

const OrderModal = ({
  setVisibilityModal,
  currentOrderData,
  setCurrentOrderData,
}) => {
  return (
    <div className={styles.modalContainer}>
      <div
        onClick={() => {
          setCurrentOrderData(null);
          setVisibilityModal(false);
        }}
        className={styles.bgModal}
      ></div>
      <div className={styles.modal}>
        <button
          onClick={() => {
            setCurrentOrderData(null);
            setVisibilityModal(false);
          }}
          className={styles.closeBtnModal}
        >
          <IoMdClose />
        </button>
        <div className={styles.header}>
          <p>{currentOrderData.date_order}</p>
          <h2>Merci d'avoir passé commande, {currentOrderData.firstname}</h2>
        </div>
        <div className={styles.contentModal}>
          <div className={styles.section}>
            <h3>
              <span>Total</span>
              <span>{currentOrderData.total_order / 100} €</span>
            </h3>
          </div>
          <div className={styles.section}>
            {currentOrderData.items.map((item) => {
              return (
                <p>
                  <span>
                    <span className={styles.qtt}>{item.quantity_item}</span>{' '}
                    <span>{item.name_item}</span>
                  </span>{' '}
                  <span>{item.price_item / 100} €</span>
                </p>
              );
            })}
          </div>
          <div className={styles.section}>
            <p>
              <span className={styles.boldSpan}>Sous-total</span>
              <span>{currentOrderData.subtotal_order / 100} €</span>
            </p>
            <p>
              <span>Frais de livraison</span>{' '}
              <span>{currentOrderData.deliveryCharges_order / 100} €</span>
            </p>
            <p>
              <span>Promotion</span>{' '}
              <span className={styles.lightSpan}>
                {currentOrderData.sale_order / 100} €
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
