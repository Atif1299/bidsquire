import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ResultCard } from "@/components/ResultCard";
import { ButtonLink } from "@/components/ButtonLink";
import { getSignupUrl } from "@/lib/site";
import { sampleResultsPage2 } from "@/lib/sample-results";

export const metadata: Metadata = {
  title: "More auction results",
  description:
    "More sample auction outcome cards—same clear layout: bid, estimate, margin context, source, and date.",
};

export default function MoreAuctionResultsPage() {
  const signup = getSignupUrl();

  return (
    <>
      <PageHero>
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
            More sample results
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 md:text-lg">
            Same trustworthy card layout as the main gallery—additional categories so visitors see
            breadth, not hype. All figures are illustrative.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/auction-results" variant="outline">
              Back to results
            </ButtonLink>
            <ButtonLink href={signup} variant="primary" className="px-6 py-2.5">
              Get 500 free credits
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <section className="pb-16 pt-4 md:pb-20 md:pt-6">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleResultsPage2.map((r) => (
              <ResultCard key={r.title} {...r} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            <Link href="/auction-results" className="text-cyan-400 hover:text-cyan-300">
              ← Auction results
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-slate-900/20 py-12 md:py-14">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-sm text-slate-400">
            Big win with BidSquire? Tag us <span className="font-semibold text-cyan-400">@Bidsquire</span>{" "}
            — we love seeing your flips.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
