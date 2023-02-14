import BgAuthRegPages from '@/components/BgAuthRegPages/BgAuthRegPages';
import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';
import NoCache from '@/components/NoCache/NoCache';

const SignIn = () => {
  return (
    <>
      <NoCache />
      <BgAuthRegPages />
      <AuthenticationForm />
    </>
  );
};

export default SignIn;
