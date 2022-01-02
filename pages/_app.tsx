import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout, Sidebar } from "components";
import { store } from "features";
import "@fontsource/inter";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Sidebar />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
