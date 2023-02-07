import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;
  console.log(router.query);
  return (
    <div className='sectionWithoutCheckout'>
      <h1>ACHAT EFFECTUE</h1>
    </div>
  );
};

export default Success;
