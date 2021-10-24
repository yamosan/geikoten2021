import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, VFC } from "react";

import { Image } from "@/components/basics/";
import { ExternalLink } from "@/components/basics/ExternalLink";
import { InstagramIcon } from "@/components/vectors/InstagramIcon";
import { TwitterIcon } from "@/components/vectors/TwitterIcon";
import { INSTAGRAM_URL, TWITTER_URL } from "@/constants/urls";

import { GlobalNav } from "./GlobalNav";

export const Header: VFC<ComponentProps<"header">> = ({ className, ...attrs }) => {
  return (
    <header className={clsx("flex items-center py-5 overflow-y-auto", className)} {...attrs}>
      {/* TODO: ページトップに遷移(データの取得なし) -> 再度アニメーション */}
      <div className="w-full h-full max-h-[680px] my-auto flex flex-col justify-between">
        <div className="mx-auto">
          <Link href="/">
            <a style={{ display: "block" }}>
              <Image src="/images/logo.png" alt="logo" width={123} height={116} />
            </a>
          </Link>
        </div>
        <GlobalNav />
        <div className="mx-auto">
          <div className="flex flex-col space-y-4">
            <ExternalLink href={TWITTER_URL} className="p-2 duration-300 transform hover:scale-90">
              <TwitterIcon color="white" />
            </ExternalLink>
            <ExternalLink href={INSTAGRAM_URL} className="p-2 duration-300 transform hover:scale-90">
              <InstagramIcon color="white" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
};
