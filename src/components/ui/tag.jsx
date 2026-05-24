import { cn } from "../../lib/utils";

export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
