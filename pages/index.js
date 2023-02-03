import styles from '@/styles/Home.module.css';
import RegistrationForm from '@/components/Registration/RegistrationForm/RegistrationForm';
import Background from '@/components/Background/Background';

export default function Home() {
  return (
    <>
      <Background />
      <RegistrationForm />
    </>
  );
}
