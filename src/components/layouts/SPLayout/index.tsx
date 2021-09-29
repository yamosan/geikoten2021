import type { ReactNode, VFC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const SPLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between w-full min-h-screen">
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};
