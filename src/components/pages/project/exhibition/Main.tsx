import clsx from "clsx";
import { useMemo, useState, VFC } from "react";

import { DropdownCheckboxes, Section } from "@/components/ui";
import { WorkCard } from "@/components/ui/WorkCard";
import useMedia from "@/hooks/useMediaQuery";
import { Theme, Work } from "@/models";
import { useVotedIds } from "@/store/votedIds";

type Props = {
  works: Work[];
  themeColor: Theme;
};

export const Main: VFC<Props> = ({ works: allWorks, themeColor }) => {
  const isWide = useMedia("(min-width: 768px)");
  const { votedIds, vote } = useVotedIds();

  const [genre, setGenre] = useState([]);
  const [authorGrade, setAuthorGrade] = useState([]);
  const [authorClass, setAuthorClass] = useState([]);

  const works = useMemo(
    () =>
      allWorks.filter(
        (work) =>
          (!genre.length || genre.includes(work.genre)) &&
          (!authorGrade.length || authorGrade.includes(work.author.grade)) &&
          (!authorClass.length || authorClass.includes(work.author.class))
      ),
    [allWorks, genre, authorGrade, authorClass]
  );

  const ids = useMemo(() => new Set(votedIds), [votedIds]);

  return (
    <div>
      <div
        className={clsx("w-full md:pl-shead ml-auto z-40", {
          "sticky top-0 bg-white py-7": isWide,
          "fixed top-0 pt-thead": !isWide,
        })}
      >
        <div className="w-11/12 mx-auto lg:max-w-app flex justify-end">
          <div
            className={clsx("flex", {
              "space-x-4": isWide,
              "space-x-3": !isWide,
            })}
          >
            <DropdownCheckboxes items={GENRE} label="ジャンル" onChange={setGenre} size={isWide ? "md" : "sm"} />
            <DropdownCheckboxes items={GRADE} label="学年" onChange={setAuthorGrade} size={isWide ? "md" : "sm"} />
            <DropdownCheckboxes items={CLASS} label="学科" onChange={setAuthorClass} size={isWide ? "md" : "sm"} />
          </div>
        </div>
      </div>
      <Section heading="WORKS" subHeading="作品" headerColor={themeColor} className="relative z-10 mt-[-80px] bg-white">
        <div className="md:pl-shead pt-3 pb-24 lg:pb-52">
          <div className="w-11/12 mx-auto lg:max-w-app">
            <div className="grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full">
              {works.map((work) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  dialogLayout={isWide ? "row" : "column"}
                  voted={ids.has(work.id)}
                  handleClick={() => vote(work.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const GENRE: {
  label: string;
  value: Work["genre"];
}[] = [
  { label: "平面", value: "平面" },
  { label: "立体", value: "立体" },
  { label: "映像作品", value: "映像作品" },
  { label: "ゲーム", value: "ゲーム" },
  { label: "Web", value: "web" },
  { label: "その他", value: "その他" },
];
const GRADE: {
  label: string;
  value: Work["author"]["grade"];
}[] = [
  { label: "1年", value: 1 },
  { label: "2年", value: 2 },
  { label: "3年", value: 3 },
];
const CLASS: {
  label: string;
  value: Work["author"]["class"];
}[] = [
  { label: "情報", value: "M" },
  { label: "産業", value: "N" },
  { label: "建築", value: "O" },
];
