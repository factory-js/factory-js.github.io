import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { Logo } from "./Logo";

export const HeroHeader = () => {
  return (
    <header className="flex flex-col items-center">
      <p className="mb-4">
        <Logo width={38} height={37} alt="" />
      </p>
      <h1 className="text-neutral-800 dark:text-neutral-100 font-semibold text-2xl">
        FactoryJS
      </h1>
      <p className="text-neutral-600 dark:text-neutral-100 mt-1">
        The object generator for testing.
      </p>
      <Link href="/get-started" className="inline-block mt-6">
        <ArrowButton>Get Started</ArrowButton>
      </Link>
    </header>
  );
};
