import clsx from "clsx";
import Link from "next/link";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { Room } from "@/models/Exhibition";

import { GoTo } from "../basics/GoTo";
type Props = {
  room: Room;
  className?: string;
  layout?: "row" | "row-reverse" | "column";
  card?: boolean;
  showLink?: boolean;
};

const THEME_COLOR_MAP = {
  shutter: "border-shutter",
  film: "border-film",
  lens: "border-lens",
};

export const RoomInfoCard: VFC<Props> = (props) => {
  const { room, className, layout, card, showLink } = props;

  return (
    <div
      className={clsx(
        "flex w-full",
        {
          "rounded-3xl bg-white px-4 pt-7 pb-10 lg:py-20 lg:pl-20 lg:pr-12": card,
        },
        {
          "flex-col space-y-4": layout === "column",
          "flex-row space-x-4": layout === "row",
          "flex-row-reverse space-x-reverse space-x-4": layout === "row-reverse",
        },
        className
      )}
    >
      <figure className="relative h-full flex-[5.8] flex items-center w-full">
        <div className="shadow w-full rounded-3xl overflow-hidden">
          <Image src={room.thumbnailUrl} layout="responsive" width={354} height={200} alt={room.title} />
        </div>
      </figure>
      <div
        className={clsx("my-auto flex-[4.2]", {
          "my-0 flex flex-col justify-between": showLink,
        })}
      >
        <div className="flex flex-col">
          <header className={clsx("border-b-2 border-dashed pb-2 lg:pb-3", THEME_COLOR_MAP[room.theme])}>
            <p role="doc-subtitle" className="text-lg text-text">
              {`THEME${room.id}`}
            </p>
            <h2 className="font-bold text-2xl lg:text-[26px] text-text mt-1">{room.title}</h2>
          </header>

          <p className="text-base text-text leading-[1.8] mt-3 lg:mt-2 whitespace-pre-wrap">{room.description}</p>
        </div>
        {showLink && (
          <Link href={room.href}>
            <a className={clsx("block ml-auto", layout === "column" && "mt-4")}>
              <GoTo borderColor={room.theme}>このテーマの作品を見る</GoTo>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

RoomInfoCard.defaultProps = {
  layout: "column",
  card: false,
  showLink: false,
};
