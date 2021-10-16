import { useMemo, VFC } from "react";

import { Section } from "@/components/ui";
import { WorkCard } from "@/components/ui/WorkCard";
import useMedia from "@/hooks/useMediaQuery";
import { Theme, Work } from "@/models";
import { useVotedIds } from "@/store";
type Props = {
  works: Work[];
  themeColor: Theme;
};

export const Main: VFC<Props> = ({ works, themeColor }) => {
  const isWide = useMedia("(min-width: 768px)");
  const { votedIds, vote } = useVotedIds();

  const ids = useMemo(() => new Set(votedIds), [votedIds]);

  return (
    <Section heading="WORKS" subHeading="作品" headerColor={themeColor} className="relative z-10 mt-[-80px] bg-white">
      <div className="md:pl-shead pt-3">
        <div className="w-11/12 mx-auto lg:max-w-app ">
          <div className="grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full">
            {works.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                dialogLayout={isWide ? "row" : "column"}
                voted={ids.has(work.id)}
                handleClick={() => vote(work.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
