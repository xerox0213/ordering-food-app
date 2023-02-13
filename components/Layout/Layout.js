import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Roboto } from '@next/font/google';
import LinkToCart from '../LinkToCart/LinkToCart';
import ToastContainer from '../Toast/ToastContainer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const dispatch = useDispatch();

  // Synchronise le localStorage avec le state redux qui est effectué une seule fois -> montage du composant Layout
  useEffect(() => {
    if (window !== undefined && localStorage.getItem('cart')) {
      dispatch({
        type: 'cart/synchronizeWithLocalStorage',
        payload: JSON.parse(localStorage.getItem('cart')),
      });
    } else {
      return;
    }
  }, []);

  return (
    <main className={roboto.className}>
      <ToastContainer />
      {asPath !== '/' && asPath !== '/sign-in' && <LinkToCart />}
      {asPath !== '/sign-in' && asPath !== '/' && <Navbar />}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </main>
  );
};

export default Layout;
