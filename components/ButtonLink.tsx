import Link from "next/link";
import type { ComponentProps } from "react";

type Base = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: "primary" | "outline";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

const variants = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:-translate-y-0.5",
  outline:
    "border border-slate-600 bg-transparent text-slate-200 hover:border-slate-500 hover:bg-slate-800/50",
} as const;

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: Base) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
