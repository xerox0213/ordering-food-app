import useFetch from '@/hooks/useFetch';
import LoaderPage from '@/components/LoaderPage/LoaderPage';
import NoCache from '@/components/NoCache/NoCache';

const Profile = () => {
  const [data, isFetching, isError] = useFetch(['userData'], 'profile_api');

  if (isFetching) {
    return (
      <div className='section'>
        <LoaderPage />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='section'>
        <h1>
          Wops, une erreur s'est produite il semblerait que vous n'êtes plus
          connecté.
        </h1>
      </div>
    );
  }

  return (
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
  );
};

export default Profile;
