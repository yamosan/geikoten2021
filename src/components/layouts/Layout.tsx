import { ReactNode, VFC } from "react";

import useMedia from "@/hooks/useMediaQuery";

import { PCLayout } from "./PCLayout";
import { SPLayout } from "./SPLayout";

type Props = {
  children?: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  // TODO: 開発環境でハイドレーション関連のエラー 参考: https://mui.com/components/use-media-query/#server-side-rendering
  const isWide = useMedia("(min-width: 768px)");

  return isWide ? <PCLayout>{children}</PCLayout> : <SPLayout>{children}</SPLayout>;
};
