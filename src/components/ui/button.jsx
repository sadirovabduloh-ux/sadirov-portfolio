import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-cyan-300/30 bg-cyan-300 px-6 py-3 !text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)] hover:bg-cyan-200 [&_*]:!text-slate-950",
        secondary:
          "border-white/12 bg-white/[0.04] px-6 py-3 text-white hover:border-cyan-300/30 hover:bg-white/[0.08]",
        ghost:
          "border-transparent bg-transparent px-0 py-0 text-slate-300 hover:text-white",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export function Button({ asChild = false, className, variant, size, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
