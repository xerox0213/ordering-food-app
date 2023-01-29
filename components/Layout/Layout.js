import React from 'react';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import Navbar from '../Navbar/Navbar';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <main className={roboto.className}>
      {asPath !== '/sign-in' && asPath !== '/' && <Navbar />}
      {children}
    </main>
  );
};

export default Layout;
