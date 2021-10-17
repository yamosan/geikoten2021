import type { VFC } from "react";
import Div100vh from "react-div-100vh";

import { Image } from "@/components/basics";
import { RoomInfoCard } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Room } from "@/models/Exhibition";

type Props = {
  room: Room;
};

export const Hero: VFC<Props> = ({ room }) => {
  const isXWide = useMedia("(min-width: 1024px)");

  return (
    <div className="relative">
      <Div100vh className="relative">
        <Image src="/images/work_bg.png" alt="背景" layout="fill" objectFit="cover" priority />
        <div className="flex justify-center md:pl-shead h-full relative pt-thead md:pt-0 pb-[80px]">
          <div className="w-11/12 lg:w-5/6 h-full flex justify-center items-center lg:max-w-app lg:mx-auto">
            <RoomInfoCard
              themeColor={room.theme}
              subHeading={`THEME${room.id}`}
              heading={room.title}
              thumbnailUrl={room.thumbnailUrl} // TODO:
              description={room.description}
              layout={isXWide ? "row" : "column"}
            />
          </div>
        </div>
      </Div100vh>
    </div>
  );
};