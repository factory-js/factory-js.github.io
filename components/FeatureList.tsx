import {
  PiFeather,
  PiFileTs,
  PiBatteryCharging,
  PiCode,
  PiDatabase,
  PiPlug,
} from "react-icons/pi";
import { Feature } from "./Feature";

export const FeatureList = () => {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(theme(spacing.80),1fr))] gap-4">
        <li>
          <Feature
            icon={<PiFileTs className="text-xl text-white" />}
            color="bg-sky-800"
            title="Type Safety"
            description="TypeScript warns you about mis-configuration and typos."
          />
        </li>
        <li>
          <Feature
            icon={<PiCode className="text-xl text-white" />}
            color="bg-teal-800"
            title="Framework Agnostic"
            description="Written in simple JavaScript, it can be used on any framework."
          />
        </li>
        <li>
          <Feature
            icon={<PiFeather className="text-xl text-white" />}
            color="bg-lime-700"
            title="Lightweight"
            description="It is very lightweight as it does not depend on any other packages."
          />
        </li>
        <li>
          <Feature
            icon={<PiBatteryCharging className="text-xl text-white" />}
            color="bg-amber-600"
            title="Highly Functional"
            description="You can define variables, traits, and properties that depend on other properties."
          />
        </li>
        <li>
          <Feature
            icon={<PiDatabase className="text-xl text-white" />}
            color="bg-red-600"
            title="ORM-Friendly API"
            description="Designed to be used also with ORMs like Prisma and Drizzle."
          />
        </li>
        <li>
          <Feature
            icon={<PiPlug className="text-xl text-white" />}
            color="bg-gray-900"
            title="Plugins"
            description="Using the FactoryJS plugin for Prisma, you can automatically generate factories from schemas."
          />
        </li>
      </ul>
    </>
  );
};
