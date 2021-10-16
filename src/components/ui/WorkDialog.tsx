import clsx from "clsx";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { Dialog, VoteButton } from "@/components/ui"; // TODO: なぜか/uiでimportするとエラー
import type { Work } from "@/models";

type Props = {
  open: boolean;
  onClose: () => void;
  work: Work;
  layout?: "row" | "column";
  voted?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const WorkDialog: VFC<Props> = (props) => {
  const { open, onClose, work, layout, voted, handleClick } = props;

  return (
    <>
      <Dialog open={open} onClose={onClose} borderColor="black">
        <div
          className={clsx("flex w-full justify-between py-20", {
            "px-16 flex-row space-x-10": layout === "row",
            "flex-col px-4": layout === "column",
          })}
        >
          <figure className="relative h-full flex-[7] flex items-center w-full">
            <div className="shadow w-full">
              <Image src={work.thumbnailUrl} layout="responsive" width={283} height={213} alt={work.title} />
            </div>
          </figure>
          <div className="flex flex-col flex-shrink flex-[3] mt-5 mx-2 md:my-3 md:mx-0">
            <h4 className="text-text text-lg">{work.title}</h4>
            <div className="flex items-center space-x-2 mt-4 md:mt-6">
              <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                <Image src={work.author?.avatarUrl} width={38} height={38} alt={work.author.name} objectFit="cover" />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-text text-[13px]">
                  {work.author?.grade}
                  {work.author?.class}・{work.author?.name}
                </p>
                {layout === "column" && <VoteButton className="shrink-0" active={voted} onClick={handleClick} />}
              </div>
            </div>

            <p className="text-text text-base mt-4 leading-loose">{work.description}</p>
            <div className="flex w-full justify-between mt-6">
              {/* TODO: 作品リンクはこちら */}

              {layout === "row" && <VoteButton active={voted} onClick={handleClick} />}
            </div>
          </div>
        </div>
      </Dialog>

      <style jsx>{`
        .shadow {
          filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </>
  );
};

WorkDialog.defaultProps = {
  layout: "row",
};
