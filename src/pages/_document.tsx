import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Coffee Delivery</title>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Itim&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-base-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
