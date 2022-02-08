import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-x96.png" />
        <meta name="theme-color" content="#1e3b8a" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#1e3b8a"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
