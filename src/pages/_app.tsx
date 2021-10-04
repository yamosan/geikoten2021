import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
