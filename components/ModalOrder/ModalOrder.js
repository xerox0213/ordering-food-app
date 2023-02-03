import styles from './MordalOrder.module.css';

const ModalOrder = ({ setVisibilityModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div
        onClick={() => setVisibilityModal(false)}
        className={styles.bgModal}
      ></div>
      <div className={styles.contentModal}>
        <h2>Détails de votre commande :</h2>
        <p>Numéro de la commande : #145874</p>
        <p>Prix de la commande : 85€</p>
        <p>Adresse de livraison :</p>
        <p>Tructructruc 787</p>
        <p>74585</p>
        <p>Paris</p>
      </div>
    </div>
  );
};

export default ModalOrder;
