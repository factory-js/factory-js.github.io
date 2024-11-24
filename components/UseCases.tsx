import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  SiJest,
  SiMockserviceworker,
  SiPlaywright,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { CodeBlock } from "./CodeBlock";
import { Tooltip } from "./Tooltip";
import { UseCaseDetail } from "./UseCaseDetail";

type Props = {
  codes: {
    userFactory: string;
    taskFactory: string;
    testing: string;
    handlers: string;
    e2e: string;
    seed: string;
  };
};

export const UseCases = ({ codes }: Props) => {
  return (
    <div className="w-full px-2 flex flex-col items-center">
      <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-200 my-6 font-semibold">
        For example, you can use FactoryJS for...
      </h2>
      <TabGroup className="w-full flex flex-col items-center">
        <TabList className="mb-12 flex max-w-full overflow-auto divide-x divide-white dark:divide-neutral-900">
          {["Testing", "API Mocking", "E2E", "Seeding"].map((tab) => (
            <Tab
              key={tab}
              className="first:rounded-l last:rounded-r text-sm !ring-0 bg-gray-100 dark:bg-neutral-800 !ring-offset-0 text-neutral-900 data-[focus]:bg-neutral-700 data-[selected]:bg-neutral-900 dark:data-[selected]:bg-neutral-900 dark:text-neutral-50 py-2.5 px-6 data-[selected]:text-white data-[hover]:bg-neutral-700 dark:data-[hover]:bg-neutral-800 data-[hover]:text-white"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full">
          <TabPanel>
            <UseCaseDetail
              title="Testing"
              description="Using FactoryJS, you can save the objects needed for testing to the database with just a small amount of code. It is also easy to generate objects in different states, such as admin users and guest users, depending on the test case."
              libraries={[
                <Tooltip
                  key="jest"
                  content="Jest, Vitest, etc."
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-red-500">
                    <SiJest
                      className="text-2xl shrink-0"
                      aria-label="Jest, Vitest, etc."
                    />
                  </span>
                </Tooltip>,
                <Tooltip
                  key="prisma"
                  content="Prisma, Drizzle, etc."
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-teal-800 dark:hover:text-teal-600">
                    <SiPrisma
                      className="text-2xl shrink-0"
                      aria-label="Prisma, Drizzle, etc."
                    />
                  </span>
                </Tooltip>,
              ]}
              codes={[
                {
                  icon: <SiTypescript />,
                  title: "example.test.ts",
                  content: <CodeBlock code={codes.testing} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "user-factory.ts",
                  content: <CodeBlock code={codes.userFactory} />,
                },
              ]}
            />
          </TabPanel>
          <TabPanel>
            <UseCaseDetail
              title="API Mocking"
              description="When mocking an API server with a library like MSW, you will also need objects to return as responses. Using FactoryJS allows you to generate response objects concisely."
              libraries={[
                <Tooltip
                  key="msw"
                  content="MSW"
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-orange-600">
                    <SiMockserviceworker
                      className="text-2xl shrink-0"
                      aria-label="MSW"
                    />
                  </span>
                </Tooltip>,
              ]}
              codes={[
                {
                  icon: <SiTypescript />,
                  title: "handlers.ts",
                  content: <CodeBlock code={codes.handlers} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "user-factory.ts",
                  content: <CodeBlock code={codes.userFactory} />,
                },
              ]}
            />
          </TabPanel>
          <TabPanel>
            <UseCaseDetail
              title="E2E"
              description="When writing E2E tests, you may sometimes want to pre-create test data in the database. Using FactoryJS allows you to prepare test data with simple code."
              libraries={[
                <Tooltip
                  key="playwright"
                  content="Playwright, Puppeteer, etc."
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-green-700">
                    <SiPlaywright
                      className="text-2xl shrink-0"
                      aria-label="Playwright, Puppeteer, etc."
                    />
                  </span>
                </Tooltip>,
                <Tooltip
                  key="prisma"
                  content="Prisma, Drizzle, etc."
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-teal-800 dark:hover:text-teal-600">
                    <SiPrisma
                      className="text-2xl shrink-0"
                      aria-label="Prisma, Drizzle, etc."
                    />
                  </span>
                </Tooltip>,
              ]}
              codes={[
                {
                  icon: <SiTypescript />,
                  title: "e2e.spec.ts",
                  content: <CodeBlock code={codes.e2e} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "user-factory.ts",
                  content: <CodeBlock code={codes.userFactory} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "task-factory.ts",
                  content: <CodeBlock code={codes.taskFactory} />,
                },
              ]}
            />
          </TabPanel>
          <TabPanel>
            <UseCaseDetail
              title="Seeding"
              description="If you need a seed file to create admin users for development or users with a large amount of data, you can create them simply with FactoryJS."
              libraries={[
                <Tooltip
                  key="prisma"
                  content="Prisma, Drizzle, etc."
                  side="top"
                  sideOffset={4}
                  delayDuration={0}
                >
                  <span className="p-2 hover:text-teal-800 dark:hover:text-teal-600">
                    <SiPrisma
                      className="text-2xl shrink-0"
                      aria-label="Prisma, Drizzle, etc."
                    />
                  </span>
                </Tooltip>,
              ]}
              codes={[
                {
                  icon: <SiTypescript />,
                  title: "seed.ts",
                  content: <CodeBlock code={codes.seed} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "user-factory.ts",
                  content: <CodeBlock code={codes.userFactory} />,
                },
                {
                  icon: <SiTypescript />,
                  title: "task-factory.ts",
                  content: <CodeBlock code={codes.taskFactory} />,
                },
              ]}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
