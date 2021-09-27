import type { ReactNode, VFC } from "react";

import { SIDE_NAV_WIDTH } from "@/components/layouts/constants";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const PCLayout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 z-10 h-screen bg-menuBg" style={{ width: SIDE_NAV_WIDTH }}>
        <Header></Header>
      </div>
      <div className="flex flex-col justify-between w-full min-h-screen">
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
