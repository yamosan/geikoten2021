import React, { ComponentPropsWithoutRef, FC } from "react";

import { Image } from "@/components/basics";
import { Work } from "@/models";

import { VoteButton } from "./VoteButton";

type Props = {
  work: Work;
} & ComponentPropsWithoutRef<"div">;

export const WorkCard: FC<Props> = ({ work }) => {
  return (
    <>
      <div className="flex flex-col">
        <figure className="relative w-full border-lightBrown border-2 drop-shadow">
          <Image src={work.thumbnailUrl} layout="responsive" width={283} height={213} alt={work.title} />
        </figure>
        <div className="flex flex-col">
          <p className="text-text text-sm pt-3 pb-2 truncate">{work.description}</p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                <Image src={work.author?.avatarUrl} width={38} height={38} alt={work.author.name} objectFit="cover" />
              </div>
              <p className="text-text text-[13px]">
                {work.author?.grade}
                {work.author?.class}・{work.author?.name}
              </p>
            </div>
            {/* TODO: いいねを保存 */}
            <VoteButton className="flex-shrink-0" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .drop-shadow {
          filter: drop-shadow(4px 4px 0px #504746);
        }
      `}</style>
    </>
  );
};

WorkCard.displayName = "WorkCard";
