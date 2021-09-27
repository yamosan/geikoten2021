import type { ReactNode, VFC } from "react";

import useMedia from "@/hooks/useMediaQuery";
import useMounted from "@/hooks/useMounted";

import { PCLayout } from "./PCLayout";
import { SPLayout } from "./SPLayout";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得
  const mounted = useMounted();

  if (!mounted) return <></>;

  return isWide ? <PCLayout>{children}</PCLayout> : <SPLayout>{children}</SPLayout>;
};
