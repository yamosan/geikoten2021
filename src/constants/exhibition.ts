import { Theme } from "@/models/Exhibition";

export const THEMES: {
  id: Theme;
  title: string;
  href: string;
}[] = [
  { id: "shutter", title: "シャッターの部屋", href: "/project/exhibition/shutter" },
  { id: "film", title: "フィルムの部屋", href: "/project/exhibition/film" },
  { id: "lens", title: "レンズの部屋", href: "/project/exhibition/lens" },
];
