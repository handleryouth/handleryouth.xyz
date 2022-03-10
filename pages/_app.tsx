import type { AppProps } from 'next/app';
import { Layout } from 'components';
import { store } from 'features';
import { Provider } from 'react-redux';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import '@fontsource/inter/variable.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: '/api/graphql',
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
