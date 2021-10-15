import type { VFC } from "react";

import { Section, WorkCard } from "@/components/ui";
import { THEMES } from "@/constants/exhibition";
import { Work } from "@/models";
type Props = {
  works: Work[];
  theme: Work["theme"];
};

export const Main: VFC<Props> = ({ works, theme }) => {
  const target = THEMES.find((t) => t.theme === theme);
  const colorKey = target.id;

  return (
    <main>
      <Section heading="WORKS" subHeading="作品" headerColor={colorKey}>
        <div className="bg-white md:pl-shead pt-3">
          <div className="lg:max-w-app mx-auto">
            <div className="grid grid-cols-3 gap-x-8 gap-y-14">
              {works.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};
