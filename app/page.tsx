import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { StatsStrip } from "@/components/StatsStrip";
import { TrustBadges } from "@/components/TrustBadges";
import { ButtonLink } from "@/components/ButtonLink";
import { getSignupUrl } from "@/lib/site";

export default function HomePage() {
  const signup = getSignupUrl();

  return (
    <>
      <section className="relative flex min-h-[min(88vh,38rem)] flex-col justify-center overflow-hidden py-28 md:min-h-[min(86vh,42rem)] md:py-36 lg:min-h-[min(84vh,44rem)]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(34,211,238,0.08)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1120px] gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-medium text-cyan-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              AI-assisted local auction intelligence
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-50 md:text-5xl lg:text-[3.5rem]">
              Know what it&apos;s{" "}
              <em className="not-italic text-cyan-400">really worth</em> before you bid
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              BidSquire pulls together local online auctions and surfaces estimated value context next to the current
              bid—so you move faster than guesswork and save credits for the lots that deserve a deeper look.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={signup} variant="primary" className="px-8 py-3.5 text-base">
                Get 500 free credits
              </ButtonLink>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                How it works →
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              No credit card required · Ready in about 30 seconds · Then activate from email and sign in to the app
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/70 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between bg-slate-800/35 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sample scan
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Active
              </span>
            </div>
            <ul className="divide-y divide-white/[0.06]">
              <li className="px-5 py-5">
                <p className="font-semibold text-slate-100">Industrial shelving unit</p>
                <p className="mt-1 text-xs text-slate-500">County surplus · Online</p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">Bid</p>
                    <p className="font-mono text-lg font-bold text-slate-200">$95</p>
                  </div>
                  <span className="text-slate-600">→</span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">Est. value</p>
                    <p className="font-mono text-lg font-bold text-slate-200">$280–340</p>
                  </div>
                  <span className="ml-auto rounded-lg bg-slate-800/90 px-2 py-1 font-mono text-xs font-semibold text-slate-300">
                    Headroom
                  </span>
                </div>
              </li>
              <li className="px-5 py-5">
                <p className="font-semibold text-slate-100">Commercial freezer</p>
                <p className="mt-1 text-xs text-slate-500">Restaurant liquidation</p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">Bid</p>
                    <p className="font-mono text-lg font-bold text-slate-200">$620</p>
                  </div>
                  <span className="text-slate-600">→</span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">Est. value</p>
                    <p className="font-mono text-lg font-bold text-slate-200">$1.1k–1.4k</p>
                  </div>
                  <span className="ml-auto rounded-lg bg-slate-800/90 px-2 py-1 font-mono text-xs font-semibold text-slate-300">
                    Headroom
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TrustBadges />

      <StatsStrip
        stats={[
          { value: "2.4M+", label: "Sold records (style metric)", note: "Illustrative" },
          { value: "328%", label: "Example margin story", note: "Not a promise" },
          { value: "~30 sec", label: "To start signup", note: "Typical flow" },
        ]}
        disclaimer="Figures above are for storytelling on this page only—not audited business metrics. Replace with verified stats when marketing approves."
      />

      <Section
        label="How it works"
        title="Three steps to smarter bidding"
        subtitle="Same journey we describe on the dedicated page—tight enough to scan from home."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Scan",
              d: "Aggregate listings from the auction channels you care about in one place.",
            },
            {
              n: "02",
              t: "Compare",
              d: "See current bids next to estimated value bands so signal stands out from noise.",
            },
            {
              n: "03",
              t: "Bid smarter",
              d: "Use credits for deeper lookups when you need more context on edge cases.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8 transition hover:border-cyan-400/30 hover:-translate-y-1"
            >
              <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-cyan-400/10">{step.n}</span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <span className="font-mono text-sm font-bold">{step.n}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/how-it-works" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            Full walkthrough & FAQ →
          </Link>
        </p>
      </Section>

      <Section
        label="Results"
        title="Proof without the neon hype"
        subtitle="We show bid, estimate, and headroom in calm cards—closer to a serious tool than a tabloid flip headline."
        className="bg-slate-900/20"
      >
        <p className="mb-8 max-w-2xl text-slate-400">
          Sample cards are illustrative; they exist so visitors understand the layout before they sign up—not to promise
          any specific return.
        </p>
        <div className="flex justify-center">
          <ButtonLink href="/auction-results" variant="outline">
            View auction results
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
