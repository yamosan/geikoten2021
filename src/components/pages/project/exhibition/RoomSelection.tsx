import clsx from "clsx";
import type { VFC } from "react";

import { RoomInfoCard } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Room } from "@/models";

type Props = {
  rooms: Room[];
};

export const RoomSelection: VFC<Props> = ({ rooms }) => {
  const isXWide = useMedia("(min-width: 1024px)");

  return (
    <main className="bg-white md:pl-shead">
      <div className="lg:px-4 lg:max-w-[845px] mx-auto">
        <div className={clsx("flex flex-col space-y-11 lg:space-y-16 justify-center py-24")}>
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
    </main>
  );
};
