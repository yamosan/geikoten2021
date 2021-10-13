import { Work } from "@/models/Work";

export const THEMES: {
  theme: Work["theme"];
  href: string;
}[] = [
  { theme: "シャッターの部屋", href: "/project/exhibition/shutter" },
  { theme: "フィルムの部屋", href: "/project/exhibition/film" },
  { theme: "レンズの部屋", href: "/project/exhibition/lens" },
];
