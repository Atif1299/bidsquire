import { ButtonLink } from "./ButtonLink";

const SIGNUP_URL = "https://onboarding.bidsquire.com/signup";

type CtaBandProps = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
};

export function CtaBand({
  heading = "Stop guessing. Start with 500 free credits.",
  body = "Sign up in about 30 seconds—no credit card required. Then activate from your email and sign in to the app.",
  ctaLabel = "Get 500 free credits",
}: CtaBandProps) {
  return (
    <section className="bg-slate-900/35 py-20 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-slate-400">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={SIGNUP_URL} variant="primary" className="px-8 py-3 text-base">
            {ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
