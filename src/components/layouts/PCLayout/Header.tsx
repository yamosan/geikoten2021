import type { VFC } from "react";

import { ExternalLink } from "@/components/basics/ExternalLink";
import Image from "@/components/basics/Image";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { INSTAGRAM_URL, TWITTER_URL } from "@/constants/urls";

import { Nav } from "./Nav";

export const Header: VFC = () => {
  return (
    <header className="py-16 flex flex-col space-y-10">
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
