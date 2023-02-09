import styles from './WarningMsgForm.module.css';
// Composant state full
const WarningMsgForm = ({ error }) => {
  return <div className={styles.infoErrorRegistration}>{error}</div>;
};

export default WarningMsgForm;
