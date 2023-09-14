import { AppProvider, useAppContext } from "@/hooks/useAppContext";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const Language = () => {
  const { setLanguage } = useAppContext();
  useEffect(() => {
    if (window.navigator.language.includes("zh")) {
      setLanguage("zh");
    } else {
      setLanguage("en");
    }
  }, []);
  return <></>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Language />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
