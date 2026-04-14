import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From auction listing to eBay profit. Bidsquire does the research. You make the profit.",
};

export default function HowItWorksPage() {
  return (
    <div style={{ background: '#0a0d1f' }}>
      {/* Hero */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>How It Works</p>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '62px', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.4px', marginBottom: '20px', color: '#fff' }}>
          From auction listing<br />to <span style={{ color: '#e8c547' }}>eBay profit.</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.65 }}>
          Bidsquire does the research. You make the profit. Know what everything is actually <em>selling for</em> — not some mythical at-auction price, but real-world quick-flip sales. Know before you spend a dollar, or a minute.
        </p>
        <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '15px 40px', borderRadius: '8px', textDecoration: 'none' }}>
          Start Your Free Auction
        </a>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em' }}>No credit card required</p>
      </div>

      {/* Step 1 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(232,197,71,0.4)', background: 'rgba(232,197,71,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 700, color: '#e8c547', flexShrink: 0 }}>1</div>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.7 }}>Scout</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', color: '#fff' }}>
            Paste any <span style={{ color: '#e8c547' }}>HiBid auction URL.</span> We do the rest.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '48px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Find an upcoming auction on HiBid.com, copy the URL, and paste it into Bidsquire. That&apos;s the entire job on your end.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Our AI immediately goes to work — scanning <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>every single item</strong> in that auction. Photos, lot descriptions, condition notes, titles. Every item. Automatically. No clicking through listings one by one.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Most auctions are fully analyzed in minutes.</p>
            <span style={{ display: 'inline-block', background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.25)', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', color: '#e8c547', letterSpacing: '0.04em', marginTop: '8px' }}>Works on any HiBid auction, anywhere in the US</span>
          </div>
          <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px' }}>
            <div style={{ background: '#0a0d1f', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '7px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px' }}>🔗</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>hibid.com/auction/183920/miami-estate-sale-lot-482</span>
              <span style={{ background: '#e8c547', color: '#0f1128', fontSize: '11px', fontWeight: 600, padding: '5px 12px', borderRadius: '4px', whiteSpace: 'nowrap' }}>Analyze</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { name: 'Lot 12 — Victorian writing desk' },
                { name: 'Lot 13 — Vintage Coca-Cola tin signs (3)' },
                { name: 'Lot 14 — Antique oil lamp, brass' },
                { name: 'Lot 15 — Sterling silver flatware set' },
                { name: 'Lot 16 — 1968 Sports Illustrated lot' }
              ].map((item, i) => (
                <div key={i} style={{ background: '#161a36', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '5px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{item.name}</span>
                  <span style={{ fontSize: '11px', color: '#e8c547' }}>✓ Analyzed</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '10px', fontSize: '10px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase' }}>247 items analyzed · 3 min 12 sec</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 60px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
        <span style={{ fontSize: '18px', opacity: 0.3 }}>↓</span>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
      </div>

      {/* Step 2 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(232,197,71,0.4)', background: 'rgba(232,197,71,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 700, color: '#e8c547', flexShrink: 0 }}>2</div>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.7 }}>Bid Smart</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', color: '#fff' }}>
            See <span style={{ color: '#e8c547' }}>real sold prices</span> before you click Bid.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '48px', alignItems: 'start' }}>
          <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Lot 13 — Coca-Cola tin signs</span>
              <span style={{ fontSize: '10px', background: 'rgba(232,197,71,0.12)', border: '1px solid rgba(232,197,71,0.25)', color: '#e8c547', padding: '3px 8px', borderRadius: '3px' }}>eBay COMPS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
              {[
                { title: 'Coca-Cola tin sign 1950s oval — Mar 2025', price: '$87' },
                { title: 'Vintage Coke tin sign lot x3 — Feb 2025', price: '$142' },
                { title: 'Antique soda tin sign embossed — Mar 2025', price: '$64' },
                { title: '1940s Coca-Cola button sign — Jan 2025', price: '$110' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: '#0a0d1f', borderRadius: '5px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{item.title}</span>
                  <span style={{ fontSize: '12px', color: '#fff', fontWeight: 500 }}>{item.price}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(232,197,71,0.08)', border: '1px solid rgba(232,197,71,0.2)', borderRadius: '6px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'rgba(232,197,71,0.7)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Estimated resale range</span>
              <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '22px', fontWeight: 700, color: '#e8c547' }}>$64 — $142</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>For every item in the auction, Bidsquire shows you what identical or similar items have <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>actually sold for on eBay</strong> — not estimates, not guesses, not algorithmically inflated valuations.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Real listings. Real buyers. Real money. Pulled from recent eBay sold data so you know exactly what the market is paying right now.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>You&apos;ll know your ceiling before you bid a dollar. No more guessing. No more winning something and wondering if you overpaid.</p>
            <span style={{ display: 'inline-block', background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.25)', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', color: '#e8c547', letterSpacing: '0.04em', marginTop: '8px' }}>Powered by live eBay comparable sales</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 60px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
        <span style={{ fontSize: '18px', opacity: 0.3 }}>↓</span>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
      </div>

      {/* Step 3 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(232,197,71,0.4)', background: 'rgba(232,197,71,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 700, color: '#e8c547', flexShrink: 0 }}>3</div>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.7 }}>Win &amp; Refine</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', color: '#fff' }}>
            Won something? <span style={{ color: '#e8c547' }}>Now get the real number.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '48px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Auction photos are often low resolution, poorly lit, or shot from too far away. That&apos;s why Bidsquire&apos;s first pass gives you a range, not a pinpoint.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Once you win and have the item in hand, upload your own close-up photos — especially <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>maker&apos;s marks, signatures, stamps, hallmarks, and condition details</strong>. Bidsquire re-analyzes with that clarity.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>A hidden signature or rare maker&apos;s mark can turn a $20 win into a $2,000 sale. You won&apos;t know until you look — and now you&apos;ll know what to look for.</p>
            <span style={{ display: 'inline-block', background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.25)', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', color: '#e8c547', letterSpacing: '0.04em', marginTop: '8px' }}>A hidden mark can 10× the price</span>
          </div>
          <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px' }}>
            <div style={{ border: '2px dashed rgba(232,197,71,0.3)', borderRadius: '10px', padding: '22px', textAlign: 'center', marginBottom: '14px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📸</div>
              <strong style={{ color: 'rgba(232,197,71,0.7)', display: 'block', fontSize: '12px', marginBottom: '5px' }}>Upload your close-up photos</strong>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>Add as many angles as you need — the more detail, the better the analysis.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {['Maker\'s mark ✓', 'Signature ✓', 'Condition ✓', 'Hallmark ✓'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(232,197,71,0.06)', border: '1px solid rgba(232,197,71,0.3)', borderRadius: '4px', padding: '4px 9px', fontSize: '11px', color: '#e8c547' }}>{tag}</span>
              ))}
              {['Date stamp', 'Pattern name', 'Country of origin'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '4px 9px', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 60px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
        <span style={{ fontSize: '18px', opacity: 0.3 }}>↓</span>
        <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
      </div>

      {/* Step 4 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(232,197,71,0.4)', background: 'rgba(232,197,71,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 700, color: '#e8c547', flexShrink: 0 }}>4</div>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.7 }}>List &amp; Profit</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', color: '#fff' }}>
            Price it right on <span style={{ color: '#e8c547' }}>eBay or Etsy.</span> First time.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '48px', alignItems: 'start' }}>
          <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px' }}>
            <div style={{ background: '#0a0d1f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '7px', padding: '14px', marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '7px' }}>eBay listing recommendation</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginBottom: '10px', lineHeight: 1.4 }}>Vintage Coca-Cola Tin Sign Lot x3 — 1940s–1950s Original</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '26px', fontWeight: 700, color: '#e8c547' }}>$124</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', textAlign: 'right', lineHeight: 1.4 }}>Based on 4 recent<br />eBay sold comps</span>
              </div>
            </div>
            <div style={{ background: '#0a0d1f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '7px', padding: '14px', marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '7px' }}>Etsy listing recommendation</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginBottom: '10px', lineHeight: 1.4 }}>Antique Coca-Cola Advertising Signs — Vintage Soda Collectibles Set</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '26px', fontWeight: 700, color: '#e8c547' }}>$138</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', textAlign: 'right', lineHeight: 1.4 }}>Etsy vintage market<br />commands premium</span>
              </div>
            </div>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', letterSpacing: '0.04em', marginTop: '6px' }}>Paid $18 at auction · Recommended list: $124–$138</p>
          </div>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>The most common mistake resellers make isn&apos;t buying the wrong thing — it&apos;s pricing it wrong. Too high and it sits. Too low and you leave money behind.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>Bidsquire gives you <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>precise listing prices based on recent sold comps</strong> — not what people are asking, but what buyers have actually paid. The difference matters.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '14px' }}>List confidently, move inventory fast, and repeat. That&apos;s the whole game.</p>
          </div>
        </div>
      </div>

      {/* Who Uses Bidsquire */}
      <div style={{ background: '#0f1128', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>Who Uses Bidsquire</p>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '44px', fontWeight: 700, letterSpacing: '-0.2px', marginBottom: '36px', color: '#fff' }}>
            Built for resellers who want <span style={{ color: '#e8c547' }}>every possible edge.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { icon: '📦', title: 'eBay & Etsy Resellers', desc: 'You already know how to list and ship. Bidsquire gives you the intelligence to buy smarter and price right the first time.' },
              { icon: '🏠', title: 'Estate Sale & Auction Regulars', desc: 'You\'ve been going for years. Now you go with data. Know what\'s worth bidding on before the auctioneer opens the floor.' },
              { icon: '🔄', title: 'Side Hustle Flippers', desc: 'You\'re building something real. Bidsquire helps you build it faster by cutting the guesswork on every single lot.' },
              { icon: '🏪', title: 'Antique Dealers', desc: 'You know your categories. Bidsquire knows the current market. Together you stop leaving money on the table.' },
              { icon: '📚', title: 'Collectors', desc: 'You buy what you love — but you want to know what it\'s worth. Bidsquire tells you before you bid, not after.' },
              { icon: '🚛', title: 'Storage Unit Buyers', desc: 'Analyze the items you can see through the door before you commit to the unit.' }
            ].map((card, i) => (
              <div key={i} style={{ background: '#161a36', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px 26px' }}>
                <div style={{ fontSize: '26px', marginBottom: '12px' }}>{card.icon}</div>
                <strong style={{ fontSize: '15px', color: '#fff', display: 'block', marginBottom: '8px' }}>{card.title}</strong>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 56px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>Common Questions</p>
        <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '44px', fontWeight: 700, letterSpacing: '-0.2px', marginBottom: '36px', color: '#fff' }}>
          Everything you want <span style={{ color: '#e8c547' }}>to know.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {[
            { q: 'Does it work on all HiBid auctions?', a: 'Yes. Any public HiBid auction in the US. Paste the URL and Bidsquire analyzes every item in that auction regardless of category or location.' },
            { q: 'How current is the eBay data?', a: <>Bidsquire pulls from recent eBay <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>sold listings</strong> — actual completed sales, not asking prices. The data reflects what the market is paying right now.</> },
            { q: 'What if the auction photo quality is poor?', a: 'That\'s exactly what Step 3 is for. The first pass gives you a range. Once you win and photograph the item yourself, Bidsquire re-analyzes to pinpoint the value.' },
            { q: 'How long does the analysis take?', a: 'Most auctions are fully analyzed within a few minutes. Larger auctions may take slightly longer, but results start appearing as each lot is processed.' },
            { q: 'What\'s included in the free trial?', a: 'One complete auction analyzed in full — every item, every comp, every recommendation. No credit card. No commitment.' },
            { q: 'Can I use it for categories I don\'t know?', a: <><strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>That&apos;s exactly the point.</strong> You already know how to hustle. Bidsquire gives you the market intelligence to buy smarter, price right, and move faster than anyone else in your county.</> }
          ].map((faq, i) => (
            <div key={i} style={{ padding: '22px 24px', background: '#0f1128', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>
              <strong style={{ fontSize: '14px', color: '#fff', display: 'block', marginBottom: '8px' }}>{faq.q}</strong>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ background: 'linear-gradient(160deg, #1a1e40 0%, #0f1128 60%, #0e1020 100%)', borderRadius: '20px', padding: '80px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,197,71,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px', position: 'relative' }}>Try It Free</p>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', marginBottom: '16px', color: '#fff', position: 'relative' }}>
            Your first auction<br /><span style={{ color: '#e8c547' }}>is on us.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.65, position: 'relative' }}>
            See real sold prices on every item before you spend a dollar. No credit card. No commitment. Just better bids.
          </p>
          <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', position: 'relative' }}>
            Start Your Free Auction Now
          </a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em', position: 'relative' }}>No credit card required · One full auction analyzed free · Cancel anytime</p>
        </div>
      </div>
    </div>
  );
}
