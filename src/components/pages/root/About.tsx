import clsx from "clsx";
import { FC, VFC } from "react";

import { FadeIn, ZoomIn } from "@/components/animation";
import { Highlight, Image, Paragraph } from "@/components/basics";
import { LinkButton, Section } from "@/components/ui";
import { Crowd, Tree } from "@/components/vectors";
import useMedia from "@/hooks/useMediaQuery";

export const About: VFC = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <>
      <Section heading="ABOUT" subHeading="芸工展とは" id="about">
        <div className="px-5 md:px-12 md:ml-shead">
          <div className="lg:max-w-app lg:mx-auto">
            <FadeIn>
              <Paragraph>
                名古屋市立大学芸術工学部の学生による様々な企画が楽しめる、完全オンラインの展示会です。
                力を尽くして生み出した作品、見て思わず笑ってしまうステージ企画、オンラインだからこそ味わえるCGの世界など見どころ満載です！芸工生全員で作る一つの作品で、満足間違いなし。
              </Paragraph>
            </FadeIn>

            <FadeIn>
              <Paragraph>
                今年は
                <Highlight>web会場</Highlight>と、
                <Highlight>バーチャル会場</Highlight>
                の2つで開催します！
              </Paragraph>
            </FadeIn>

            <div className="flex justify-start mt-8 md:justify-end">
              <div>
                <div className="text-xxs text-text">開催日時</div>
                <p className="font-bold text-text">
                  <time dateTime="2021-10-23">10/23(sat)</time>~<time dateTime="2021-10-24">10/24(sun)</time>
                </p>
              </div>
            </div>
          </div>
        </div>

        {isWide ? <PcLayout /> : <SpLayout />}
      </Section>
    </>
  );
};

const PcLayout = () => {
  // TODO: レイアウトのリファクタリング */
  return (
    <div className="flex flex-col mt-4 pb-20 space-y-12">
      <div className="flex flex-col space-y-4">
        <div className="h-[318px] bg-sky">
          <div className="md:ml-shead h-full relative">
            <div className="max-w-full h-full overflow-x-hidden">
              <div className="absolute inset-0 max-w-full overflow-x-hidden">
                <InfiniteScroll>
                  <Crowd className="absolute w-[94px] top-[73px] left-[5%]" />
                  <Crowd reverse className="absolute w-[94px] top-[111px] left-[204px]" />
                  <Crowd className="absolute w-[67px] top-[118px] left-[55%]" />
                  <Crowd className="absolute w-[81px] top-[78px] left-[62%]" />
                  <Crowd reverse className="absolute w-[96px] top-[106px] left-[82%]" />
                </InfiniteScroll>
              </div>

              <div className="z-10 h-full flex items-end w-full">
                <div className="flex-1"></div>
                <div className="flex flex-col items-center">
                  <div className="relative z-10">
                    <ZoomIn className="flex items-end">
                      <Image src="/images/about/pc.png" width={285} height={175} alt="パソコン" />
                    </ZoomIn>
                    <Tree dark className="absolute w-[34px] bottom-0 -left-10" />
                    <Tree className="absolute w-[22px] bottom-0 -right-6" />
                  </div>
                  <div className="absolute -bottom-20">
                    <LinkButton direction="bottom" href="#project">
                      企画を見る
                    </LinkButton>
                  </div>
                </div>
                <div className="flex-1 max-w-[200px]"></div>
                <div className="flex flex-col items-center">
                  <div className="relative z-10">
                    <ZoomIn className="flex items-end">
                      <Image src="/images/about/geikoto.png" width={285} height={175} alt="芸工塔" />
                    </ZoomIn>
                    <Tree dark className="absolute w-[34px] bottom-0 -left-12" />
                    <Tree reverse className="absolute w-[22px] bottom-0 -left-2" />
                    <Tree dark className="absolute w-[34px] bottom-0 -right-14" />
                  </div>
                  <div className="absolute -bottom-20">
                    <LinkButton direction="right" href="/about">
                      バーチャル会場について
                    </LinkButton>
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpLayout = () => {
  return (
    <div className="flex flex-col my-4 space-y-12">
      <div className="flex flex-col space-y-4">
        <div className="h-[210px] bg-sky max-w-full overflow-x-hidden">
          <div className="relative z-10 h-full flex items-end justify-center">
            <div className="absolute inset-0 max-w-full overflow-x-hidden">
              <InfiniteScroll>
                <Crowd className="absolute w-[79px] top-[18%] left-[5%]" />
                <Crowd reverse className="absolute w-[67px] top-[30%] right-[5%]" />
              </InfiniteScroll>
            </div>

            <div className="relative">
              <ZoomIn className="flex items-end">
                <Image src="/images/about/pc.png" width={218} height={134} alt="パソコン" />
              </ZoomIn>
              <Tree dark className="absolute w-[34px] bottom-0 -left-10" />
              <Tree className="absolute w-[22px] bottom-0 -right-6" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <LinkButton direction="bottom" href="#project">
            企画を見る
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="h-[210px] bg-sky max-w-full overflow-x-hidden">
          <div className="relative z-10 h-full flex items-end justify-center">
            <div className="absolute inset-0 max-w-full overflow-x-hidden">
              <InfiniteScroll>
                <Crowd className="absolute w-[79px] top-[30%] left-[5%]" />
                <Crowd reverse className="absolute w-[67px] top-[18%] right-[5%]" />
              </InfiniteScroll>
            </div>
            <div className="relative">
              <ZoomIn className="flex items-end">
                <Image src="/images/about/geikoto.png" width={218} height={134} alt="芸工塔" />
              </ZoomIn>
              <Tree dark className="absolute w-[34px] bottom-0 -left-12" />
              <Tree reverse className="absolute w-[22px] bottom-0 -left-2" />
              <Tree dark className="absolute w-[34px] bottom-0 -right-10" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <LinkButton direction="right" href="/about">
            バーチャル会場について
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

const InfiniteScroll: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <>
      <div className={clsx("flex h-full w-full relative", "scroll-container", className)}>
        {[...Array(2)].map((_v, i) => (
          <div key={i.toString()} className="relative h-full w-full flex-shrink-0">
            {children}
          </div>
        ))}
      </div>

      <style jsx>{`
        .scroll-container {
          animation: infinite-scroll linear 60s infinite;
        }
        @keyframes infinite-scroll {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </>
  );
};
