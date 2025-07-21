import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white font-bold shadow-xl hover:shadow-2xl hover:from-blue-800 hover:via-indigo-800 hover:to-purple-800 transform hover:scale-105 hover:-translate-y-1 border-0",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 border-0",
        outline:
          "border-2 border-blue-500 bg-white text-blue-800 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 hover:text-blue-900 hover:border-blue-600 transform hover:scale-105",
        secondary:
          "bg-gradient-to-r from-slate-300 to-gray-400 text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:from-slate-400 hover:to-gray-500 transform hover:scale-105",
        ghost:
          "text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-900 transform hover:scale-105",
        link: "text-blue-700 font-medium underline-offset-4 hover:underline hover:text-blue-800",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-lg rounded-2xl",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
