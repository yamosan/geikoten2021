import clsx from "clsx";
import { FC, VFC } from "react";

import { Highlight, Image, Paragraph } from "@/components/basics";
import { LinkButton, Section } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";

export const About: VFC = () => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <>
      <Section heading="ABOUT" subHeading="芸工展とは" id="about">
        <div className="px-5 md:px-12 md:ml-shead">
          <div className="lg:max-w-app lg:mx-auto">
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
                  <CrowdMaterial className="absolute w-[94px] top-[73px] left-[5%]" />
                  <CrowdMaterial reverse className="absolute w-[94px] top-[111px] left-[204px]" />
                  <CrowdMaterial className="absolute w-[67px] top-[118px] left-[55%]" />
                  <CrowdMaterial className="absolute w-[81px] top-[78px] left-[62%]" />
                  <CrowdMaterial reverse className="absolute w-[96px] top-[106px] left-[82%]" />
                </InfiniteScroll>
              </div>

              <div className="z-10 h-full flex items-end w-full">
                <div className="flex-1"></div>
                <div className="flex flex-col items-center">
                  <div className="relative z-10">
                    <Image src="/images/about/materials/geikoto.svg" width={285} height={175} alt="芸工塔" />
                    <TreeMaterial dark className="absolute w-[34px] bottom-0 -left-10" />
                    <TreeMaterial className="absolute w-[22px] bottom-0 -right-6" />
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
                    <Image src="/images/about/materials/geikoto.svg" width={285} height={175} alt="芸工塔" />
                    <TreeMaterial dark className="absolute w-[34px] bottom-0 -left-12" />
                    <TreeMaterial reverse className="absolute w-[22px] bottom-0 -left-2" />
                    <TreeMaterial dark className="absolute w-[34px] bottom-0 -right-14" />
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
                <CrowdMaterial className="absolute w-[79px] top-[18%] left-[5%]" />
                <CrowdMaterial reverse className="absolute w-[67px] top-[30%] right-[5%]" />
              </InfiniteScroll>
            </div>

            <div className="relative">
              <Image src="/images/about/materials/geikoto.svg" width={218} height={134} alt="芸工塔" />
              <TreeMaterial dark className="absolute w-[34px] bottom-0 -left-10" />
              <TreeMaterial className="absolute w-[22px] bottom-0 -right-6" />
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
                <CrowdMaterial className="absolute w-[79px] top-[30%] left-[5%]" />
                <CrowdMaterial reverse className="absolute w-[67px] top-[18%] right-[5%]" />
              </InfiniteScroll>
            </div>
            <div className="relative">
              <Image src="/images/about/materials/geikoto.svg" width={218} height={134} alt="芸工塔" />
              <TreeMaterial dark className="absolute w-[34px] bottom-0 -left-12" />
              <TreeMaterial reverse className="absolute w-[22px] bottom-0 -left-2" />
              <TreeMaterial dark className="absolute w-[34px] bottom-0 -right-10" />
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

const TreeMaterial: VFC<{
  reverse?: boolean;
  dark?: boolean;
  className: string;
}> = (props) => {
  const { reverse = false, dark = false, className } = props;
  return (
    <>
      <svg
        className={clsx(reverse && "reverse-x", className)}
        viewBox="0 0 22 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9835 21.8133C22.3978 28.2673 14.9051 30.9565 11.1069 31.4943C6.44514 31.4943 1.78436 29.881 0.230553 21.8133C-1.32325 13.7455 5.4099 4.06463 7.48164 1.91328C9.55338 -0.238071 11.3921 -0.619371 14.5 0.994141C17.6079 2.60765 21.4656 13.7457 21.9835 21.8133Z"
          fill="currentColor"
          className={dark ? "text-green-80" : "text-green-50"}
        />
        <path
          d="M12.3333 39.259C11.0533 39.6849 8.95556 39.4364 8.06667 39.259C9.34667 27.3325 7.88889 22.5761 7 21.6887C7.85333 21.6887 9.48889 23.4635 10.2 24.3509C10.2 22.2212 10.9111 19.559 11.2667 18.4941C11.6933 21.0498 11.4444 23.4635 11.2667 24.3509C12.12 23.073 14.1111 22.0437 15 21.6887C11.5867 23.3925 11.8 34.1121 12.3333 39.259Z"
          fill="#504746"
        />
      </svg>

      <style jsx>{`
        .reverse-x {
          transform: scale(-1, 1);
        }
      `}</style>
    </>
  );
};

const CrowdMaterial: VFC<{
  reverse?: boolean;
  className: string;
  animation?: boolean;
  amplitude?: number;
  duration?: number;
}> = (props) => {
  const { reverse = false, animation = false, amplitude = 50, duration = 10, className } = props;
  return (
    <>
      <svg
        className={clsx(reverse && "reverse-x", animation && "animation", className)}
        viewBox="0 0 67 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 25.0004C0 15.1884 9.61138 7.23716 21.4523 7.23716C33.2931 7.23716 42.9237 15.1884 42.9237 25.0004"
          fill="white"
        />
        <path
          d="M19.8817 16.1203C19.8817 7.21764 27.6658 0 37.2695 0C46.8732 0 54.6573 7.21764 54.6573 16.1203"
          fill="white"
        />
        <path
          d="M24.061 25.0003C24.061 16.9115 33.6724 10.3548 45.5133 10.3548C57.3542 10.3548 66.9656 16.9115 66.9656 25.0003"
          fill="white"
        />
      </svg>

      <style jsx>{`
        .reverse-x {
          transform: scale(-1, 1);
        }

        .animation {
          animation: back-and-forth ease-in-out ${duration}s infinite alternate;
        }
        @keyframes back-and-forth {
          0% {
            transform: translate(-${amplitude}px);
          }
          100% {
            transform: translate(${amplitude}px);
          }
        }
      `}</style>
    </>
  );
};
