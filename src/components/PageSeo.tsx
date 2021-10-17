import NextHeadSeo from "next-head-seo";
import { FC } from "react";

import { SITE_DOMAIN } from "@/constants/urls";

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
    ogImagePath = "/image/ogp.png",
  } = props;

  const APP_ROOT_URL = SITE_DOMAIN + process.env.NEXT_PUBLIC_BASE_PATH;
  console.log(APP_ROOT_URL);

  const pageUrl = APP_ROOT_URL + path;
  console.log(pageUrl);

  const ogImageUrl = APP_ROOT_URL + ogImagePath;
  console.log(ogImageUrl);

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
        card: "summary_large_image",
      }}
    />
  );
};
