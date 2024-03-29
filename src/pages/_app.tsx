// First, import the AppProps type from 'next/app'
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

// Then, use the AppProps type to type the function parameters
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
