import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

import { SmoothScroll } from "@/components/SmoothScroll";

const App = (props: AppProps) => {
  return (
    <>
      {/* TODO: /topへの遷移 が上手くいかない */}
      <SmoothScroll>
        <props.Component {...props.pageProps} />
      </SmoothScroll>
    </>
  );
};

export default App;
