import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One license. One reseller. Forever. Your tier is set automatically by your county type.",
};

export default function PricingPage() {
  return (
    <div style={{ background: '#0a0d1f' }}>
      {/* Hero */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px 56px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>Pricing</p>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '58px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', marginBottom: '20px', color: '#fff' }}>
          One license.<br /><span style={{ color: '#e8c547' }}>One reseller. Forever.</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '640px', margin: '0 auto 16px', lineHeight: 1.65 }}>
          Your tier is set automatically by your county type. No plans to choose. No upsells. Just your county — locked exclusively to you.
        </p>
        <div style={{ display: 'inline-block', margin: '0 auto 56px', padding: '16px 24px', borderLeft: '3px solid rgba(232,197,71,0.4)', textAlign: 'left', maxWidth: '640px' }}>
          <p style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: '22px', fontWeight: 600, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
            We sell one license per county. Not two. Not ever. Because we know that the moment a second person gets the same data in the same county, neither of them wins.
          </p>
        </div>
      </div>

      {/* No Competition Banner */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(232,197,71,0.12) 0%, rgba(232,197,71,0.04) 100%)', border: '1px solid rgba(232,197,71,0.3)', borderRadius: '16px', padding: '32px 40px', display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ fontSize: '48px', flexShrink: 0 }}>🔒</div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '32px', fontWeight: 700, color: '#e8c547', marginBottom: '8px' }}>Zero Competition. Guaranteed.</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '700px' }}>
              Bidsquire is built on a simple truth: <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>selling the same county to two resellers means only the auctioneer wins.</strong> We refuse to do that. Every county in the US gets exactly one license — and when it&apos;s gone, it&apos;s gone permanently. No waitlists. No exceptions. This isn&apos;t a marketing line. It&apos;s the foundation of how we built this business.
            </p>
          </div>
        </div>
      </div>

      {/* Tier Cards */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>Your tier is determined by your county type</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            {
              tag: 'Rural',
              price: '$99',
              def: 'Lower population density, smaller metro areas, and auction markets with less competition for inventory. These counties often have the best find-to-value ratios — less competition, more hidden gems.',
              examples: 'Examples: most counties outside major metro areas across the Midwest, South, and rural West.',
              cta: 'Check If Your County Is Rural →'
            },
            {
              tag: 'Suburban',
              price: '$199',
              def: 'Mid-size population centers and counties adjacent to major metros. Strong auction volume with a healthy mix of estate sales, storage unit auctions, and online lots.',
              examples: 'Examples: outer counties surrounding cities like Atlanta, Dallas, Phoenix, and similar metros.',
              cta: 'Check If Your County Is Suburban →'
            },
            {
              tag: 'Urban',
              price: '$299',
              def: 'High-density metro counties with the highest auction volume and inventory turnover. The most active resale markets in the country — and the most valuable licenses we sell.',
              examples: 'Examples: Miami-Dade, Cook County (Chicago), Los Angeles County, Kings County (Brooklyn).',
              cta: 'Check If Your County Is Urban →'
            }
          ].map((tier, i) => (
            <div key={i} style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '28px 28px 32px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-block', background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.2)', borderRadius: '4px', padding: '4px 12px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8c547', marginBottom: '20px', alignSelf: 'flex-start' }}>{tier.tag}</span>
              <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
                {tier.price}<span style={{ fontSize: '20px', fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>/mo</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginBottom: '20px', letterSpacing: '0.03em' }}>Billed monthly · Cancel anytime</p>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 0 20px' }} />
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                <strong style={{ color: 'rgba(255,255,255,0.85)', display: 'block', fontSize: '14px', marginBottom: '6px' }}>What makes a county {tier.tag}?</strong>
                {tier.def}
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginTop: '10px' }}>{tier.examples}</p>
              </div>
              <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', fontWeight: 600, padding: '13px 24px', borderRadius: '7px', textDecoration: 'none', textAlign: 'center', marginTop: 'auto' }}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-County */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px', textAlign: 'left' }}>Own Multiple Counties</p>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '38px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.2px', marginBottom: '14px', color: '#fff' }}>
              Want to expand your <span style={{ color: '#e8c547' }}>territory?</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              You can hold licenses in as many counties as you want — as long as they&apos;re available. Each county is priced independently by its type. Some resellers cover an entire region. <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>It all comes down to what&apos;s still open.</strong>
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Jefferson County', badge: 'RURAL', price: '$99/mo' },
                { name: 'Douglas County', badge: 'SUBURBAN', price: '$199/mo' },
                { name: 'Denver County', badge: 'URBAN', price: '$299/mo' }
              ].map((county, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', minWidth: '260px' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                    {county.name} <span style={{ fontSize: '10px', background: 'rgba(232,197,71,0.15)', border: '1px solid rgba(232,197,71,0.3)', color: '#e8c547', padding: '3px 8px', borderRadius: '3px', letterSpacing: '0.06em' }}>{county.badge}</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '18px', fontWeight: 700, color: '#e8c547' }}>{county.price}</span>
                </div>
              ))}
              <div style={{ marginTop: '14px', padding: '12px 16px', background: 'rgba(232,197,71,0.08)', border: '1px solid rgba(232,197,71,0.2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>3 counties · exclusive territory</span>
                <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '24px', fontWeight: 700, color: '#e8c547' }}>$597/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>Everything included in every license</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: '🔍', title: 'Full Auction Analysis', desc: 'Every item in every HiBid auction in your county — photos, descriptions, and comparable sales — analyzed automatically.' },
            { icon: '📊', title: 'Live eBay Comps', desc: 'Real sold prices from identical or similar items on eBay, pulled before you bid so you always know your ceiling.' },
            { icon: '📸', title: 'Post-Win Re-Analysis', desc: 'Upload close-up photos after you win. Bidsquire re-analyzes with maker\'s marks, signatures, and condition to pinpoint exact market value.' },
            { icon: '🏷️', title: 'eBay & Etsy Listing Prices', desc: 'Precise listing prices based on recent sold comps, so you price right the first time and move inventory fast.' },
            { icon: '🔒', title: 'Exclusive County License', desc: 'No one else in your county gets this data. Ever. Your competitive advantage is permanently locked in.' },
            { icon: '🆓', title: 'First Auction Free', desc: 'Try Bidsquire on one full auction before you pay anything. No credit card required to get started.' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px 24px', background: '#0f1128', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
              <div style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
              <div>
                <strong style={{ fontSize: '14px', color: '#fff', display: 'block', marginBottom: '4px' }}>{item.title}</strong>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(160deg, #1a1e40 0%, #0f1128 60%, #0e1020 100%)', borderRadius: '20px', padding: '80px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,197,71,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px', position: 'relative' }}>Check Availability</p>
        <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', marginBottom: '16px', color: '#fff', position: 'relative' }}>
          Is your county <span style={{ color: '#e8c547' }}>still open?</span>
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.65, position: 'relative' }}>
          Counties are selling. Check yours now — it takes 30 seconds and no credit card.
        </p>
        <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', fontWeight: 600, padding: '16px 44px', borderRadius: '8px', textDecoration: 'none', position: 'relative' }}>
          Check Your County Now
        </a>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em', position: 'relative' }}>No credit card required · Your first auction is free</p>
      </div>
    </div>
  );
}
