import type { ReactNode } from "react";

type PageHeroProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Taller, centered hero without a hard bottom border so the page flows into content below.
 */
export function PageHero({ children, className = "" }: PageHeroProps) {
  return (
    <section
      className={`relative flex min-h-[26rem] flex-col justify-center bg-gradient-to-b from-slate-900/45 via-slate-900/15 to-transparent py-24 sm:min-h-[28rem] md:min-h-[32rem] md:py-32 lg:min-h-[36rem] lg:py-36 ${className}`}
    >
      {children}
    </section>
  );
}
