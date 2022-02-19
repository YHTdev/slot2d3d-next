import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { Provider as StoreProvider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect } from "react";
import { store } from "../store/store";
import { ToastProvider } from "react-toast-notifications";
import { SetupInspector } from "../Services";
function MyApp({ Component, pageProps }) {
  const cbInit = useCallback(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    cbInit();
  }, [cbInit]);
  
  return (
    <StoreProvider store={store}>
      <SessionProvider>
        <ToastProvider placement="top-center">
          {Component.auth ? (
            <Layout>
              <Component {...pageProps}  />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ToastProvider>
      </SessionProvider>
    </StoreProvider>
  );
}

SetupInspector(store);
export default MyApp;
