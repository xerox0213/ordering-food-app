import QttBtn from '../QttBtn/QttBtn';
import styles from './ContainerQttBtn.module.css';

const ContainerQttBtn = ({ quantityProduct, idProduct }) => {
  return (
    <div className={styles.quantityBtnContainer}>
      <QttBtn
        type='remove'
        quantityProduct={quantityProduct}
        idProduct={idProduct}
      />
      <p>{quantityProduct}</p>
      <QttBtn
        type='add'
        quantityProduct={quantityProduct}
        idProduct={idProduct}
      />
    </div>
  );
};

export default ContainerQttBtn;
