import type { VFC } from "react";

import { Paragraph } from "./basics";
import { Section } from "./ui";

export const Event: VFC = () => {
  return (
    <Section heading="Event" subHeading="イベント">
      <div className="px-5">
        <Paragraph>
          10/23.24の間にクラスターで開催されるイベントです！チェックしておこう
          <span role="img" aria-label="eyes">
            👀
          </span>
        </Paragraph>
      </div>
    </Section>
  );
};
