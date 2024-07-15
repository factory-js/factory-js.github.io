import { SiTypescript } from "react-icons/si";
import { CodeBlock } from "./CodeBlock";

type Props = {
  codes: {
    factory: string;
    output: string;
  };
};

export const HeroCode = ({ codes }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap w-full rounded-md overflow-hidden border dark:border-neutral-800">
        <div className="flex-1 inline-block text-sm bg-neutral-900 w-full">
          <div className="text-neutral-400 flex gap-2 items-center m-3 mx-4">
            <SiTypescript aria-hidden />
            factory.ts
          </div>
          <div className="my-6">
            <CodeBlock code={codes.factory} />
          </div>
        </div>
        <div className="flex-1 inline-block text-sm">
          <div className="text-neutral-500 dark:text-neutral-400 m-3 mx-4">
            Output
          </div>
          <div className="my-6">
            <CodeBlock code={codes.output} />
          </div>
        </div>
      </div>
    </div>
  );
};
