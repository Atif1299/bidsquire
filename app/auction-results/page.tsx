import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Auction Results",
  description: "Listing after listing. Sale after sale. Real items from real auctions — bought with Bidsquire, priced with Bidsquire, sold on eBay.",
};

const tableData = [
  { item: "1975 Mego Wonder Woman Doll", paid: "$2", sold: "$35", margin: "1,650%", high: true },
  { item: "Garfield & Campbell Kids Soup Bowls (1978/1993)", paid: "$1", sold: "$14.50", margin: "1,350%", high: true },
  { item: "Robot Space Trooper", paid: "$2", sold: "$26", margin: "1,200%", high: true },
  { item: "Armstrong Music Portable Record Player (antique)", paid: "$5", sold: "$110", margin: "2,100%", high: true },
  { item: "Pot Metal Egyptian Soldier Statue", paid: "$11", sold: "$100", margin: "809%", high: true },
  { item: "Antique Soap Stone in Leather Satchel", paid: "$3", sold: "$25", margin: "733%", high: true },
  { item: "Grinch Car & More (holiday collectibles lot)", paid: "$25", sold: "$93", margin: "272%", high: true },
  { item: "1869 Holy Bible (as-found)", paid: "$4", sold: "$55", margin: "1,275%", high: true },
  { item: "Antique Dresser Box", paid: "$7", sold: "$60", margin: "757%", high: true },
  { item: "Pioneer AM/FM 8-Track Stereo (powers up)", paid: "$27", sold: "$80", margin: "196%", high: true },
  { item: "Rockwell Saw", paid: "$11", sold: "$60", margin: "445%", high: true },
  { item: "Vintage All Glass Teapot", paid: "$7", sold: "$40", margin: "471%", high: true },
  { item: "Glass Lamp Shade + Metal Base (two separate pieces)", paid: "$20", sold: "$75", margin: "275%", high: true },
  { item: "Personal Memoirs of U.S. Grant Vol. I & II", paid: "$80", sold: "$340", margin: "325%", high: true },
  { item: "Oak Machinist Chest with Key (20×13×8.5)", paid: "$155", sold: "$250", margin: "61%", high: false },
  { item: "Ralph Lauren Pourers", paid: "$16", sold: "$40", margin: "150%", high: true },
  { item: "Bosch Planer 3258", paid: "$4", sold: "$30", margin: "650%", high: true },
  { item: "Realistic CB-Phone 40", paid: "$5", sold: "$27", margin: "440%", high: true },
  { item: "Cast Iron Cooking Pot with Handle", paid: "$9", sold: "$27", margin: "200%", high: true },
  { item: "Dukes of Hazzard Folding Tray", paid: "$5", sold: "$20", margin: "300%", high: true },
  { item: "Victorian Village Collectibles — Olde Town Village", paid: "$6", sold: "$15", margin: "150%", high: false },
  { item: "Victorian Village Collectibles — Train Station", paid: "$6", sold: "$15", margin: "150%", high: false },
  { item: "Kodak Instamatic 100 Outfit", paid: "$11", sold: "$30", margin: "173%", high: true },
  { item: "Realistic TRC-24C CB Radio with Mic", paid: "$2", sold: "$7", margin: "250%", high: true },
  { item: "Artist Signed Carved Rainbow Trout Decoy (15\")", paid: "$35", sold: "$70", margin: "100%", high: true },
  { item: "8 Retro Cartoon Character Glasses", paid: "$13", sold: "$42.50", margin: "227%", high: true },
  { item: "Wade Ark England Figurines (Made in England)", paid: "$17", sold: "$35", margin: "106%", high: true },
  { item: "Signed Italy Dog Head Ceramic Lamp", paid: "$35", sold: "$35", margin: "0%", high: false },
  { item: "Ken Harris Hand Painted Duck Decoy", paid: "$62.50", sold: "$96.50", margin: "54%", high: false },
  { item: "Vintage Waffle Maker (works)", paid: "$2", sold: "$20", margin: "900%", high: true },
  { item: "Antique Oak 4-Drawer Dresser (40×17×32)", paid: "$40", sold: "$60", margin: "50%", high: false },
  { item: "Hallmark Christmas Lot", paid: "$17", sold: "$25", margin: "47%", high: false },
  { item: "1999 Painted 1oz Silver Eagle .999 Fine Silver", paid: "$32", sold: "$50", margin: "56%", high: false }
];

