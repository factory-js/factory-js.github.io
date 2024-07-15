import { Tab, TabGroup, TabList, TabPanel } from "@headlessui/react";
import { type ReactNode } from "react";

type Props = {
  codes: {
    icon: ReactNode;
    title: ReactNode;
    content: ReactNode;
  }[];
};

export const CodeTabGroup = ({ codes }: Props) => {
  return (
    <TabGroup className="w-full flex flex-col h-full">
      <TabList className="w-full inline-flex overflow-hidden bg-neutral-800">
        <div className="w-full flex overflow-auto">
          {codes.map(({ icon, title }, index) => (
            <Tab
              key={index}
              className="bg-neutral-800 border-b-2 border-b-transparent data-[focus]:border-sky-600 text-neutral-400 shrink-0 !ring-0 !ring-offset-0 flex gap-2 items-center pt-3 pb-2 px-4 data-[selected]:bg-neutral-900"
            >
              {icon}
              {title}
            </Tab>
          ))}
        </div>
      </TabList>
      {codes.map(({ content }, index) => (
        <TabPanel key={index} className="py-6 flex-1 w-full">
          {content}
        </TabPanel>
      ))}
    </TabGroup>
  );
};
