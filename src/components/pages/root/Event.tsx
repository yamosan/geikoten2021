import type { VFC } from "react";

import { Paragraph } from "@/components/basics";
import { EventCard, Section } from "@/components/ui";

export const Event: VFC = () => {
  return (
    <Section heading="EVENT" subHeading="イベント" id="event">
      <div className="px-5 pl-4 md:ml-shead">
        <Paragraph className="lg:max-w-app lg:mx-auto">
          10/23.24の間にクラスターで開催されるイベントです！チェックしておこう
          <span role="img" aria-label="eyes">
            👀
          </span>
        </Paragraph>
      </div>
      <div className="px-5 mt-6 overflow-x-hidden md:ml-shead">
        <div className="relative flex flex-col justify-center space-y-6 md:space-y-0 md:space-x-6 md:items-center md:flex-row lg:max-w-app lg:mx-auto">
          {/* TODO: size propsでレスポンス。projectも同様 */}
          <EventCard
            title={"開会式"}
            description={"芸工展の幕開けを見届けよう！"}
            imageSrc={"/images/event.png"}
            size="md"
            className="flex-1"
          />
          <EventCard
            title={"閉会式"}
            description={"芸工祭も閉幕です！みんなで見届けよう"}
            imageSrc={"/images/event.png"}
            size="md"
            className="flex-1"
          />
        </div>
      </div>
    </Section>
  );
};
