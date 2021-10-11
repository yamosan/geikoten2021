import "tailwindcss/tailwind.css";
import "scroll-behavior-polyfill";

import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <>
      <div scroll-behavior="smooth">
        <props.Component {...props.pageProps} />
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default App;
