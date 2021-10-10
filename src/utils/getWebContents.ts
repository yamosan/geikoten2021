import webContents from "@/data/web_contents.json";
import type { WebContent } from "@/models";

const WEB_CONTENTS = webContents as WebContent[];

type Query = {
  type: WebContent["type"] | WebContent["type"][];
};

export function getWebContents(query?: Query): WebContent[] {
  if (!query) return WEB_CONTENTS;
  const { type } = query;

  if (typeof type === "string") {
    return WEB_CONTENTS.filter((content) => content.type === type);
  }
  return WEB_CONTENTS.filter((content) => type.includes(content.type));
}
