import useFetch from '@/hooks/useFetch';
import LoaderPage from '@/components/LoaderPage/LoaderPage';
import { getDataOfUser } from './api/profile_api';

const Profile = ({ profile: data, error: isError }) => {
  if (isError) {
    return (
      <div className='section'>
        <h1>Wops il semblerait qu'il y a eu une erreur</h1>
      </div>
    );
  }

  return (
    <>
      <div className='section'>
        <h1>Vos informations :</h1>
        <div className='group'>
          <h4>Prénom</h4>
          <p>{data.firstname}</p>
        </div>
        <div className='group'>
          <h4>Nom</h4>
          <p>{data.name}</p>
        </div>
        <div className='group'>
          <h4>E-mail</h4>
          <p>{data.email}</p>
        </div>
        <div className='group'>
          <h4>Ville</h4>
          <p>{data.city}</p>
        </div>
        <div className='group'>
          <h4>Code postal</h4>
          <p>{data.zip}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
      },
    };
  }

  try {
    const profile = await getDataOfUser(token);
    return {
      props: {
        profile,
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        profile: {},
        error: true,
      },
    };
  }
}
