import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

// Define custom props
interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  customActiveLabel?: string; // Custom label for the left side
  customInactiveLabel?: string; // Custom label for the right side
  activeClients?: number;
  inactiveClients?: number;
}

const ClientStateSwitch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      customActiveLabel = "In treatment",
      customInactiveLabel = "Deactivated",
      activeClients = 0,
      inactiveClients = 0,
      ...props
    },
    ref
  ) => (
    <SwitchPrimitives.Root
      className={cn(
        "group relative text-label-medium text-black flex h-10 w-full items-center rounded-4xl bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      ref={ref}
    >
      {/* Custom Labels */}
      <span className="absolute left-1 w-[50%] h-full grid place-items-center rounded-l-4xl py-1.5 bg-white group-data-[state=checked]:text-gray-400 data-[state=unchecked]:opacity-0 transition">
        <span>{`${customActiveLabel} (${activeClients})`}</span>
      </span>
      <span className="absolute right-1 w-[50%] h-full grid place-items-center rounded-r-4xl py-1.5 bg-white group-data-[state=unchecked]:text-gray-400 data-[state=unchecked]:opacity-100 transition">
        <span>{`${customInactiveLabel} (${inactiveClients})`}</span>
      </span>
      {/* Thumb Component */}
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none w-[50%] h-[84%] rounded-4xl bg-transparent select-shadow ring-0 transition-transform data-[state=checked]:translate-x-[99.4%] data-[state=unchecked]:translate-x-1"
        )}
      />
    </SwitchPrimitives.Root>
  )
);
ClientStateSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ClientStateSwitch };
