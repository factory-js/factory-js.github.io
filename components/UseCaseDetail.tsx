import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { PiX } from "react-icons/pi";
import { ArrowButton } from "./ArrowButton";
import { CodeTabGroup } from "./CodeTabGroup";
import { Logo } from "./Logo";
import { Tooltip } from "./Tooltip";

type Props = {
  title: ReactNode;
  description: ReactNode;
  libraries: ReactNode[];
  codes: {
    icon: ReactNode;
    title: ReactNode;
    content: ReactNode;
  }[];
};

export const UseCaseDetail = ({
  title,
  description,
  libraries,
  codes,
}: Props) => {
  return (
    <div className="flex w-full flex-wrap gap-6">
      <div className="flex-1 min-w-64">
        <h3 className="text-2xl text-neutral-800 dark:text-neutral-200 font-semibold">
          {title}
        </h3>
        <div className="my-6">
          <p className="text-gray-600 dark:text-neutral-400 text-sm my-1">
            An example of combining libraries:
          </p>
          <div className="flex items-center">
            <Tooltip
              content="FactoryJS"
              side="top"
              sideOffset={4}
              delayDuration={0}
            >
              <span className="pr-2 py-2 shrink-0 hover:opacity-70">
                <Logo width={24} height={23} alt="FactoryJS" />
              </span>
            </Tooltip>
            <PiX className="text-xl shrink-0 text-gray-400" aria-hidden />
            {[...libraries].map((library, index) => (
              <Fragment key={index}>
                {library}
                {index < libraries.length - 1 && (
                  <PiX className="text-xl shrink-0 text-gray-400" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <p className="my-4">{description}</p>
        <Link href="/get-started">
          <ArrowButton>Get Started</ArrowButton>
        </Link>
      </div>

      <div className="overflow-hidden block text-sm rounded-md bg-neutral-800 min-w-64 flex-1">
        <div className="flex items-start bg-neutral-900 h-full md:min-h-[40rem]">
          <CodeTabGroup codes={codes} />
        </div>
      </div>
    </div>
  );
};
