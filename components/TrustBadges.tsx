const SOURCES = ["HiBid", "GovDeals", "AuctionZip", "Regional estates", "Surplus & liquidation"] as const;

export function TrustBadges() {
  return (
    <div className="py-10 md:py-12">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Listings-style sources we help you read faster
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {SOURCES.map((name) => (
            <li
              key={name}
              className="rounded-full bg-slate-800/40 px-4 py-1.5 text-sm text-slate-400"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
