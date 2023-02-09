import Image from 'next/image';
import Bg from '@/public/background.jpg';
import styles from './BgAuthRegPages.module.css';

const BgAuthRegPages = () => {
  return <Image className={styles.background} src={Bg} />;
};

export default BgAuthRegPages;
