import { Provider } from "react-redux";
import { store } from "features";
import type { AppProps } from "next/app";
import { Layout } from "components";
import "@fontsource/inter";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "/api/graphql",
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
