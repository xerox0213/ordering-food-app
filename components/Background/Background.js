import Image from 'next/image';
import Bg from '@/public/background.jpg';
import styles from './Background.module.css';

const Background = () => {
  return <Image className={styles.background} src={Bg} />;
};

export default Background;
