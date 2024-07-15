import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number | undefined;
  delayDuration?: number;
};

export const Tooltip = ({
  children,
  content,
  side,
  sideOffset,
  delayDuration,
}: Props) => {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration ?? 700}>
      <RadixTooltip.Root disableHoverableContent>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side ?? "top"}
            className="pointer-events-none z-50 rounded-2xl bg-gray-900 dark:bg-neutral-800 px-3 py-1.5 text-xs text-white"
            sideOffset={sideOffset ?? 0}
          >
            {content}
            <RadixTooltip.Arrow className="fill-gray-900 dark:fill-neutral-800" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
