import BgAuthRegPages from '@/components/BgAuthRegPages/BgAuthRegPages';
import RegistrationForm from '@/components/Registration/RegistrationForm/RegistrationForm';

export default function Home() {
  return (
    <>
      <BgAuthRegPages />
      <RegistrationForm />
    </>
  );
}

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
