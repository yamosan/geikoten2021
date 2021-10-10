import NextImage from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import { resolvePath } from "@/utils/resolvePath";

type Props = Omit<ComponentPropsWithoutRef<typeof NextImage>, "quality"> & { src: string }; // src: string | StaticImport -> string

const customLoader = ({ src }) => src;

// TODO: next-optimized-imageを使ってビルド時に画像最適化
export const Image = (props: Props) => {
  const url = props.src?.startsWith("/") ? resolvePath(props.src) : props.src;
  return <NextImage {...props} src={url} loader={customLoader} unoptimized />;
};
