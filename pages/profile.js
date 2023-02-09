import { useQuery } from '@tanstack/react-query';
import LoaderPage from '@/components/LoaderPage/LoaderPage';

const Profile = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: () => fetch('/api/profile_api').then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='section'>
        <LoaderPage />
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
          <h4>Code postale</h4>
          <p>{data.zip}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
