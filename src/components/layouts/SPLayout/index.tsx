import type { ReactNode, VFC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const SPLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header className="fixed top-0 left-0 z-50" />
      <div className="flex flex-col justify-between w-full min-h-screen">
        <main className="bg-bg">{children}</main>
        <Footer />
      </div>
    </>
  );
};
