import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PipelineDiagram } from "@/components/PipelineDiagram";

const SIGNUP_URL = "https://onboarding.bidsquire.com/signup";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How BidSquire fits into your auction workflow: from listings to value context—plus credits, activation, and sign-in.",
};

function IconRadar() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM15 11a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 7l8-4 8 4-8 4-8-4zm0 6l8 4 8-4M4 13l8 4 8-4"
      />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 14a2 2 0 100-4 2 2 0 000 4zm0 0v4m0-12V6m7 7h-4M9 12H5m11.657-5.657l-2.829 2.829M9.172 14.828l-2.829 2.829m0-11.314l2.829 2.829m5.657 5.657l2.829 2.829"
      />
    </svg>
  );
}

const FAQ = [
  {
    q: "What do I get when I sign up?",
    a: "You start with 500 free credits on the onboarding flow—no credit card required. After you submit the form, check your email to activate and set your password, then sign in to the main app.",
  },
  {
    q: "Where do I sign in after I’m set up?",
    a: "Use the Sign in button in the header; it points to the BidSquire app login. If you ever lose the link, your activation email includes the path back in.",
  },
  {
    q: "Why credits instead of only a subscription?",
    a: "Credits let you spend more analysis where it matters—deep lookups on high-stakes lots—without forcing everyone into the same package on day one. Upgrade paths can include more credits or team features as you grow.",
  },
  {
    q: "Is the valuation a guarantee?",
    a: "No. Estimates are decision support based on available data and models. Always use your own judgment, condition notes, and local market knowledge before you bid.",
  },
] as const;

export default function HowItWorksPage() {
  const stepCards = [
    {
      icon: <IconRadar />,
      title: "We watch the channels you care about",
      body:
        "Local online auctions and surplus listings roll into one comparable view—fewer tabs, fewer missed endings.",
    },
    {
      icon: <IconLayers />,
      title: "Listings become apples-to-apples",
      body:
        "Bid, timeline, and item context stay aligned so you are not mentally juggling three PDFs and a spreadsheet.",
    },
    {
      icon: <IconTarget />,
      title: "You bid with a value band in view",
      body:
        "See where the ask sits relative to an estimated range, then use credits when you need a deeper pass on a standout lot.",
    },
  ] as const;

  return (
    <>
      <PageHero>
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">How it works</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
            From noisy listings to a clear bid decision
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 md:text-lg">
            BidSquire is built for people who already love auctions but hate guessing the number. Here is the flow we
            optimize for—end to end.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={SIGNUP_URL} variant="primary" className="px-6 py-2.5">
              Get 500 free credits
            </ButtonLink>
            <ButtonLink href="/pricing-tiers" variant="outline">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            At a glance
          </p>
          <PipelineDiagram />
        </div>
      </section>

      <Section
        label="Three beats"
        title="What you feel in the product"
        subtitle="Plain language, no jargon—mapped to what resellers actually do week to week."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {stepCards.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8 transition hover:border-cyan-400/30 hover:-translate-y-0.5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-900/20 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="text-center text-2xl font-bold text-slate-50 md:text-3xl">Under the hood</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
            A slightly more detailed pipeline—same story as above, with product-shaped wording.
          </p>
          <ol className="mx-auto mt-12 max-w-2xl space-y-8 border-l border-white/[0.08] pl-8">
            {[
              {
                title: "Ingest",
                body: "Bring in the auction sources and formats you already follow—estates, surplus, regional houses, and more.",
              },
              {
                title: "Enrich",
                body: "Normalize fields so current bid, closing time, and item details stay side by side without manual cleanup.",
              },
              {
                title: "Estimate",
                body: "Surface value bands so you can sanity-check the ask fast. Not a guarantee—a head start on research.",
              },
              {
                title: "Act",
                body: "Spend credits on deeper analysis when a lot deserves it; export or note what you need for your own workflow.",
              },
            ].map((item, i) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[33px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0a0e17] font-mono text-xs font-bold text-cyan-400">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section
        label="Credits"
        title="Why we meter with credits"
        subtitle="You should not have to pick the wrong subscription shape before you know how hard you will run the tool."
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-slate-900/45 p-8">
          <p className="text-slate-300">
            Credits keep heavy lookups honest: you use more when a lot is worth the extra look, and less when you are
            skimming. Many teams pair a starter allocation with upgrades as volume grows—see{" "}
            <Link href="/pricing-tiers" className="font-semibold text-cyan-400 hover:text-cyan-300">
              pricing tiers
            </Link>{" "}
            for how we group features (without locking in dollar amounts until your team confirms them).
          </p>
        </div>
      </Section>

      <section className="py-16 md:py-24">
        <FaqAccordion items={[...FAQ]} />
      </section>

      <CtaBand />
    </>
  );
}
