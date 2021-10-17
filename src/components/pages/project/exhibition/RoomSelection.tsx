import clsx from "clsx";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { LinkButton, RoomInfoCard } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Room } from "@/models";

type Props = {
  rooms: Room[];
};

export const RoomSelection: VFC<Props> = ({ rooms }) => {
  const isXWide = useMedia("(min-width: 1024px)");

  return (
    <main className="bg-white md:pl-shead">
      {/* TODO:  */}

      <div className="w-11/12 lg:px-4 lg:max-w-[845px] mx-auto">
        <div className={clsx("flex flex-col space-y-16 justify-center py-24")}>
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
      <hr className="border-none bg-gray h-px my-8 lg:mt-30 lg:mb-16" />
      <div className="w-11/12 lg:px-4 lg:max-w-[845px] mx-auto pb-20">
        <ClusterCard />
      </div>
    </main>
  );
};

const ClusterCard = () => {
  return (
    <div className={clsx("flex flex-col space-y-2 lg:flex-row lg:space-x-6 items-center")}>
      <div className="flex-[5.8] h-full w-full relative rounded-2xl overflow-hidden">
        <Image
          src="/images/cluster_thumbnail.png"
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
