import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { VFC } from "react";
import { useEffect, useRef } from "react";

import { Paragraph } from "@/components/basics";
import { EventCard, Section } from "@/components/ui";
import useWindowSize from "@/hooks/useWindowSize";

export const Event: VFC = () => {
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
    <Section heading="PROJECT" subHeading="プロジェクト" ref={triggerRef}>
      <div className="px-5 pl-4">
        <Paragraph>
          10/23.24の間にクラスターで開催されるイベントです！チェックしておこう
          <span role="img" aria-label="eyes">
            👀
          </span>
        </Paragraph>
      </div>
      <div className="flex items-center h-[512px] relative overflow-x-hidden">
        <div className="absolute flex pl-12 my-auto space-x-24" ref={boxRef}>
          {new Array(8).fill(0).map((v, i) => (
            <EventCard
              key={i.toString()}
              title={"開会式"}
              description={"芸工展の幕開けを見届けよう！"}
              imageSrc={"/images/event.png"}
              size="md"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
