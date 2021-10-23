import Link from "next/link";
import type { VFC } from "react";

import { FadeIn } from "@/components/animation";
import { Paragraph } from "@/components/basics";
import { EventCard, Section } from "@/components/ui";
import { CLOSING_CEREMONY_URL, OPENING_CEREMONY_URL } from "@/constants/urls";
export const Event: VFC = () => {
  return (
    <Section heading="EVENT" subHeading="イベント" id="event">
      <div className="px-5 md:px-12 pl-4 md:ml-shead">
        <FadeIn>
          <Paragraph className="lg:max-w-app lg:mx-auto">
            10/23.24の間にクラスターで開催されるイベントです！チェックしておこう
            <span role="img" aria-label="eyes">
              👀
            </span>
          </Paragraph>
        </FadeIn>
      </div>
      <div className="px-5 md:px-12 mt-6 md:ml-shead">
        <div className="relative flex flex-col justify-center space-y-6 md:space-y-0 md:space-x-6 md:items-center md:flex-row lg:max-w-app lg:mx-auto">
          <Link href={OPENING_CEREMONY_URL}>
            <a className="block flex-1">
              <EventCard
                title={"開会式"}
                description={"芸工展の幕開けを見届けよう！"}
                imageSrc={"/images/top/opening.png"}
                size="md"
                className="flex-1"
              />
            </a>
          </Link>
          <Link href={CLOSING_CEREMONY_URL}>
            <a className="block flex-1">
              <EventCard
                title={"閉会式"}
                description={"芸工祭も閉幕です！みんなで見届けよう"}
                imageSrc={"/images/top/closing.png"}
                size="md"
                className="flex-1"
              />
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
};
