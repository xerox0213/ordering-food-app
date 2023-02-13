import BgAuthRegPages from '@/components/BgAuthRegPages/BgAuthRegPages';
import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';

const SignIn = () => {
  return (
    <>
      <BgAuthRegPages />
      <AuthenticationForm />
    </>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (token) {
    return {
      redirect: {
        destination: '/menu',
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
