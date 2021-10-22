import clsx from "clsx";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { LinkButton, RoomInfoCard, VoteButton } from "@/components/ui";
import { Balloon } from "@/components/ui/Balloon";
import useMedia from "@/hooks/useMediaQuery";
import { Room } from "@/models";

type Props = {
  rooms: Room[];
};

export const RoomSelection: VFC<Props> = ({ rooms }) => {
  // TODO: 配列で取得
  const isXWide = useMedia("(min-width: 1024px)");
  const isMd = useMedia("(min-width: 640px)");

  return (
    <>
      <div className="relative overflow-hidden bg-white md:ml-shead pt-14 pb-20">
        <div className="relative z-10 flex flex-col space-y-2 items-center px-10 w-max max-w-full overflow-hidden mx-auto">
          <div
            className={clsx(
              "min-w-max flex items-start md:items-center space-x-1.5 pb-2 md:px-3 border-b border-lightBrown border-dashed",
              "hachinoji"
            )}
          >
            <VoteButton disabled className="flex-shrink-0" />
            <h4 className="font-bold text-base pt-1 md:pt-0 sm">
              {/* inline-block × w-max がしたい。(ボックスモデル的に無理) */}
              ボタンを押して、
              {!isMd && <br />}
              好きな作品に投票しよう！
            </h4>
          </div>
          <p className="self-end">
            <time>
              【期間:<time dateTime="2021-10-23">2021/10/23</time>~<time dateTime="2021-10-24">24</time>】
            </time>
          </p>
        </div>
        <div className="relative">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <Bg />
            </div>
            <div className="mt-16 w-11/12 lg:px-4 lg:max-w-[845px] mx-auto">
              <div className={clsx("flex flex-col space-y-16 justify-center pb-24")}>
                {rooms.map((room, i) => (
                  <div key={room.id}>
                    <RoomInfoCard
                      room={room}
                      layout={isXWide ? (i % 2 === 0 ? "row" : "row-reverse") : "column"}
                      showLink
                      className="min-h-[265px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-none bg-gray h-px my-8 lg:mt-30 lg:mb-16" />
          <div className="w-11/12 lg:px-4 lg:max-w-[845px] mx-auto">
            <ClusterCard />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hachinoji {
          @apply relative;
        }
        .hachinoji::before {
          @apply absolute bottom-1/2 left-0 h-4/5 border-l-[3px] transform translate-y-1/2 -translate-x-1 rotate-[-30deg] origin-bottom-left sm:-rotate-45 sm:-translate-x-4;
          content: "";
        }
        .hachinoji::after {
          @apply absolute bottom-1/2 right-0 h-4/5 border-r-[3px] transform translate-y-1/2 translate-x-1 rotate-[30deg] origin-bottom-right sm:rotate-45 sm:translate-x-4;
          content: "";
        }
      `}</style>
    </>
  );
};

const ClusterCard: VFC = () => {
  return (
    <div className={clsx("flex flex-col space-y-2 lg:flex-row lg:space-x-6 items-center")}>
      <div className="flex-[5.8] h-full w-full relative rounded-2xl overflow-hidden">
        <Image
          src="/images/project/exhibition/cluster.png"
          layout="responsive"
          width={475}
          height={163}
          alt="cluster"
          objectFit="cover"
        />
      </div>
      <div className="flex-[4.2] pt-1 text-text">
        <div className="flex flex-col">
          <h3 className="font-bold text-[23px]">【お知らせ】clusterでも展示中</h3>
          <p className="leading-relaxed mt-2">
            バーチャル芸工棟に展示されています！
            <br />
            是非見に行ってみてね
          </p>
        </div>
        <div className="mt-6 lg:mt-4 flex justify-center lg:justify-end">
          <LinkButton direction="right" href="/about">
            バーチャル会場について
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

const Bg: VFC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-around">
      <Balloon color="shutter" size={232} xReverse className="ml-auto transform translate-x-1/2" />
      <Balloon color="film" size={200} yReverse className="mr-auto transform -translate-x-1/2" />
      <Balloon color="lens" size={237} yReverse xReverse className="ml-auto transform translate-x-1/3" />
    </div>
  );
};
