import type { NextPage } from "next";

import { DropdownCheckboxes } from "@/components/ui";

const GENRE = [
  { label: "平面", value: "平面" },
  { label: "立体", value: "立体" },
  { label: "映像作品", value: "映像作品" },
  { label: "ゲーム", value: "ゲーム" },
  { label: "Web", value: "Web" },
  { label: "その他", value: "その他" },
];
const GRADE = [
  { label: "1年", value: "1" },
  { label: "2年", value: "2" },
  { label: "3年", value: "3" },
];
const CLASS = [
  { label: "情報", value: "M" },
  { label: "産業", value: "N" },
  { label: "建築", value: "O" },
];

const Test: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray">
      <DropdownCheckboxes items={GENRE} label="ジャンル" />
      <DropdownCheckboxes items={GRADE} label="学年" />
      <DropdownCheckboxes items={CLASS} label="学科" />
    </div>
  );
};

export default Test;
