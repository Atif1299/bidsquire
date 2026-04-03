import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink } from "@/components/ButtonLink";
import { PricingComparisonTable } from "@/components/PricingComparisonTable";
import { getSignupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing tiers",
  description:
    "BidSquire Starter, Growth, and Team tiers—built around credits and clear feature progression. Start free with 500 credits.",
};

const tiers = [
  {
    name: "Starter",
    blurb: "Solo resellers proving the workflow on real auctions.",
    bullets: [
      "500 free credits to begin (via onboarding)",
      "Core scans and valuation views",
      "Email support",
      "Upgrade when you outgrow the starter pool",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    blurb: "Small teams that run more lots and want faster answers.",
    bullets: [
      "Larger credit pools for frequent lookups",
      "Priority guidance on setup and sources",
      "Shared workspace basics for a tight team",
      "Room to add territory options when you are ready",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    blurb: "Organizations with volume, custom sources, or compliance needs.",
    bullets: [
      "Custom onboarding and success check-ins",
      "Volume pricing for credits and seats",
      "Deeper research lanes coordinated with you",
      "Territory and county-style add-ons discussed with sales",
    ],
    highlighted: false,
  },
] as const;

export default function PricingTiersPage() {
  const signup = getSignupUrl();

  return (
    <>
      <section className="border-b border-slate-800 bg-slate-900/30 py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Pricing</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Credits first. Room to grow.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 md:text-lg">
            Every visitor starts the same way:{" "}
            <strong className="font-medium text-slate-300">500 free credits</strong>, no credit card, through
            onboarding. Paid tiers layer on volume, support, and team workflows. Exact dollar pricing and any
            county-specific packaging should be finalized with your team before you publish hard numbers—we will swap
            those in when you have them.
          </p>
          <div className="mt-6">
            <ButtonLink href={signup} variant="primary" className="px-8 py-3">
              Get 500 free credits
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border p-8 ${tier.highlighted
                  ? "border-cyan-400/40 bg-slate-900/70 shadow-lg shadow-cyan-400/5"
                  : "border-slate-700/80 bg-slate-900/40"
                }`}
            >
              <h2 className="text-xl font-bold text-slate-100">{tier.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{tier.blurb}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-300">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="shrink-0 text-cyan-400">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={signup}
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-8 justify-center"
              >
                Get 500 free credits
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-50 md:text-3xl">Compare at a glance</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-slate-500">
            Feature-oriented summary—dollar amounts added when your pricing is final.
          </p>
          <PricingComparisonTable />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
