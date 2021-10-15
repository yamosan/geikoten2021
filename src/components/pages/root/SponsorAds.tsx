import type { VFC } from "react";

import { SponsorsList } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import type { Sponsor } from "@/models/Sponsor";

type Props = {
  silverSponsors: Sponsor[];
  bronzeSponsors: Sponsor[];
};

export const SponsorAds: VFC<Props> = ({ silverSponsors, bronzeSponsors }) => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <div className="md:ml-shead">
      <div className="flex flex-col w-9/12 max-w-[1000px] mx-auto my-16 md:my-28 space-y-12 md:space-y-8">
        <SponsorsList sponsors={silverSponsors} direction={isWide ? "row" : "column"} />
        <SponsorsList sponsors={bronzeSponsors} direction={isWide ? "row" : "column"} />
      </div>
    </div>
  );
};
