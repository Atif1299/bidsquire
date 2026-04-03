export type ResultCardProps = {
  title: string;
  source: string;
  date: string;
  bid: string;
  estimatedValue: string;
  marginLabel: string;
  marginNote?: string;
  category?: string;
};

export function ResultCard({
  title,
  source,
  date,
  bid,
  estimatedValue,
  marginLabel,
  marginNote,
  category,
}: ResultCardProps) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:border-white/[0.12]">
      <header className="mb-5 pb-1">
        {category ? (
          <p className="mb-2 inline-block rounded-full bg-slate-800/60 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {category}
          </p>
        ) : null}
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{source}</p>
        <time className="mt-2 block font-mono text-xs text-slate-600">
          {date}
        </time>
      </header>
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Current bid
          </dt>
          <dd className="mt-1 font-mono text-lg font-bold text-slate-200">
            {bid}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Est. value
          </dt>
          <dd className="mt-1 font-mono text-lg font-bold text-slate-200">
            {estimatedValue}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Margin
          </dt>
          <dd className="mt-1">
            <span className="inline-flex rounded-lg bg-slate-800/90 px-2.5 py-1 font-mono text-sm font-semibold text-slate-200">
              {marginLabel}
            </span>
            {marginNote ? (
              <span className="ml-2 text-xs text-slate-500">{marginNote}</span>
            ) : null}
          </dd>
        </div>
      </dl>
    </article>
  );
}
