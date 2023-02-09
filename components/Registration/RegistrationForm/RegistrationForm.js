import React from 'react';
import Image from 'next/image';
import Point1 from '@/public/assiette.png';
import Point2 from '@/public/fast-food.png';
import Point3 from '@/public/nourriture.png';
import useRegister from '@/hooks/useRegister';
import styles from './RegistrationForm.module.css';
import WarningMsgForm from '@/components/WarningMsgForm/WarningMsgForm';
import RegistrationInputs from '../RegistrationInputs/RegistrationInputs';
import RedirectionMsgForm from '@/components/RedirectionMsgForm/RedirectionMsgForm';

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
    loading,
  ] = useRegister();

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
        {errorRegistration && <WarningMsgForm error={errorRegistration} />}
        {registrationStep < 2 && <h1>Inscrivez-vous :</h1>}
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
              {loading ? <div className='loaderBtn'></div> : 'Suivant'}
            </button>
          )}
        </div>
      </div>
      <RedirectionMsgForm type='registration' />
    </div>
  );
};

export default RegistrationForm;
