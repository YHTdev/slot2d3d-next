import Layout from "../components/layout";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      {Component.auth ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
