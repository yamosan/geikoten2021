export type Sponsor = {
  name: string;
  address: string;
  businessHours?: string;
  tel?: string;
  comment: string;
  rank: number;
  images: {
    thumbnailUrl: string;
    mainUrl: string;
  };
};
