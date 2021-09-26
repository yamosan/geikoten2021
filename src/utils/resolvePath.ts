import { join } from "path";

export function resolvePath(path: string) {
  const base = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "";

  return join(base, path);
}
