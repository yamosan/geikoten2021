import type { NextPage } from "next";
import Div100vh from "react-div-100vh";

import { Highlight } from "@/components/basics/Highlight";
import Image from "@/components/basics/Image";
import { Paragraph } from "@/components/basics/Paragraph";
import { Button } from "@/components/Button";
import { HEADER_HEIGHT } from "@/components/layouts/constants";
import { Layout } from "@/components/layouts/Layout";
import { ScrollDown } from "@/components/ScrollDown";
import { Section } from "@/components/Section";
import { VisitorCounter } from "@/components/VisitorCounter";
import useMedia from "@/hooks/useMediaQuery";

const Root: NextPage = () => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <Layout>
      <div className="relative">
        <Div100vh className="relative">
          <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" />

          <div className="relative w-full h-full" style={{ paddingTop: HEADER_HEIGHT }}>
            {/* アクセスカウンタ */}
            {isWide ? (
              <div className="flex justify-end pr-4">
                <VisitorCounter count={1234} size="lg" />
              </div>
            ) : (
              <div className="flex justify-start pl-4">
                <VisitorCounter count={1234} size="sm" />
              </div>
            )}

            {/* スクロールダウン */}
            <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2">
              <ScrollDown />
            </div>
          </div>
        </Div100vh>
        <div className="absolute">{/* TODO: カルーセル */}</div>
      </div>

      <div className="mt-[175px] lg:mt-[285px] flex flex-col space-y-12">
        {/* ABOUT */}
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

        {/* EVENT */}
        <Section heading="Event" subHeading="イベント"></Section>

        <section className="bg-white"></section>
        <section className="bg-white"></section>
      </div>
      <div>{/* TODO: 広告 */}</div>
    </Layout>
  );
};

export default Root;
