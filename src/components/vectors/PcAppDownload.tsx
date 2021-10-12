import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  className?: string;
};

export const PcAppDownload: VFC<Props> = ({ className }) => {
  return (
    <svg
      width="100"
      height="30"
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 93.48 27.79"
    >
      <g id="レイヤー_2" data-name="レイヤー 2">
        <g id="レイヤー_1-2" data-name="レイヤー 1">
          <rect x="0.26" y="0.26" width="92.96" height="27.27" rx="3.05" />
          <path
            style={{ fill: "#7a7f83" }}
            d="M90.17.51A2.79,2.79,0,0,1,93,3.3V24.48a2.79,2.79,0,0,1-2.79,2.79H3.3A2.79,2.79,0,0,1,.51,24.48V3.3A2.79,2.79,0,0,1,3.3.51H90.17m0-.51H3.3A3.3,3.3,0,0,0,0,3.3V24.48a3.31,3.31,0,0,0,3.3,3.31H90.17a3.32,3.32,0,0,0,3.31-3.31V3.3A3.31,3.31,0,0,0,90.17,0Z"
          />
          <text
            style={{ fontSize: "8.34px", fill: "#fff", fontFamily: "HiraginoSans-W7-83pv-RKSJ-H, Hiragino Sans" }}
            transform="translate(11.99 13.29)"
          >
            Windows・Mac
            <tspan style={{ fontSize: "5.21px", fontFamily: "HiraginoSans-W7-83pv-RKSJ-H, Hiragino Sans" }}>
              <tspan x="0" y="7.67">
                アプリをダウンロード
              </tspan>
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};
