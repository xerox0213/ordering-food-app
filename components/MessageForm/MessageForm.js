import Link from 'next/link';
import styles from './MessageForm.module.css';

const MessageForm = ({ type }) => {
  if (type === 'registration') {
    return (
      <p className={styles.infoAccount}>
        Déjà inscrit(e) ?{' '}
        <Link href={'/sign-in'}>Connectez-vous maintenant !</Link>
      </p>
    );
  } else {
    return (
      <p className={styles.infoAccount}>
        Pas encore de compte ?{' '}
        <Link href={'/'}>Inscrivez-vous mainteant !</Link>
      </p>
    );
  }
};

export default MessageForm;
