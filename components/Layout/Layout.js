import React from 'react';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import Navbar from '../Navbar/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <main className={roboto.className}>
      {asPath !== '/sign-in' && asPath !== '/' && <Navbar />}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </main>
  );
};

export default Layout;
