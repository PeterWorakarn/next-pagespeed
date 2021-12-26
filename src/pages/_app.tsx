import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.scrollTo(0,10);
    }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
