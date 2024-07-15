import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  color: string;
  title: string;
  description: string;
};

export const Feature = ({ icon, color, title, description }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 flex gap-4 rounded p-4 px-6 h-full items-center">
      <div
        aria-hidden
        className={`flex-shrink-0 size-9 flex items-center justify-center rounded ${color}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
