import styles from './RegistrationInput.module.css';

const RegistrationInputs = ({
  registrationStep,
  errorInputs,
  registrationData,
}) => {
  // Rendu du composant
  if (registrationStep === 0) {
    return (
      <>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            id='email'
            defaultValue={registrationData?.email ? registrationData.email : ''}
          />
          <p
            className={
              errorInputs.includes('email')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Veuillez saisir une adresse email valide.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            id='password'
            defaultValue={
              registrationData?.password ? registrationData.password : ''
            }
          />
          <p
            className={
              errorInputs.includes('password')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Votre mot de passe doit contenir au moins 1 majuscule, 1 chiffres et
            8 caractères.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='confirm_password'>Confirmer le mot de passe</label>
          <input
            type='password'
            id='confirm_password'
            defaultValue={
              registrationData?.confirm_password
                ? registrationData.confirm_password
                : ''
            }
          />
          <p
            className={
              errorInputs.includes('confirm_password')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Les mots de passe ne correspondent pas.
          </p>
        </div>
      </>
    );
  } else if (registrationStep === 1) {
    return (
      <>
        <div className={styles.inputGroup}>
          <label htmlFor='firstname'>Prénom</label>
          <input
            type='text'
            id='firstname'
            defaultValue={
              registrationData?.firstname ? registrationData.firstname : ''
            }
          />
          <p
            className={
              errorInputs.includes('firstname')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Saisissez un prénom valide.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Nom</label>
          <input
            type='text'
            id='name'
            defaultValue={registrationData?.name ? registrationData.name : ''}
          />
          <p
            className={
              errorInputs.includes('name')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Saisissez un nom valide.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='address'>Adresse</label>
          <input
            type='text'
            id='address'
            defaultValue={
              registrationData?.address ? registrationData.address : ''
            }
          />
          <p
            className={
              errorInputs.includes('address')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Saisissez une adresse valide.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='city'>Ville</label>
          <input
            type='text'
            id='city'
            defaultValue={registrationData?.city ? registrationData.city : ''}
          />
          <p
            className={
              errorInputs.includes('city')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Saisissez une ville valide.
          </p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='zip'>Code postal</label>
          <input
            type='text'
            id='zip'
            defaultValue={registrationData?.zip ? registrationData.zip : ''}
          />
          <p
            className={
              errorInputs.includes('zip')
                ? `${styles.infoErrorInput} ${styles.active}`
                : styles.infoErrorInput
            }
          >
            Saisissez un code postal valide.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className={styles.titleRegistration}>
          🎉 Super, vous êtes inscrit(e) ! 🍽️
        </h2>
        <p className={styles.infoRegistration}>
          Vous pouvez commander dès mainteant chez Delivenas.
        </p>
      </>
    );
  }
};

export default RegistrationInputs;
