
import type { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};
export const SPLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <p>this is phone layout</p>
      <div>{children}</div>
    </>
  );
};
