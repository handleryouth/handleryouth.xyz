import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from 'components';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '../styles/globals.css';
import { store } from 'lib/redux';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: '/api/graphql',
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