export default function AuctionResultsPage() {
  return (
    <div style={{ background: '#0a0d1f' }}>
      {/* Hero */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px 56px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>Real Results · Real Numbers</p>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '62px', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.4px', marginBottom: '20px', color: '#fff' }}>
          Listing after listing.<br /><span style={{ color: '#e8c547' }}>Sale after sale.</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '620px', margin: '0 auto 16px', lineHeight: 1.65 }}>
          These are real items from real auctions — bought with Bidsquire, priced with Bidsquire, sold on eBay. Every number here is actual, not estimated.
        </p>
        <div style={{ display: 'inline-block', margin: '0 auto 48px', padding: '16px 24px', borderLeft: '3px solid rgba(232,197,71,0.4)', textAlign: 'left', maxWidth: '620px' }}>
          <p style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: '21px', fontWeight: 600, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
            We didn&apos;t cherry-pick the wins. This is the inventory — the whole thing, lot by lot. You&apos;ll see the small margins and the big ones. That&apos;s how real reselling works.
          </p>
        </div>
        <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '15px 40px', borderRadius: '8px', textDecoration: 'none' }}>
          Start Your Free Auction
        </a>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em' }}>No credit card required</p>
      </div>

      {/* Stats Bar */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <div style={{ background: '#0f1128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          {[
            { num: '372%', label: 'Blended avg margin' },
            { num: '1,650%', label: 'Best single item' },
            { num: '$2', label: 'Lowest buy-in (turned $35)' },
            { num: '$80', label: 'Highest buy-in (turned $340)' },
            { num: '30+', label: 'Items tracked below' }
          ].map((stat, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '48px', fontWeight: 700, color: '#e8c547', lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.08)' }}></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 56px', padding: '0 56px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>All transactions · paid → sold · real eBay prices</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'left', fontWeight: 500 }}>Item</th>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'right', fontWeight: 500 }}>Paid</th>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'right', fontWeight: 500 }}>Sold</th>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'center', fontWeight: 500 }}>Margin</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 16px', fontSize: '14px', color: 'rgba(255,255,255,0.75)', maxWidth: '400px' }}>{row.item}</td>
                <td style={{ padding: '14px 16px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'right', whiteSpace: 'nowrap' }}>{row.paid}</td>
                <td style={{ padding: '14px 16px', fontSize: '14px', color: '#fff', fontWeight: 500, textAlign: 'right', whiteSpace: 'nowrap' }}>{row.sold}</td>
                <td style={{ padding: '14px 16px', fontSize: '14px', textAlign: 'center' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    background: row.high ? 'rgba(232,197,71,0.12)' : 'rgba(255,255,255,0.06)',
                    border: row.high ? '1px solid rgba(232,197,71,0.25)' : '1px solid rgba(255,255,255,0.12)',
                    color: row.high ? '#e8c547' : 'rgba(255,255,255,0.6)'
                  }}>{row.margin}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Final CTA */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px 80px' }}>
        <div style={{ background: 'linear-gradient(160deg, #1a1e40 0%, #0f1128 60%, #0e1020 100%)', borderRadius: '20px', padding: '80px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,197,71,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px', position: 'relative' }}>Your turn</p>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.3px', marginBottom: '16px', color: '#fff', position: 'relative' }}>
            These are real numbers.<br /><span style={{ color: '#e8c547' }}>Yours can be too.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.65, position: 'relative' }}>
            One free auction. Every item analyzed. Real sold prices before you bid a dollar.
          </p>
          <a href="https://onboarding.bidsquire.com/" style={{ display: 'inline-block', background: '#e8c547', color: '#0f1128', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', fontWeight: 600, padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', position: 'relative' }}>
            Check Your County Now
          </a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', letterSpacing: '0.03em', position: 'relative' }}>No credit card required · First auction free · Cancel anytime</p>
        </div>
      </div>
    </div>
  );
}
