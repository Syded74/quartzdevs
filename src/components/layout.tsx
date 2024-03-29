import React, { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children?: ReactNode; // Making `children` optional
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      
      {children}
    </>
  );
};

export default Layout;
