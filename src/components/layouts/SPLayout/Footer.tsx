import type { VFC } from "react";

import { ExternalLink } from "@/components/basics/ExternalLink";
import { ExternalLinkIcon } from "@/components/icons";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { HOMEPAGE_LINK } from "@/constants/urls";

export const Footer: VFC = () => {
  const HomepageLink = () => (
    <ExternalLink href={HOMEPAGE_LINK}>
      <div className="flex space-x-0.5">
        <p className="text-sm leading-none underline">名古屋市立大学芸術工学部HP</p>
        <ExternalLinkIcon />
      </div>
    </ExternalLink>
  );

  return (
    <footer className="relative bg-lightBrown">
      <ScrollToTop className="absolute top-0 right-0" />

      <div className="flex flex-col items-center py-16 text-white">
        <div className="flex flex-col">
          <div className="flex flex-col items-start space-y-3">
            <p className="text-lg font-bold leading-none">名古屋市立大学芸術工学部</p>
            <HomepageLink />
          </div>
          <div className="mt-5">
            <p className="text-sm leading-loose">
              〒464-008 名古屋市千種区北千種2丁目1番10号
              <br />
              TEL052-721-1225(代) FAX052-721-3110
            </p>
          </div>
          <div className="mt-6 text-center">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <small className="text-white">©️ Copyright 2021geikoten</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
