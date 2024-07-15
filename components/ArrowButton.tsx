import type { ReactNode } from "react";
import { PiArrowRightBold } from "react-icons/pi";

type Props = {
  children: ReactNode;
};

export const ArrowButton = ({ children }: Props) => {
  return (
    <span className="inline-flex group items-center rounded-full bg-neutral-900 dark:bg-neutral-800 text-sm px-4 py-2 text-white">
      <span className="mx-2">{children}</span>
      <PiArrowRightBold className="text-lg group-hover:translate-x-1 transition-transform" />
    </span>
  );
};
