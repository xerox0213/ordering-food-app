import styles from './Filter.module.css';
import Sushi from '@/public/sushi.png';
import Image from 'next/image';

const Filter = ({ text }) => {
  return (
    <button className={styles.btnFilter}>
      <Image src={Sushi} />
      {text}
    </button>
  );
};

export default Filter;
