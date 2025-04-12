
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        chip: 
          "px-6 py-2 rounded-full data-[state=on]:bg-indigo-600/50 data-[state=on]:text-white hover:bg-indigo-500/30 hover:text-indigo-200 bg-indigo-950/30 backdrop-blur-md text-gray-300",
        pillChip:
          "px-6 py-2 rounded-full border border-indigo-500/20 shadow-lg data-[state=on]:bg-indigo-500/20 data-[state=on]:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 bg-black/40 backdrop-blur-md text-gray-400",
        glassyChip:
          "px-6 py-2 rounded-full border border-indigo-500/30 shadow-lg data-[state=on]:bg-indigo-600/30 data-[state=on]:border-indigo-500/50 data-[state=on]:text-white hover:bg-indigo-500/20 bg-black/30 backdrop-blur-lg text-gray-300 transition-all duration-300",
        neonChip:
          "px-6 py-2 rounded-full border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)] data-[state=on]:shadow-[0_0_15px_rgba(99,102,241,0.4)] data-[state=on]:bg-indigo-600/30 data-[state=on]:text-white data-[state=on]:border-indigo-400/40 hover:bg-indigo-500/20 bg-black/40 backdrop-blur-md text-gray-300",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
