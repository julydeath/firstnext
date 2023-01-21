import Document, { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Link
            rel="preload"
            href="/fonts/Solitreo-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></Link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
