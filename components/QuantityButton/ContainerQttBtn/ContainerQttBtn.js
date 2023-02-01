import QttBtn from '../QttBtn/QttBtn';
import styles from './ContainerQttBtn.module.css';

const ContainerQttBtn = ({ setQuantityProduct, quantityProduct }) => {
  return (
    <div className={styles.quantityBtnContainer}>
      <QttBtn
        type='remove'
        setQuantityProduct={setQuantityProduct}
        quantityProduct={quantityProduct}
      />
      <p>{quantityProduct}</p>
      <QttBtn
        type='add'
        setQuantityProduct={setQuantityProduct}
        quantityProduct={quantityProduct}
      />
    </div>
  );
};

export default ContainerQttBtn;
