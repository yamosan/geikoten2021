import clsx from "clsx";
import type { VFC } from "react";
import { useState } from "react";

import { Image } from "@/components/basics";
import { SponsorDialog } from "@/components/ui/SponsorDialog";
import { IMAGE_DIMENSIONS_BY_RANK } from "@/constants/sponsor";
import { Sponsor } from "@/models/Sponsor";

type Props = {
  sponsors: Sponsor[];
  direction: "row" | "column";
};

export const SponsorsList: VFC<Props> = ({ sponsors, direction }) => {
  const [current, setCurrent] = useState<Sponsor | null>(null);
  return (
    <div>
      <SponsorDialog open={current !== null} onClose={() => setCurrent(null)} sponsor={current} />

      <div
        className={clsx("flex w-full", {
          "flex-row": direction === "row",
          "flex-col space-y-6": direction === "column",
        })}
      >
        {sponsors.map((sponsor) => (
          <button
            key={sponsor.id}
            onClick={() => setCurrent(sponsor)}
            className="w-full transition-opacity duration-300 md:hover:opacity-80"
          >
            <Image
              src={sponsor.images.thumbnailUrl}
              {...IMAGE_DIMENSIONS_BY_RANK[sponsor.rank]}
              layout="responsive"
              alt={sponsor.name}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
