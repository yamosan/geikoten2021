import "tailwindcss/tailwind.css";

// import "scroll-behavior-polyfill";
import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
