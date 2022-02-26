import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/primeicons/primeicons.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primereact/resources/primereact.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css"
          />
          <link
            rel="preload"
            href="/api/project"
            as="fetch"
            crossOrigin="anonymous"
          />
          <meta name="language" content="English" />
          <meta name="theme-color" content="#4285f4" />
          <meta name="author" content="Tony David" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
