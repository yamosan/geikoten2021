import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { VFC } from "react";
import { useEffect, useRef } from "react";

import { Highlight, Image, Paragraph } from "@/components/basics";
import type { ColorLevel } from "@/components/ui";
import { ProjectCard, Section } from "@/components/ui";
import useWindowSize from "@/hooks/useWindowSize";
import type { Project as TProject } from "@/models";

type Props = {
  projects: TProject[];
};

export const Project: VFC<Props> = ({ projects }) => {
  const triggerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const anime = useRef<gsap.core.Tween>(null);

  const { width } = useWindowSize();
  //TODO: リサイズした時にxを変更したい
  useEffect(() => {
    const boxElm = boxRef.current;
    const triggerElm = triggerRef.current;
    if (boxElm === null || triggerElm === null) return;

    if (anime.current === null) {
      gsap.registerPlugin(ScrollTrigger);
      anime.current = gsap.to(boxElm, {
        // xPercent: -100,
        x: () => -boxElm.clientWidth + width * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: triggerElm,
          start: "bottom bottom",
          end: `+=${boxElm.clientWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }, [width]);

  return (
    <Section heading="PROJECT" subHeading="プロジェクト" ref={triggerRef} id="project">
      <div className="px-5 mb-4 md:ml-shead">
        <Paragraph className="lg:max-w-app lg:mx-auto">
          web会場限定！芸工生が力を合わせて企画しました！
          <Highlight>ぜったい全部見てね〜！</Highlight>
        </Paragraph>
      </div>
      <div className="flex items-center h-[66vh] bg-lightGray relative overflow-x-hidden">
        <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" />
        <div className="absolute flex pl-12 my-auto space-x-24 h-4/5 max-h-[800px] md:ml-shead" ref={boxRef}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i.toString()}
              index={project.id}
              title={project.title}
              subTitle={project.subTitle}
              description={project.description}
              colorLevel={(10 * i) as ColorLevel}
              imageSrc={"/images/project.png"}
              size="md"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
