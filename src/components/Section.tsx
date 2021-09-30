import clsx from "clsx";
import React, { ComponentProps, ReactNode, VFC } from "react";

type Props = {
  heading: string;
  subHeading: string;
  children?: ReactNode;
} & ComponentProps<"section">;

export const Section: VFC<Props> = (props) => {
  const { heading, subHeading, children, className, ...attrs } = props;
  return (
    <section className={clsx("bg-white py-10", className)} {...attrs}>
      <header className="mx-5">
        <h2 className="text-5xl leading-10 font-genuine text-green-10">{heading}</h2>
        <p role="doc-subtitle" className="font-bold text-text">
          {subHeading}
        </p>
      </header>
      <hr className="mt-3 mb-5 text-gray" />
      <div>{children}</div>
    </section>
  );
};
