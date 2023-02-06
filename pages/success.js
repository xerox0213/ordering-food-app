const { useRouter } = require('next/router');

const Success = () => {
  const {
    query: { session_ID },
  } = useRouter();

  return <h1>ACHAT EFFECTUER</h1>;
};
