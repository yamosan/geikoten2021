import type { VFC } from "react";
import { useState } from "react";

import { Image } from "@/components/basics";
import { SponsorDialog } from "@/components/ui/SponsorDialog";
import { Sponsor } from "@/models/Sponsor";
import { getSponsors } from "@/utils/getSponsors";

const RANK_DIMENSION_MAP = {
  silver: { width: 294, height: 137 },
  bronze: { width: 218, height: 76 },
};

export const SponsorsList: VFC = () => {
  const sponsors = getSponsors({ rank: ["silver", "bronze"] });
  const [sponsor, setSponsor] = useState<Sponsor | null>(null);
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray">
      <SponsorDialog open={sponsor !== null} onClose={() => setSponsor(null)} sponsor={sponsor} />

      <div className="flex flex-col w-full space-y-6">
        {sponsors.map((s) => (
          <button key={s.id} onClick={() => setSponsor(s)} className="w-full">
            <Image src={s.images.thumbnailUrl} {...RANK_DIMENSION_MAP[s.rank]} layout="responsive" alt={s.name} />
          </button>
        ))}
      </div>
    </div>
  );
};
