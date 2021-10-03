export type Sponsor = {
  id: number;
  name: string;
  address: string;
  businessHours?: string;
  tel?: string;
  comment: string;
  rank: "gold" | "silver" | "bronze";
  images: {
    thumbnailUrl: string;
    mainUrl: string;
  };
};
