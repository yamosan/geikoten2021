export type TLink = {
  id: string;
  text: string;
  subText: string;
  path: string;
  activePatterns: string[];
};

export const NAV_LINKS: TLink[] = [
  { id: "top", text: "TOP", subText: "トップ", path: "/#top", activePatterns: ["/#top", "/"] },
  { id: "about", text: "ABOUT", subText: "芸工展とは", path: "/#about", activePatterns: ["/#about", "/about"] },
  {
    id: "project",
    text: "PROJECT",
    subText: "企画",
    path: "/#project",
    activePatterns: ["/#project", "/project/**/*"],
  },
  { id: "event", text: "EVENT", subText: "イベント", path: "/#event", activePatterns: ["/#event"] },
];
