import clsx from "clsx";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { LinkButton } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { WebContent } from "@/models";

type Props = {
  groupLabel: string;
  contents: WebContent[];
  buttonLabel: string;
};

export const WebContents: VFC<Props> = ({ groupLabel, contents, buttonLabel }) => {
  const isWide = useMedia("(min-width: 1024px)");

  return (
    <section className="pt-10 md:pt-24 pb-28 md:pb-36">
      <h2 className="text-text text-center py-2 lg:py-4 bg-white lg:max-w-[800px] mx-auto w-11/12 lg:w-8/12 border-2 border-brown">
        {groupLabel}
      </h2>
      <div className="mt-9 lg:mt-16 lg:px-4 lg:max-w-[1100px] mx-auto">
        {contents.map((item, i) => (
          <div key={item.id}>
            {i !== 0 && <hr className="border-none bg-gray h-px my-10 lg:my-20" />}
            <div
              className={clsx(
                "flex flex-col space-x-0 lg:space-x-5 w-11/12 mx-auto lg:w-full lg:justify-between",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 relative w-full rounded-xl overflow-hidden">
                {isWide ? (
                  <Image src={item.thumbnailUrl} alt={item.title} layout="fill" objectFit="contain" />
                ) : (
                  <Image width={600} height={345} src={item.thumbnailUrl} alt={item.title} layout="responsive" />
                )}
              </div>

              <div className="flex flex-col space-y-8 w-full lg:space-y-5 lg:justify-between lg:w-[392px] lg:h-full lg:min-h-[332px]">
                <div className="flex flex-col w-full text-text">
                  <h3 className="font-bold text-2xl mt-4 lg:mt-3 whitespace-pre-wrap">{item.title}</h3>
                  <div className="flex items-center space-x-3 mt-4 lg:mt-6">
                    <div className="flex space-x-1">
                      {item.authors.map((author) => (
                        <div
                          key={author.name}
                          className="relative rounded-full overflow-hidden w-[44px] h-[44px] lg:w-[52px] lg:h-[52px]"
                        >
                          <Image src={author.avatarUrl} alt={item.title} layout="fill" objectFit="cover" />
                        </div>
                      ))}
                    </div>
                    <ul>
                      {item.authors.map((author, i, ary) => (
                        <li key={author.name} className="inline-block text-sm font-regular">
                          {author.grade}
                          {author.class}
                          {author.name}
                          {i !== ary.length - 1 && "・"}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 lg:mt-3 text-base leading-relaxed whitespace-pre-wrap">{item.description}</p>
                </div>
                <div className="flex justify-center">
                  <LinkButton direction="right" href={item.siteUrl}>
                    {buttonLabel}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
