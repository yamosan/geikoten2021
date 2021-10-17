import clsx from "clsx";
import type { VFC } from "react";

import { ExternalLink, Image } from "@/components/basics";
import { Dialog, VoteButton } from "@/components/ui"; // TODO: なぜか/uiでimportするとエラー
import type { Work } from "@/models";

import { LinkChain } from "../vectors";

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
          <div
            className={clsx(
              "flex flex-col flex-shrink flex-[3] pb-20 mt-5 mx-2 md:my-3 md:mx-0",
              layout === "row" && "min-w-[270px]"
            )}
          >
            <h4 className="text-text text-lg">{work.title}</h4>
            <div className="flex items-center space-x-2 mt-4 md:mt-6">
              <div className="relative rounded-full overflow-hidden flex justify-center items-center">
                <Image src={work.author?.avatarUrl} width={38} height={38} alt={work.author.name} objectFit="cover" />
              </div>
              <div className="flex space-x-2 justify-between items-center w-full">
                <p className="text-text text-[13px] font-regular">
                  {work.author?.grade}
                  {work.author?.class}・{work.author?.name}
                </p>
                {layout === "column" && <VoteButton className="flex-shrink-0" active={voted} onClick={handleClick} />}
              </div>
            </div>

            <p className="text-text text-base mt-4 leading-loose">{work.description}</p>
            <div className="flex-shrink-0 flex w-full items-center justify-between mt-6">
              {work.siteUrl && <WorkLink href={work.siteUrl} />}
              {layout === "row" && <VoteButton active={voted} onClick={handleClick} className="ml-auto" />}
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

const WorkLink: VFC<{ href: string }> = ({ href }) => {
  return (
    <ExternalLink href={href}>
      <div className="flex space-x-1 items-center">
        <LinkChain />
        <p className="text-text text-[13px] pb-0.5 border-b border-gray">作品リンクはコチラ</p>
      </div>
    </ExternalLink>
  );
};

WorkDialog.defaultProps = {
  layout: "row",
};
