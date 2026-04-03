type Row = {
  feature: string;
  starter: string;
  growth: string;
  team: string;
};

const ROWS: Row[] = [
  {
    feature: "Free credits to start",
    starter: "Included",
    growth: "Included",
    team: "Custom pool",
  },
  {
    feature: "Core scan & valuation views",
    starter: "Yes",
    growth: "Yes",
    team: "Yes",
  },
  {
    feature: "Deeper research passes",
    starter: "Use credits",
    growth: "More credits",
    team: "Volume + priority",
  },
  {
    feature: "Support",
    starter: "Email",
    growth: "Priority",
    team: "Dedicated check-ins",
  },
  {
    feature: "Territory / county add-ons",
    starter: "—",
    growth: "Available",
    team: "Custom",
  },
];

export function PricingComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-900/30">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-900/60">
            <th className="px-4 py-3 font-semibold text-slate-300">Feature</th>
            <th className="px-4 py-3 font-semibold text-slate-200">Starter</th>
            <th className="px-4 py-3 font-semibold text-cyan-400">Growth</th>
            <th className="px-4 py-3 font-semibold text-slate-200">Team</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06]">
          {ROWS.map((row) => (
            <tr key={row.feature} className="bg-slate-900/25">
              <td className="px-4 py-3 text-slate-400">{row.feature}</td>
              <td className="px-4 py-3 text-slate-200">{row.starter}</td>
              <td className="px-4 py-3 text-slate-200">{row.growth}</td>
              <td className="px-4 py-3 text-slate-200">{row.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
