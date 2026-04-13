import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ResultCard } from "@/components/ResultCard";
import { ButtonLink } from "@/components/ButtonLink";
import { sampleResultsPage1 } from "@/lib/sample-results";

const SIGNUP_URL = "https://onboarding.bidsquire.com/signup";

export const metadata: Metadata = {
  title: "Auction results",
  description:
    "See how BidSquire-style cards present bid, estimated value, and headroom—clear, calm, and built for trust.",
};

const CATEGORY_CHIPS = ["Furniture", "Tools", "Watches", "Commercial", "Vehicles", "Home"] as const;

export default function AuctionResultsPage() {
  return (
    <>
      <PageHero>
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Realistic examples, calmly presented
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 md:text-lg">
            Every card shows current bid, estimated value range, source, and date—so visitors see how
            BidSquire helps you compare at a glance. Figures below are{" "}
            <strong className="font-medium text-slate-300">sample illustrations only</strong>; your
            results will depend on the lots you track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={SIGNUP_URL} variant="primary" className="px-6 py-2.5">
              Get 500 free credits
            </ButtonLink>
            <ButtonLink href="/more-auction-results" variant="outline">
              More results
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <section className="pb-16 pt-4 md:pb-20 md:pt-6">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Categories in this sample set
          </p>
          <ul className="mb-10 flex flex-wrap justify-center gap-2">
            {CATEGORY_CHIPS.map((c) => (
              <li
                key={c}
                className="rounded-full bg-slate-800/45 px-3 py-1 text-xs font-medium text-slate-400"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleResultsPage1.map((r) => (
              <ResultCard key={r.title} {...r} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            <Link href="/more-auction-results" className="font-semibold text-cyan-400 hover:text-cyan-300">
              More auction results →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
