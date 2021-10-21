import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { resolvePath } from "@/utils/resolvePath";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html lang="ja" className="text-text font-medium">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href={resolvePath("/fonts/Genuine/Genuine400.ttf")}
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link rel="icon" sizes="48x48" href={resolvePath("/favicon/favicon.ico")} />
          <link rel="apple-touch-icon" sizes="180x180" href={resolvePath("/favicon/apple-touch-icon.png")} />
        </Head>
        <style jsx>{`
          @font-face {
            font-family: "Genuine";
            src: url("${resolvePath("/fonts/Genuine/Genuine400.ttf")}");
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
