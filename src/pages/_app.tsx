import "@/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// App.getInitialProps = async ({ ctx }: any) => {
//   const { req } = ctx;
//   const time = new Date().toLocaleString();
//   const userAgent = req.headers["user-agent"];
//   const clientInfo = { time, userAgent };
//   console.log(clientInfo);
//   const pageProps = {};
//   return {
//     pageProps,
//   };
// };
