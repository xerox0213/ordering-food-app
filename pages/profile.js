// Page CSR -> pas besoin d'être optimisé SEO
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: () => fetch('/api/profile_api').then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='sectionWithoutCheckout'>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <div className='sectionWithoutCheckout'>
        <h1>Mes informations</h1>
        <p>Vous pouvez voir et mettre à jour vos informations.</p>
        <h4>Prénom :</h4>
        <p>{data.firstname}</p>
        <h4>Nom :</h4>
        <p>{data.name}</p>
        <h4>E-mail :</h4>
        <p>{data.email}</p>
        <h4>Adresse :</h4>
        <p>{data.address}</p>
        <h4>Ville :</h4>
        <p>{data.city}</p>
        <h4>Code postal :</h4>
        <p>{data.zip}</p>
      </div>
    </>
  );
};

export default Profile;
