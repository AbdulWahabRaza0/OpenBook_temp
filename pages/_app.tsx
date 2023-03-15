import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@uiw/react-markdown-preview/esm/styles/markdown.css";
import { Provider } from "react-redux";
import { Provider as Providers } from "next-auth/providers";
import React, { useEffect } from "react";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />{" "}
      </Provider>
    </SessionProvider>
  );
}
