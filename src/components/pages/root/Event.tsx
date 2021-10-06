import type { VFC } from "react";

import { Paragraph } from "@/components/basics";
import { EventCard, Section } from "@/components/ui";

export const Event: VFC = () => {
  return (
    <Section heading="EVENT" subHeading="イベント" id="event">
      <div className="px-5 pl-4 md:ml-shead lg:max-w-app lg:mx-auto">
        <Paragraph>
          10/23.24の間にクラスターで開催されるイベントです！チェックしておこう
          <span role="img" aria-label="eyes">
            👀
          </span>
        </Paragraph>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-x-hidden md:flex-row md:ml-shead">
        <EventCard
          title={"開会式"}
          description={"芸工展の幕開けを見届けよう！"}
          imageSrc={"/images/event.png"}
          size="md"
        />
        <EventCard
          title={"閉会式"}
          description={"芸工祭も閉幕です！みんなで見届けよう"}
          imageSrc={"/images/event.png"}
          size="md"
        />
      </div>
    </Section>
  );
};
