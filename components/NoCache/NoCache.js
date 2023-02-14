// components/NoCache.js
import Head from 'next/head';

const NoCache = () => {
  return (
    <Head>
      <meta
        httpEquiv='Cache-Control'
        content='no-cache, no-store, must-revalidate'
      />
      <meta httpEquiv='Pragma' content='no-cache' />
      <meta httpEquiv='Expires' content='0' />
    </Head>
  );
};

export default NoCache;
