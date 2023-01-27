import React from 'react';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return <main className={roboto.className}>{children}</main>;
};

export default Layout;
