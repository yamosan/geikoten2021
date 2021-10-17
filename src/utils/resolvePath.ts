import { join } from "path";

import { SITE_DOMAIN } from "@/constants/urls";

const isProd = process.env.NODE_ENV === "production";

export function resolvePath(path: string) {
  const base = isProd ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "";

  return join(base, path);
}

// TODO: !isProdのとき
export function resolveFullPath(path: string) {
  return SITE_DOMAIN + resolvePath(path);
}
