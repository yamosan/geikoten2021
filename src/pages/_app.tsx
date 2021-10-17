import "tailwindcss/tailwind.css";
import "@/libs/firebase";

import type { AppProps } from "next/app";

import { SmoothScroll } from "@/components/SmoothScroll";
import VisitorCountProvider from "@/store/vistorCount";
import VotedIdsProvider from "@/store/votedIds";

const App = (props: AppProps) => {
  return (
    <>
      {/* TODO: /topへの遷移 が上手くいかない */}
      <VotedIdsProvider>
        <VisitorCountProvider>
          <SmoothScroll>
            <props.Component {...props.pageProps} />
          </SmoothScroll>
        </VisitorCountProvider>
      </VotedIdsProvider>
    </>
  );
};

export default App;
