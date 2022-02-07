import Layout from "../components/layout";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Layout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
