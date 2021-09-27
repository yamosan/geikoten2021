import NextImage from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import { resolvePath } from "@/utils/resolvePath";

// src: string | StaticImport -> string
type Props = ComponentPropsWithoutRef<typeof NextImage> & { src: string };

const Image = (props: Props) => {
  const url = props.src?.startsWith("/") ? resolvePath(props.src) : props.src;
  return <NextImage {...props} src={url} />;
};

export default Image;
