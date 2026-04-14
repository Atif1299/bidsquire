import type { Metadata } from "next";
import { heroImages } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: "Bidsquire — Know the Value Before You Bid",
  description: "372% Profit Margin. Real Auctions. Real Results. Bidsquire uses AI to scan local auctions and surface estimated values before you bid.",
};

const heroCards = [
  { name: "1975 Mego Wonder Woman Doll", paid: "$2", sold: "$35", margin: "1,650%" },
  { name: "Garfield & Campbell Kids Soup Bowls", paid: "$1", sold: "$14.50", margin: "1,350%" },
  { name: "Antique Soapstone in Leather Satchel", paid: "$3", sold: "$25", margin: "733%" },
  { name: "Vintage All Glass Teapot", paid: "$7", sold: "$40", margin: "471%" },
  { name: "Personal Memoirs of U.S. Grant Vol. I & II", paid: "$80", sold: "$320", margin: "300%" }
];

const steps = [
  {
    number: "1",
    label: "Scout",
    title: "Paste Any HiBid Auction URL",
    description: <>Drop in a HiBid auction link. Bidsquire&apos;s AI <strong>analyzes every single item</strong> — photos, descriptions, lot details — automatically.</>,
    badge: null
  },
  {
    number: "2",
    label: "Bid Smart",
    title: "See Real Sold Prices Before You Bid",
    description: <>For every item, see <strong>real eBay sold prices</strong> of identical or similar items — not estimates, not guesses. Actual recent sales data, so you know your ceiling before you raise your paddle.</>,
    badge: "Powered by live eBay comps"
  },
  {
    number: "3",
    label: "Win & Refine",
    title: "Upload Your Own Photos",
    description: <>After you win, upload close-ups — <strong>maker&apos;s marks, signatures, condition details</strong>. Bidsquire re-analyzes with that clarity to pinpoint exact market value.</>,
    badge: "A hidden mark can 10× the price"
  },
  {
    number: "4",
    label: "List & Profit",
    title: "Price It Right on eBay or Etsy",
    description: <>Get <strong>precise eBay or Etsy listing prices</strong> based on recent sold comps. No guessing, no leaving money on the table. List confidently and move fast.</>,
    badge: null
  }
];

