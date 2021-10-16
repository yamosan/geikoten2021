type Author = {
  name: string;
  grade: 1 | 2 | 3;
  class: "M" | "N" | "O";
  avatarUrl: string;
};

type Genre = "平面" | "立体" | "映像作品" | "web" | "ゲーム" | "その他";

export type Theme = "shutter" | "film" | "lens";

export type Work = {
  id: number;
  author: Author;
  title: string;
  genre: Genre;
  description: string;
  theme: Theme;
  thumbnailUrl: string;
  siteUrl?: string;
};

export type Room = {
  id: number;
  theme: Theme;
  href: string;
  thumbnailUrl: string;
  title: string;
  description: string;
};
