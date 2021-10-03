import type { ReactNode, VFC } from "react";

import { SIDE_HEADER_WIDTH } from "@/components/layouts/constants";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const PCLayout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Header className="fixed top-0 left-0 z-10 h-screen bg-menuBg" style={{ width: SIDE_HEADER_WIDTH }}></Header>
      <div className="flex flex-col justify-between w-full min-h-screen">
        <main className="bg-bg">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
