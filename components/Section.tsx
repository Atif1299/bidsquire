import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1120px] px-6">
        {label ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {label}
          </p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mb-12 max-w-xl text-lg text-slate-400">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
