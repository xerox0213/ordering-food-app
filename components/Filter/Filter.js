import styles from './Filter.module.css';
import Image from 'next/image';
const Filter = ({ text, type }) => {
  return (
    <button className={styles.btnFilter}>
      <Image src={`/icon_filter/${type}.png`} width={16} height={16} />
      {text}
    </button>
  );
};

export default Filter;
