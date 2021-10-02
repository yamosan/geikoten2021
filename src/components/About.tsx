import type { VFC } from "react";

import { Highlight, Paragraph } from "./basics";
import { Button, Section } from "./ui";

export const About: VFC = () => {
  return (
    <Section heading="About" subHeading="芸工展示とは">
      <div className="px-5">
        <Paragraph>
          名古屋市立大学芸術工学部の学生による様々な企画が楽しめる、完全オンラインの展示会です。
          力を尽くして生み出した作品、見て思わず笑ってしまうステージ企画、オンラインだからこそ味わえるCGの世界など見どころ満載です！芸工生全員で作る一つの作品で、満足間違いなし。
        </Paragraph>
        <Paragraph>
          今年は
          <Highlight>web会場</Highlight>と、
          <Highlight>バーチャル会場</Highlight>
          の2つで開催します！
        </Paragraph>
        <div className="mt-8">
          <div className="text-xxs text-text">開催日時</div>
          <p className="font-bold text-text">
            <time dateTime="2021-10-23">10/23(sat)</time>~<time dateTime="2021-10-24">10/24(sun)</time>
          </p>
        </div>
      </div>

      <div className="flex flex-col my-4 space-y-12 ">
        <div className="flex flex-col space-y-4">
          <div className="h-[210px] bg-sky"></div>
          <div className="mx-auto">
            <Button direction="bottom">企画を見る</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-[210px] bg-sky"></div>
          <div className="mx-auto">
            <Button direction="right">バーチャル会場について</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
