import NextHeadSeo from "next-head-seo";
import { FC } from "react";

import { resolveFullPath } from "@/utils/resolvePath";

export type PageSeoProps = {
  path: string;
  subtitle?: string;
  description?: string;
  ogImagePath?: string;
};

export const PageSeo: FC<PageSeoProps> = (props) => {
  const {
    path,
    subtitle,
    description = "芸工展2021！名古屋市立大学芸術工学部の学生による様々な企画が楽しめる完全オンラインの展示会です！",
    ogImagePath = "/images/ogp.png",
  } = props;

  const pageUrl = resolveFullPath(path);
  const ogImageUrl = resolveFullPath(ogImagePath);
  const title = subtitle ? `芸工展2021 - ${subtitle}` : "芸工展2021";

  return (
    <NextHeadSeo
      title={title}
      canonical={pageUrl}
      description={description}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: "website",
        siteName: "芸工展2021",
      }}
      twitter={{
        card: "summary",
      }}
    />
  );
};
