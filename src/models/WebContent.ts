type ContentType = "website" | "game" | "virtual";

type Author = {
  name: string;
  grade: 1 | 2 | 3;
  class: "M" | "N" | "O";
  avatarUrl: string;
};

export type WebContent = {
  id: number;
  type: ContentType;
  title: string;
  description: string;
  authors: Author[];
  thumbnailUrl: string;
  siteUrl: string;
};
