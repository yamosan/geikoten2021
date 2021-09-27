import NextImage from "next/image";
import type { ComponentPropsWithoutRef } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

// src: string | StaticImport -> string
type Props = ComponentPropsWithoutRef<typeof NextImage> & { src: string };

const Image = (props: Props) => {
  const url = props.src?.startsWith("/") ? `${basePath || ""}${props.src}` : props.src;
  return <NextImage {...props} src={url} />;
};

export default Image;
