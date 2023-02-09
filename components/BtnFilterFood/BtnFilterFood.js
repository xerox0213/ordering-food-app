import Image from 'next/image';
import styles from './BtnFilterFood.module.css';

const BtnFilterFood = ({ text, type, search, setSearch }) => {
  return (
    <button
      className={
        type === search
          ? `${styles.active} ${styles.btnFilter}`
          : styles.btnFilter
      }
      onClick={() => {
        console.log('search');
        setSearch(type);
      }}
    >
      <Image src={`/icon_filter/${type}.png`} width={16} height={16} />
      {text}
    </button>
  );
};

export default BtnFilterFood;
