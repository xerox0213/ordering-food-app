import React from 'react';
import Image from 'next/image';
import useForm from '@/hooks/useForm';
import Point1 from '@/public/assiette.png';
import Point2 from '@/public/fast-food.png';
import Point3 from '@/public/nourriture.png';
import styles from './RegistrationForm.module.css';
import RegistrationInputs from '../RegistrationInputs/RegistrationInputs';
import Link from 'next/link';

// Composant composé
const RegistrationForm = () => {
  const [
    registrationStep,
    errorInputs,
    errorRegistration,
    registrationData,
    refForm,
    nextRegistrationStep,
    prevRegistrationStep,
  ] = useForm();

  // Rendu
  return (
    <div className={styles.container}>
      <div className={styles.indicatorRegistration}>
        <div
          className={styles.juiceBar}
          style={{ transform: `scaleX(${registrationStep / 2})` }}
        ></div>
        <div className={styles.point}>
          <Image src={Point1} />
        </div>
        <div className={styles.point}>
          <Image src={Point2} />
        </div>
        <div className={styles.point}>
          <Image src={Point3} />
        </div>
      </div>
      <div className={styles.containerForm}>
        {errorRegistration && (
          <div className={styles.infoErrorRegistration}>
            {errorRegistration}
          </div>
        )}
        <form ref={refForm}>
          <RegistrationInputs
            registrationStep={registrationStep}
            errorInputs={errorInputs}
            registrationData={registrationData.current}
          />
        </form>

        <div className={styles.btnContainer}>
          {registrationStep > 0 && registrationStep < 2 && (
            <button onClick={prevRegistrationStep} className={styles.prevBtn}>
              Précédent
            </button>
          )}
          {registrationStep < 2 && (
            <button onClick={nextRegistrationStep} className={styles.nextBtn}>
              Suivant
            </button>
          )}
        </div>
      </div>
      <p className={styles.infoAccount}>
        Déjà inscrit(e) ? <Link href={'/'}>Connectez-vous maintenant !</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
