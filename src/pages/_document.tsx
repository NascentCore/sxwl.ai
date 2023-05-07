import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <title>算想未来</title>
        <meta name="description" content="nascentcore.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className="app_body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