export default function HomePage() {
  return (
    <div style={{ background: '#0a0d1f' }}>
      {/* Hero Section */}
      <div style={{ background: '#0f1128', borderRadius: '20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>
            Bidsquire — AI Auction Intelligence
          </p>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '68px', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.5px', marginBottom: 0 }}>
            372% Profit Margin.<br />
            <span style={{ color: '#e8c547' }}>Real Auctions.</span> Real Results.
          </h1>
          <div style={{ margin: '26px 0 42px', paddingLeft: '20px', borderLeft: '3px solid rgba(232,197,71,0.4)' }}>
            <p style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
              We didn&apos;t make that number up. We ran thousands of real auction items through Bidsquire and tracked every single sale. That&apos;s our actual average.
            </p>
          </div>
          <a
            href="https://onboarding.bidsquire.com/"
            style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.01em' }}
          >
            Try It Free For 30 Days
          </a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em' }}>No credit card required.</p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '52px 0 38px' }}></div>

          <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '18px' }}>Real items. Real margins.</p>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
            {heroCards.map((card, index) => (
              <div key={index} style={{ background: '#161a36', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f1128', padding: '10px' }}>
                  <img
                    src={heroImages[index]}
                    alt={card.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.45, marginBottom: '12px', flex: 1 }}>{card.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>{card.paid}</span>
                    <span style={{ fontSize: '10px', color: 'rgba(232,197,71,0.5)' }}>→</span>
                    <span style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{card.sold}</span>
                  </div>
                  <div style={{ background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.22)', borderRadius: '5px', padding: '6px 10px', display: 'inline-block' }}>
                    <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '22px', fontWeight: 700, color: '#e8c547', lineHeight: 1, letterSpacing: '0.5px' }}>{card.margin}</div>
                    <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(232,197,71,0.5)', marginTop: '2px' }}>margin</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ background: '#0f1128', borderRadius: '20px', marginTop: '16px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>How It Works</p>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '48px', fontWeight: 700, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.05, marginBottom: '12px' }}>
            From auction listing to <span style={{ color: '#e8c547' }}>eBay profit</span> — in four steps.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: '560px', marginBottom: '56px' }}>
            Bidsquire does the research so you don&apos;t have to. Know what everything&apos;s worth before you spend a dollar.
          </p>

          <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ flex: 1, minWidth: 0, paddingRight: index < 3 ? 20 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      border: '1px solid rgba(232,197,71,0.35)',
                      background: 'rgba(232,197,71,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-barlow-condensed), sans-serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#e8c547',
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  {index < 3 && (
                    <div
                      aria-hidden
                      style={{
                        flex: 1,
                        height: '2px',
                        minWidth: 12,
                        marginLeft: 10,
                        alignSelf: 'center',
                        borderRadius: '1px',
                        background:
                          'linear-gradient(90deg, rgba(232,197,71,0.42) 0%, rgba(232,197,71,0.22) 55%, rgba(232,197,71,0.08) 100%)',
                      }}
                    />
                  )}
                </div>
                <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.7, marginBottom: '8px' }}>{step.label}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{step.title}</div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.52)', lineHeight: 1.65 }}>{step.description}</p>
                {step.badge && (
                  <span style={{ display: 'inline-block', marginTop: '12px', background: 'rgba(232,197,71,0.12)', border: '1px solid rgba(232,197,71,0.25)', borderRadius: '4px', padding: '4px 10px', fontSize: '11px', color: '#e8c547', letterSpacing: '0.04em' }}>
                    {step.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* County Section */}
      <div style={{
        maxWidth: '1100px',
        margin: '16px auto',
        background: 'linear-gradient(135deg, #0f1128 0%, #141830 100%)',
        borderRadius: '20px',
        padding: '64px 56px',
        border: '1px solid rgba(232,197,71,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px'
      }}>
        <div style={{ flex: 1, maxWidth: '580px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>Exclusive by County</p>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '44px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.3px', marginBottom: '16px' }}>
            One license.<br />
            One reseller.<br />
            <span style={{ color: '#e8c547' }}>Your county.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.52)', lineHeight: 1.65 }}>
            Bidsquire sells a single exclusive license per county across the US. <em style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'normal' }}>When your county is taken, it&apos;s gone.</em> Check now to see if yours is still available.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(232,197,71,0.06)', borderColor: 'rgba(232,197,71,0.3)', border: '1px solid rgba(232,197,71,0.3)', borderRadius: '4px', padding: '5px 12px', fontSize: '11px', color: 'rgba(232,197,71,0.7)', letterSpacing: '0.03em' }}>✓ Rural — $99/mo</span>
            <span style={{ background: 'rgba(232,197,71,0.06)', borderColor: 'rgba(232,197,71,0.3)', border: '1px solid rgba(232,197,71,0.3)', borderRadius: '4px', padding: '5px 12px', fontSize: '11px', color: 'rgba(232,197,71,0.7)', letterSpacing: '0.03em' }}>✓ Suburban — $199/mo</span>
            <span style={{ background: 'rgba(232,197,71,0.06)', borderColor: 'rgba(232,197,71,0.3)', border: '1px solid rgba(232,197,71,0.3)', borderRadius: '4px', padding: '5px 12px', fontSize: '11px', color: 'rgba(232,197,71,0.7)', letterSpacing: '0.03em' }}>✓ Urban — $299/mo</span>
          </div>
        </div>
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          <a
            href="https://onboarding.bidsquire.com/"
            style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.01em' }}
          >
            Check Your County →
          </a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em' }}>No credit card required to check</p>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{
        maxWidth: '1100px',
        margin: '16px auto 0',
        background: 'linear-gradient(160deg, #1a1e40 0%, #0f1128 60%, #0e1020 100%)',
        borderRadius: '20px',
        padding: '96px 56px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,197,71,0.07) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '20px', position: 'relative' }}>Zero Risk. All Reward.</p>
        <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '58px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.4px', marginBottom: '20px', position: 'relative' }}>
          Ready to bid smart?<br />
          <span style={{ color: '#e8c547' }}>Your first auction is free.</span>
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.6, position: 'relative' }}>
          See real sold prices on every item before you spend a dollar. No credit card. No commitment. Just better bids.
        </p>
        <a
          href="https://onboarding.bidsquire.com/"
          style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '17px', fontWeight: 600, padding: '18px 48px', borderRadius: '8px', textDecoration: 'none', position: 'relative' }}
        >
          Start Your Free Auction Now
        </a>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '32px', flexWrap: 'wrap', position: 'relative' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(232,197,71,0.5)', fontSize: '14px' }}>✓</span> No credit card required
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(232,197,71,0.5)', fontSize: '14px' }}>✓</span> One full auction analyzed free
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(232,197,71,0.5)', fontSize: '14px' }}>✓</span> Cancel anytime
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(232,197,71,0.5)', fontSize: '14px' }}>✓</span> Exclusive county license
          </span>
        </div>
      </div>
    </div>
  );
}