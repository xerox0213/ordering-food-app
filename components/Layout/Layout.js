import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import { Roboto } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LinkCart from '../LinkCart/LinkCart';
import InfoContainer from '../InfoModal/InfoContainer';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <main className={roboto.className}>
      <InfoContainer />
      <LinkCart />
      {asPath !== '/sign-in' && asPath !== '/' && <Navbar />}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </main>
  );
};

export default Layout;
