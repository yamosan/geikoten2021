import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

import { FadeIn } from "@/components/animation";
// import { use100vh } from "react-div-100vh";
import { Highlight, Image, Paragraph } from "@/components/basics";
import type { ColorLevel } from "@/components/ui";
import { ProjectCard, Section } from "@/components/ui";
import { use100vh } from "@/hooks/use100vh";
import useMedia from "@/hooks/useMediaQuery";
import useWindowSize from "@/hooks/useWindowSize";
import type { Project as TProject } from "@/models";

type Props = {
  projects: TProject[];
};

export const Project: VFC<Props> = ({ projects }) => {
  const triggerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const anime = useRef<gsap.core.Tween>(null);
  const isWide = useMedia("(min-width: 768px)");
  const height = use100vh();

  const { width } = useWindowSize();
  // TODO: リサイズした時にxを変更したい
  // TODO: モバイルブラウザでアドレスバーが開閉したタイミングでCLSが起きる
  useEffect(() => {
    const boxElm = boxRef.current;
    const triggerElm = triggerRef.current;
    if (boxElm === null || triggerElm === null) return;

    if (anime.current === null) {
      gsap.registerPlugin(ScrollTrigger);
      if (isMobile) {
        ScrollTrigger.config({
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        });
      }
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
    <Section heading="PROJECT" subHeading="企画" ref={triggerRef} className="pb-4" id="project">
      <div className="px-5 md:px-12 mb-4 md:ml-shead">
        <FadeIn>
          <Paragraph className="lg:max-w-app lg:mx-auto">
            web会場限定！芸工生が力を合わせて企画しました！
            <Highlight>ぜったい全部見てね〜！</Highlight>
          </Paragraph>
        </FadeIn>
      </div>
      <div
        className="flex items-center min-h-[480px] bg-lightGray relative overflow-x-hidden"
        style={{ height: height ? height * 0.66 : "66vh" }}
      >
        <Image src="/images/top/bg.jpg" alt="背景" layout="fill" objectFit="cover" />
        <div
          className="absolute flex pl-12 my-auto space-x-24 h-[65%] md:h-[73%] max-h-[800px] md:ml-shead"
          ref={boxRef}
        >
          {projects.map((project, i) => (
            <Link href={project.siteUrl.href} key={project.id.toString()}>
              <a className="block h-full">
                {isWide ? (
                  <ProjectCard
                    key={i.toString()}
                    project={project}
                    index={project.id}
                    colorLevel={(10 * project.id) as ColorLevel}
                    size="lg"
                    base="height"
                    descriptionType="hover"
                  />
                ) : (
                  <ProjectCard
                    key={i.toString()}
                    project={project}
                    index={project.id}
                    colorLevel={(10 * project.id) as ColorLevel}
                    size="md"
                    base="height"
                    descriptionType="hidden"
                  />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
