import type { VFC } from "react";

type Props = {
  color?: "black" | "white";
};

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
};

export const ExternalLink: VFC<Props> = ({ color }) => {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16675 6.83333L15.0001 1"
        stroke={colorMap[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1111 1H15V4.88889"
        stroke={colorMap[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9.55556V13.4444C15 13.857 14.8361 14.2527 14.5444 14.5444C14.2527 14.8361 13.857 15 13.4444 15H2.55556C2.143 15 1.74733 14.8361 1.45561 14.5444C1.16389 14.2527 1 13.857 1 13.4444V2.55556C1 2.143 1.16389 1.74733 1.45561 1.45561C1.74733 1.16389 2.143 1 2.55556 1H6.44444"
        stroke={colorMap[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ExternalLink.defaultProps = {
  color: "white",
};
