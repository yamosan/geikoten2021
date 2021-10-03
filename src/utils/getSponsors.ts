import sponsors from "@/data/sponsors.json";
import type { Sponsor } from "@/models/Sponsor";

const SPONSORS = sponsors as Sponsor[];

type Query = {
  rank: Sponsor["rank"][];
};

export function getSponsors(query?: Query): Sponsor[] {
  if (!query) return SPONSORS;
  const { rank } = query;

  return SPONSORS.filter((sponsor) => rank.includes(sponsor.rank));
}
