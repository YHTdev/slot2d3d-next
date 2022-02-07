import Layout from "../components/layout";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const cbInit = useCallback(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    cbInit()
  }, [cbInit]);
  
  
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
