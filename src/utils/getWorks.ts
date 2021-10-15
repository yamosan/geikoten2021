import { WORKS_URL } from "@/constants/urls";
import type { Work } from "@/models";

type Query = {
  theme: Work["theme"] | Work["theme"][];
};

export async function getWorks(query?: Query): Promise<Work[]> {
  const res = await fetch(WORKS_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Work[] = await res.json();

  if (!query) return data;

  const { theme } = query;
  if (typeof theme === "string") {
    return data.filter((item) => item.theme === theme);
  }
  return data.filter((item) => theme.includes(item.theme));
}
