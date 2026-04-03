type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  title?: string;
  items: FaqItem[];
};

export function FaqAccordion({
  title = "Frequently asked questions",
  items,
}: FaqAccordionProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-slate-700/80 bg-slate-900/40 px-5 py-1 open:bg-slate-900/60"
          >
            <summary className="cursor-pointer list-none py-4 font-semibold text-slate-100 marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {item.q}
                <span className="text-cyan-400 transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <p className="border-t border-slate-800 pb-4 pt-3 text-sm leading-relaxed text-slate-400">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
