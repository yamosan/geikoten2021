import clsx from "clsx";
import React, { ComponentProps, ComponentPropsWithoutRef, FC, useCallback, useRef, useState } from "react";

import { Image } from "@/components/basics";
import { Work } from "@/models";

import { Loading } from "../vectors";
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
  const [loading, setLoading] = useState(true);

  const handleOnLoad = useCallback(() => {
    setLoading(false);
  }, []);

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
          <figure className="relative flex items-center justify-center transition duration-150">
            <div className="relative border-lightBrown border-2 drop-shadow w-full">
              <div className={clsx("w-full", loading ? "opacity-0" : "opacity-100")}>
                <Image
                  src={work.thumbnailUrl}
                  layout="responsive"
                  width={283}
                  height={213}
                  alt={work.title}
                  onLoadingComplete={handleOnLoad}
                />
              </div>
              {loading && (
                <div className="w-full absolute inset-0 z-10">
                  <Image
                    src={`/images/project/exhibition/${work.theme}/placeholder.png`}
                    layout="responsive"
                    width={283}
                    height={213}
                    alt=""
                    priority
                  />
                  <div className="absolute z-10 transform top-1/2 left-1/2 -translate-1/2">
                    <Loading className="animate-spin" />
                  </div>
                </div>
              )}
            </div>
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
