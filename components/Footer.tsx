import Link from "next/link";
import { getSignupUrl } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing-tiers", label: "Pricing" },
  { href: "/auction-results", label: "Auction Results" },
  { href: "/more-auction-results", label: "More Results" },
] as const;

export function Footer() {
  const signup = getSignupUrl();
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0e17] py-12">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold text-slate-100">
              Bid<span className="text-cyan-400">Squire</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              AI-assisted local auction intelligence—know what to bid before the
              hammer falls.
            </p>
          </div>
          <ButtonLink href={signup} variant="primary" className="shrink-0">
            Get 500 free credits
          </ButtonLink>
        </div>
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2 pt-2 text-sm text-slate-500 md:justify-start"
          aria-label="Footer"
        >
          {links.map(({ href, label }, i) => (
            <span key={href} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span className="text-slate-700" aria-hidden>
                  |
                </span>
              ) : null}
              <Link href={href} className="hover:text-slate-300">
                {label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} BidSquire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
