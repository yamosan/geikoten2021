import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

type Props = {
  heading: string;
  subHeading: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export const Section = forwardRef<HTMLElement, Props>((props, ref) => {
  const { heading, subHeading, children, className, ...attrs } = props;
  return (
    <section className={clsx("bg-white pt-[52px] md:pt-24 md:pb-4", className)} {...attrs} ref={ref}>
      <header className="px-5 md:px-12 md:ml-shead">
        <div className="lg:max-w-app lg:mx-auto">
          <h2 className="text-5xl leading-10 font-genuine text-green-10">{heading}</h2>
          <p role="doc-subtitle" className="font-bold text-text">
            {subHeading}
          </p>
        </div>
      </header>
      <hr className="mt-3 mb-5 text-gray" />
      <div>{children}</div>
    </section>
  );
});

Section.displayName = "Section";