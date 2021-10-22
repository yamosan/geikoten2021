import type { VFC } from "react";

import { Div100vh, Image } from "@/components/basics";
import { ColorLevel, ProjectCard, ScrollDown } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Project } from "@/models";

type Props = {
  project: Project;
};

export const Hero: VFC<Props> = ({ project }) => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <div className="relative">
      <Div100vh className="relative">
        <Image src={`/images/project/${project.name}/bg.png`} alt="背景" layout="fill" objectFit="cover" priority />
        <div className="md:pl-shead h-full relative">
          {/* TODO: とりあえずoverflow-x-hidden */}
          <div className="w-full h-full flex justify-center items-center overflow-x-hidden max-w-full">
            {isWide ? (
              <div className="h-1/2">
                <ProjectCard
                  project={project}
                  index={project.id}
                  colorLevel={(10 * project.id) as ColorLevel}
                  size="lg"
                  base="height"
                  descriptionType="flex"
                />
              </div>
            ) : (
              <div className="w-4/5">
                <ProjectCard
                  project={project}
                  index={project.id}
                  colorLevel={(10 * project.id) as ColorLevel}
                  size="md"
                  base="width"
                />
              </div>
            )}
            <ScrollDown className="z-10 absolute bottom-0" />
          </div>
        </div>
      </Div100vh>
    </div>
  );
};
