type Author = {
  name: string;
  grade: 1 | 2 | 3;
  class: "M" | "N" | "O";
  avatarUrl: string;
};

type Genre = "平面" | "立体" | "映像作品" | "web" | "ゲーム" | "その他";

type Theme = "シャッターの部屋" | "フィルムの部屋" | "レンズの部屋";

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
