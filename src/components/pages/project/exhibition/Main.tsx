import type { VFC } from "react";

import { Section } from "@/components/ui";
import { WorkCard } from "@/components/ui/WorkCard";
import { THEMES } from "@/constants/exhibition";
import useMedia from "@/hooks/useMediaQuery";
import { Work } from "@/models";
type Props = {
  works: Work[];
  theme: Work["theme"];
};

export const Main: VFC<Props> = ({ works, theme }) => {
  const target = THEMES.find((t) => t.theme === theme);
  const colorKey = target.id;

  const isWide = useMedia("(min-width: 768px)");

  return (
    <Section heading="WORKS" subHeading="作品" headerColor={colorKey}>
      <div className="bg-white md:pl-shead pt-3">
        <div className="w-11/12 mx-auto lg:max-w-app ">
          <div className="grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full">
            {works.map((work) => (
              <WorkCard key={work.id} work={work} dialogLayout={isWide ? "row" : "column"} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
