import Layout from "../components/layout";

import "../styles/globals.scss";
import { Provider as StoreProvider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect } from "react";
import { store } from "../store/store";
import { ToastProvider } from "react-toast-notifications";
import { Instance, SetupInspector } from "../Services";
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

  const getStatus = useCallback(() => {
    Instance({
      url: "/auth/get_status",
      method: "GET",
    });
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return (
    <StoreProvider store={store}>
      <ToastProvider placement="top-center">
        {Component.auth ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ToastProvider>
    </StoreProvider>
  );
}

SetupInspector(store);

export default MyApp;
