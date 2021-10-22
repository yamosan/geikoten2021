import type { VFC } from "react";

import { Div100vh, Image } from "@/components/basics";
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
        <Image
          src={`/images/project/exhibition/${room.theme}/bg.png`}
          alt="背景"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex justify-center md:pl-shead h-full relative pt-thead md:pt-0 pb-[80px]">
          <div className="w-11/12 lg:w-5/6 h-full flex justify-center items-center lg:max-w-app lg:mx-auto">
            <RoomInfoCard room={room} layout={isXWide ? "row" : "column"} card />
          </div>
        </div>
      </Div100vh>
    </div>
  );
};
