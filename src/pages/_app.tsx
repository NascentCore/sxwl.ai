import { AppProvider, useAppContext } from "@/hooks/useAppContext";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const Language = () => {
  const { setLanguage } = useAppContext();
  useEffect(() => {
    const userMainLanguage = navigator.languages
      ? navigator.languages[0]
      : navigator.language;

    if (userMainLanguage.includes("zh")) {
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
