import "tailwindcss/tailwind.css";
import "@/libs/firebase";

import type { AppProps } from "next/app";

import { SmoothScroll } from "@/components/SmoothScroll";
import VotedIdsProvider from "@/store/votedIds";

const App = (props: AppProps) => {
  return (
    <>
      {/* TODO: /topへの遷移 が上手くいかない */}
      <VotedIdsProvider>
        <SmoothScroll>
          <props.Component {...props.pageProps} />
        </SmoothScroll>
      </VotedIdsProvider>
    </>
  );
};

export default App;
