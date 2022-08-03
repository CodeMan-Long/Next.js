import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

import '../styles/globals.css';
import client from '../apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
