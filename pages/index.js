import BgAuthRegPages from '@/components/BgAuthRegPages/BgAuthRegPages';
import RegistrationForm from '@/components/Registration/RegistrationForm/RegistrationForm';
import NoCache from '@/components/NoCache/NoCache';

export default function Home() {
  return (
    <>
      <NoCache />
      <BgAuthRegPages />
      <RegistrationForm />
    </>
  );
}
