import { ReactNode, VFC } from "react";

type Props = {
  heading: string;
  order: number;
  line?: boolean;
  children: ReactNode;
};

export const Process: VFC<Props> = ({ heading, order, line = true, children }) => {
  return (
    <>
      <section>
        <h4 className="flex items-center text-text font-bold">
          <div className="relative flex justify-center items-center transform translate-x-1/2">
            <span className="text-2xl md:text-3xl z-10">{order.toString().padStart(2, "0")}</span>
            <span className="absolute  rounded-full border-2 border-lightBrown bg-green-10 w-[60px] h-[60px]"></span>
          </div>

          <div className="my-2 text-base py-2 px-7 pl-10 rounded-full border-2 border-lightBrown">{heading}</div>
        </h4>

        <div className="pl-8 relative">
          {line && <span className="vertical-line" />}
          {children}
        </div>
      </section>

      <style jsx>{`
        .vertical-line {
          @apply absolute top-1/2 left-8 w-0.5 h-[90%] transform -translate-y-1/2  bg-lightBrown;
        }
      `}</style>
    </>
  );
};
