import React, { ComponentProps, ComponentPropsWithoutRef, FC, useState } from "react";

import { Image } from "@/components/basics";
import { Work } from "@/models";

import { VoteButton } from "./VoteButton";
import { WorkDialog } from "./WorkDialog";

type Props = {
  work: Work;
  dialogLayout: ComponentProps<typeof WorkDialog>["layout"];
  voted?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ComponentPropsWithoutRef<"div">;

export const WorkCard: FC<Props> = ({ work, dialogLayout, voted = false, handleClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WorkDialog
        open={open}
        onClose={() => setOpen(false)}
        work={work}
        layout={dialogLayout}
        voted={voted}
        handleClick={handleClick}
      />

      <div className="flex flex-col">
        <button onClick={() => setOpen(true)}>
          <figure className="relative w-full border-lightBrown border-2 drop-shadow">
            <Image src={work.thumbnailUrl} layout="responsive" width={283} height={213} alt={work.title} />
          </figure>
        </button>

        <div className="flex flex-col">
          <p className="text-text text-sm pt-3 pb-2 truncate">{work.title}</p>
          <div className="flex items-center justify-between space-x-1 w-full">
            <div className="flex items-center space-x-2">
              <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                <Image src={work.author?.avatarUrl} width={38} height={38} alt={work.author.name} objectFit="cover" />
              </div>
              <p className="text-text text-[13px] font-regular">
                {work.author?.grade}
                {work.author?.class}・{work.author?.name}
              </p>
            </div>
            <VoteButton className="flex-shrink-0" active={voted} onClick={handleClick} />
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
