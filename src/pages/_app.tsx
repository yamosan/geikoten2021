import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";

if (process.browser) {
  smoothscroll.polyfill();
}

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
