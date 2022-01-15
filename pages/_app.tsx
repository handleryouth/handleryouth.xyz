import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout, Sidebar } from "components";
import { store } from "features";
import axios from "axios";
import { SWRConfig } from "swr";
import "@fontsource/inter";
import "../styles/globals.css";

const fetcher = (url: string) => axios(url).then((res) => res.data);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Sidebar />
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
