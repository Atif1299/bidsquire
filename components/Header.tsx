import Link from "next/link";

export function Header() {
  return (
    <nav style={{ maxWidth: '1100px', margin: '0 auto', padding: '28px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link href="/" style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '26px', fontWeight: 700, letterSpacing: '0.5px', color: '#fff', textDecoration: 'none' }}>
        Bid<span style={{ color: '#e8c547' }}>squire</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link href="/how-it-works" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          How It Works
        </Link>
        <Link href="/pricing-tiers" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          Pricing
        </Link>
        <Link href="/auction-results" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          Results
        </Link>
        <Link href="/more-auction-results" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          More Results
        </Link>
        <a
          href="https://onboarding.bidsquire.com/"
          style={{ display: 'inline-block', border: '1px solid rgba(232,197,71,0.5)', color: '#e8c547', fontSize: '13px', fontWeight: 500, padding: '9px 22px', borderRadius: '6px', textDecoration: 'none' }}
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}
