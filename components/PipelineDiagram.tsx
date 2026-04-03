const STEPS = [
  { n: 1, label: "Listings in" },
  { n: 2, label: "Normalized view" },
  { n: 3, label: "Value band" },
  { n: 4, label: "You bid" },
] as const;

function StepBubble({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400 ring-1 ring-cyan-400/25">
        {n}
      </div>
      <span className="text-sm font-medium text-slate-200">{label}</span>
    </div>
  );
}

export function PipelineDiagram() {
  return (
    <div
      className="rounded-2xl border border-white/[0.08] bg-slate-900/45 px-6 py-8 md:px-10"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-4 md:hidden">
        {STEPS.map((step, i) => (
          <div key={step.n} className="flex flex-col items-center gap-4">
            <StepBubble n={step.n} label={step.label} />
            {i < STEPS.length - 1 ? <span className="text-slate-600">↓</span> : null}
          </div>
        ))}
      </div>
      <div className="hidden flex-wrap items-center justify-center gap-2 md:flex">
        {STEPS.map((step, i) => (
          <div key={step.n} className="flex items-center gap-2">
            {i > 0 ? <span className="px-1 text-slate-600">→</span> : null}
            <StepBubble n={step.n} label={step.label} />
          </div>
        ))}
      </div>
    </div>
  );
}
