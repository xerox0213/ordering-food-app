import styles from './ErrorForm.module.css';
// Composant state full
const ErrorForm = ({ error }) => {
  return <div className={styles.infoErrorRegistration}>{error}</div>;
};

export default ErrorForm;
