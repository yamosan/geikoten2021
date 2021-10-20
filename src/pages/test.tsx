import type { NextPage } from "next";

import { Checkbox } from "@/components/basics";
import { DropdownCheckboxes } from "@/components/ui";

const GENRE = [
  { label: "平面", value: "平面" },
  { label: "立体", value: "立体" },
  { label: "映像作品", value: "映像作品" },
  { label: "ゲーム", value: "ゲーム" },
  { label: "Web", value: "Web" },
  { label: "その他", value: "その他" },
];

const Test: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray">
      <DropdownCheckboxes items={GENRE} label="ジャンル" />
      <Checkbox checked={true} onChange={() => {}} />
    </div>
  );
};

export default Test;
