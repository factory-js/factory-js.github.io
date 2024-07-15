import { type getCodes } from "../lib/codes";
import { FeatureList } from "./FeatureList";
import { HeroCode } from "./HeroCode";
import { HeroHeader } from "./HeroHeader";
import { UseCases } from "./UseCases";

type Props = {
  codes: Awaited<ReturnType<typeof getCodes>>;
};

export const Home = ({ codes }: Props) => {
  return (
    <div className="max-w-6xl w-full m-auto px-4">
      <div className="mt-10">
        <HeroHeader />
      </div>
      <div className="mt-10">
        <HeroCode codes={codes.hero} />
      </div>
      <div className="mt-10">
        <FeatureList />
      </div>
      <div className="mt-10 mb-16">
        <UseCases codes={codes.usecases} />
      </div>
    </div>
  );
};
