export type Project = {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  description: string;
  images: {
    thumbnailUrl: string;
    backgroundUrl: string;
  };
  siteUrl: {
    href: string;
    external: boolean;
  };
};
