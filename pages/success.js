import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { session_ID } = router.query;
  return <h1>ACHAT EFFECTUER {session_ID}</h1>;
};

export default Success;
