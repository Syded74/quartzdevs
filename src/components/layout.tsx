// Layout.tsx

import React from 'react';
import { Inter } from 'next/font/google';
import "../../styles/globals.css";


const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC = ({ children }) => {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
};

export default Layout;

