"use client";

import Link from "next/link";
import { useState } from "react";
import { getSignInUrl, getSignupUrl } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

const nav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing-tiers", label: "Pricing" },
  { href: "/auction-results", label: "Results" },
  { href: "/more-auction-results", label: "More Results" },
] as const;

export function Header() {
  const signup = getSignupUrl();
  const signin = getSignInUrl();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0e17]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-slate-100"
          onClick={() => setOpen(false)}
        >
          Bid<span className="text-cyan-400">Squire</span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-400 lg:flex"
          aria-label="Main"
        >
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-slate-100">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ButtonLink href={signin} variant="outline" className="px-4 py-2 text-sm">
            Sign in
          </ButtonLink>
          <ButtonLink href={signup} variant="primary" className="px-4 py-2 text-sm">
            Get 500 free credits
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-[#0a0e17] px-6 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile main">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800/80 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-800 pt-4">
            <ButtonLink href={signin} variant="outline" className="justify-center py-2.5" onClick={() => setOpen(false)}>
              Sign in
            </ButtonLink>
            <ButtonLink href={signup} variant="primary" className="justify-center py-2.5" onClick={() => setOpen(false)}>
              Get 500 free credits
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
