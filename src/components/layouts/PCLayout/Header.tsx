import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

import { Image } from "@/components/basics/";
import { ExternalLink } from "@/components/basics/ExternalLink";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { INSTAGRAM_URL, TWITTER_URL } from "@/constants/urls";

import { Nav } from "./Nav";

export const Header: VFC<ComponentProps<"header">> = ({ className, ...attrs }) => {
  return (
    <header className={clsx("flex flex-col py-16 space-y-10", className)} {...attrs}>
      <div className="mx-auto">
        <Image src="/images/logo.png" alt="logo" width={123} height={116} />
      </div>
      <Nav />
      <div className="mx-auto">
        <div className="flex flex-col space-y-6">
          <ExternalLink href={TWITTER_URL}>
            <TwitterIcon color="white" />
          </ExternalLink>
          <ExternalLink href={INSTAGRAM_URL}>
            <InstagramIcon color="white" />
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};
