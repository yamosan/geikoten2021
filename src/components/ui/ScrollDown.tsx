import clsx from "clsx";
import type { VFC } from "react";

type Props = {
  className?: string;
};

export const ScrollDown: VFC<Props> = ({ className }) => {
  return (
    <>
      <div className={clsx("flex flex-col items-center space-y-2", className)}>
        <p className="text-xs font-black tracking-widest text-white">scroll</p>
        <div className="bar"></div>
      </div>

      <style jsx>{`
        .bar {
          @apply relative w-0.5 h-8 rounded-t-full overflow-hidden;
        }

        .bar::before {
          @apply block absolute h-8 w-0.5 bg-white opacity-30 rounded-t-full;
          content: "";
        }

        .bar::after {
          @apply block absolute h-16 w-0.5 bg-white rounded-full;
          content: "";
          animation: fade-in-down 2.8s cubic-bezier(0.75, 0, 0.25, 1) infinite;
        }

        @keyframes fade-in-down {
          0%,
          10% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0%);
          }
          90%,
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
};
