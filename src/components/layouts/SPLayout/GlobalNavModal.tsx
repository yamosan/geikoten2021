import { useRouter } from "next/dist/client/router";
import { useCallback, VFC } from "react";

import { ExternalLink } from "@/components/basics";
import { InstagramIcon, TwitterIcon } from "@/components/vectors";
import { INSTAGRAM_URL, TWITTER_URL } from "@/constants/urls";

import { NAV_LINKS, TLink } from "../constants";

type Props = {
  onLinkClick: () => void;
  isOpen: boolean;
};

export const GlobalNavModal: VFC<Props> = (props) => {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, link: TLink) => {
      e.preventDefault();
      props.onLinkClick();
      router.push(link.path, undefined, { scroll: false });
    },
    [props, router]
  );

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <ul className="flex flex-col pb-24 space-y-6">
        {NAV_LINKS.map((item) => (
          <li key={item.id}>
            <button onClick={(e) => handleClick(e, item)} className="block text-2xl font-bold text-white">
              <div className="flex flex-col items-start py-3">
                <div className="w-full duration-300 transform border-r-8 border-transparent border-solid group">
                  <p className="text-3xl leading-none text-white duration-300 transform font-genuine group-hover:scale-90">
                    {item.text}
                  </p>
                  <p className="mt-1 text-sm leading-none text-left text-white duration-300 transform font-genuine group-hover:scale-90">
                    {item.subText}
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {/* SNS */}
      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col items-center justify-center h-40 space-y-3 bg-white">
          <p className="text-sm font-black text-black">OFFICIAL SNS</p>
          <ul className="flex space-x-5">
            <ExternalLink href={TWITTER_URL}>
              <TwitterIcon color="original" />
            </ExternalLink>
            <ExternalLink href={INSTAGRAM_URL}>
              <InstagramIcon color="original" />
            </ExternalLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
