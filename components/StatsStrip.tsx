type Stat = {
  value: string;
  label: string;
  note?: string;
};

type StatsStripProps = {
  stats: Stat[];
  disclaimer?: string;
};

export function StatsStrip({ stats, disclaimer }: StatsStripProps) {
  return (
    <section className="bg-slate-900/20 py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex flex-wrap justify-center gap-10 text-center md:gap-16 lg:gap-24">
          {stats.map((s) => (
            <div key={s.label} className="min-w-[140px]">
              <p className="font-mono text-2xl font-bold text-cyan-400 md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-200">{s.label}</p>
              {s.note ? <p className="mt-0.5 text-xs text-slate-500">{s.note}</p> : null}
            </div>
          ))}
        </div>
        {disclaimer ? (
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-600">{disclaimer}</p>
        ) : null}
      </div>
    </section>
  );
}
