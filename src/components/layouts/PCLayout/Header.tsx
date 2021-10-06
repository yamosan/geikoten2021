import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

import { Image } from "@/components/basics/";
import { ExternalLink } from "@/components/basics/ExternalLink";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { INSTAGRAM_URL, TWITTER_URL } from "@/constants/urls";

import { GlobalNav } from "./GlobalNav";

export const Header: VFC<ComponentProps<"header">> = ({ className, ...attrs }) => {
  return (
    <header className={clsx("flex flex-col py-16 space-y-10", className)} {...attrs}>
      <div className="mx-auto">
        <Image src="/images/logo.png" alt="logo" width={123} height={116} />
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
    </header>
  );
};
