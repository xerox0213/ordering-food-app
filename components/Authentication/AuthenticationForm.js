import useSignIn from '@/hooks/useSignIn';
import ErrorForm from '../ErrorForm/ErrorForm';
import MessageForm from '../MessageForm/MessageForm';
import styles from './AuthenticationForm.module.css';

const AuthenticationForm = () => {
  const [errorAuthentication, errorEmail, handleSubmit, loading] = useSignIn();
  // Rendu
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>Connectez-vous :</h1>
        {errorAuthentication && <ErrorForm error={errorAuthentication} />}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor='email'>E-mail</label>
            <input type='text' id='email' />
            <p
              className={
                errorEmail
                  ? `${styles.infoErrorInput} ${styles.active}`
                  : styles.infoErrorInput
              }
            >
              Saisissez une adresse email valide
            </p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password'>Mot de passe</label>
            <input type='password' id='password' />
          </div>
          <button>
            {loading ? <div className='loaderBtn'></div> : 'Connexion'}
          </button>
        </form>
      </div>
      <MessageForm type='authentication' />
    </div>
  );
};

export default AuthenticationForm;
