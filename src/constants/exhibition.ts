import { Work } from "@/models/Work";

export const THEMES: {
  id: "shutter" | "film" | "lens";
  theme: Work["theme"];
  href: string;
}[] = [
  { id: "shutter", theme: "シャッターの部屋", href: "/project/exhibition/shutter" },
  { id: "film", theme: "フィルムの部屋", href: "/project/exhibition/film" },
  { id: "lens", theme: "レンズの部屋", href: "/project/exhibition/lens" },
];
