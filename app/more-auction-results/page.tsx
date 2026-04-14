import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Real Auction Results",
  description: "Still more listings. Still real margins. More items from the same inventory — bought at auction, analyzed with Bidsquire, priced for resale.",
};

const tableData = [
  { item: "Nightmare Before Christmas Figurine Gift Set", paid: "$6", sold: "$28", margin: "367%", high: true },
  { item: "Hopalong Cassidy Child's Binoculars", paid: "$8", sold: "$45", margin: "463%", high: true },
  { item: "Ballistic Missile Tin Toy", paid: "$25", sold: "$110", margin: "340%", high: true },
  { item: "8 Charlie Brown Character Glasses", paid: "$24", sold: "$24", margin: "0%", high: false },
  { item: "1969 Matchbox Case & Cars of Yesteryear", paid: "$21", sold: "$85", margin: "305%", high: true },
  { item: "Box of Vintage Lesney/Tootsie Toys", paid: "$3", sold: "$22", margin: "633%", high: true },
  { item: "Diecast 1957 Chevy Nomad & Ford Adv. Bank (1:24 scale)", paid: "$6", sold: "$28", margin: "367%", high: true },
  { item: "Wicker Fishing Creel Trout Basket", paid: "$14", sold: "$42", margin: "200%", high: true },
  { item: "Metal 8-Slot Milk Bottle Carrier", paid: "$13", sold: "$38", margin: "192%", high: true },
  { item: "Star Trek Trading Cards & Action Figure (Skybox 1993, factory sealed)", paid: "$6", sold: "$35", margin: "483%", high: true },
  { item: "Pilot 7×35 Vintage Binoculars in Case", paid: "$10", sold: "$38", margin: "280%", high: true },
  { item: "Binolux 8×50 Vintage Binoculars in Case", paid: "$9", sold: "$32", margin: "256%", high: true },
  { item: "Group of Vintage Cameras & Slide Viewer", paid: "$8", sold: "$35", margin: "338%", high: true },
  { item: "Vintage Autograph Books & Postcards", paid: "$5", sold: "$22", margin: "340%", high: true },
  { item: "Hall Jewel Tea / Autumn Leaf Pottery & Tray", paid: "$30", sold: "$85", margin: "183%", high: true },
  { item: "Indianapolis Colts Zippo Lighter", paid: "$8", sold: "$28", margin: "250%", high: true },
  { item: "Art Metal Chopper Motorcycle (7\" tall, 13\" long)", paid: "$21", sold: "$55", margin: "162%", high: true },
  { item: "KitchenAid Stand Mixer with Attachments", paid: "$41", sold: "$95", margin: "132%", high: true },
  { item: "Grinch Holiday Collectibles — Christmas lot", paid: "$6", sold: "$28", margin: "367%", high: true },
  { item: "Harmony Kingdom Trinket Boxes", paid: "$18", sold: "$55", margin: "206%", high: true },
  { item: "Gone with the Wind Lamp", paid: "$25", sold: "$70", margin: "180%", high: true },
  { item: "1800s School Pamphlets & Ephemera", paid: "$3", sold: "$22", margin: "633%", high: true },
  { item: "Early German Print (framed)", paid: "$47.50", sold: "$130", margin: "174%", high: true },
  { item: "Antique Metal Floor Lamp", paid: "$42.50", sold: "$95", margin: "124%", high: true },
  { item: "Iron, Marble Victorian Lamp Stand (with provenance)", paid: "$23", sold: "$75", margin: "226%", high: true },
  { item: "Abe Lincoln Head Bookends", paid: "$7", sold: "$32", margin: "357%", high: true },
  { item: "Cobalt Blue 9.5\" Vase with Applied Handles", paid: "$13", sold: "$45", margin: "246%", high: true },
  { item: "2 Crockery Whiskey Bottles, London", paid: "$13", sold: "$42", margin: "223%", high: true },
  { item: "Antique Roller Skates", paid: "$3", sold: "$18", margin: "500%", high: true },
  { item: "Deco Handled Desk Light", paid: "$22", sold: "$65", margin: "195%", high: true },
  { item: "Hand Drills & Bits (antique)", paid: "$12", sold: "$38", margin: "217%", high: true },
  { item: "Early 4-Poster 3/4 Bed with Provenance", paid: "$5", sold: "$45", margin: "800%", high: true },
  { item: "Antique Cromwell Record Player", paid: "$2", sold: "$22", margin: "1,000%", high: true },
  { item: "Tudor Tru-Action Electric Football Game", paid: "$3", sold: "$35", margin: "1,067%", high: true },
  { item: "Erector Set Pieces (lot)", paid: "$2", sold: "$18", margin: "800%", high: true },
  { item: "Assorted Baseball Cards — Hank Aaron, Roger Maris, Brooks Robinson, Roberto Clemente & more (22 pcs)", paid: "$32.50", sold: "$120", margin: "269%", high: true },
  { item: "Slot Milk Bottle Carrier (metal, 8-slot)", paid: "$1", sold: "$22", margin: "2,100%", high: true },
  { item: "Vintage Autograph Books & Postcards", paid: "$5", sold: "$20", margin: "300%", high: true },
  { item: "Early Tin Noise Maker + Blondie Cards", paid: "$2", sold: "$18", margin: "800%", high: true },
  { item: "4 Lead Soldiers", paid: "$4", sold: "$22", margin: "450%", high: true },
  { item: "Antique Glove Box", paid: "$18", sold: "$55", margin: "206%", high: true },
  { item: "2 Antique Figures (early)", paid: "$2", sold: "$16", margin: "700%", high: true }
];

export default function MoreAuctionResultsPage() {
  return (
    <div style={{ background: '#0a0d1f' }}>
      {/* Hero */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 56px 56px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8c547', opacity: 0.75, marginBottom: '18px' }}>More Real Results · More Real Numbers</p>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '62px', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.4px', marginBottom: '20px', color: '#fff' }}>
          Still more listings.<br /><span style={{ color: '#e8c547' }}>Still real margins.</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '620px', margin: '0 auto 16px', lineHeight: 1.65 }}>
          More items from the same inventory — bought at auction, analyzed with Bidsquire, priced for resale. Every estimated sale price is based on real eBay comparable sales data.
        </p>
        <div style={{ display: 'inline-block', margin: '0 auto 48px', padding: '16px 24px', borderLeft: '3px solid rgba(232,197,71,0.4)', textAlign: 'left', maxWidth: '620px' }}>
          <p style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: '21px', fontWeight: 600, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
            Not every item is a home run. But knowing what everything is worth before you bid means even the modest wins are intentional — not accidents.
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
            { num: '35+', label: 'Additional items below' },
            { num: '2,000%', label: 'Best margin this batch' },
            { num: '$1', label: 'Lowest buy-in' },
            { num: '$47', label: 'Highest buy-in' },
            { num: '68+', label: 'Total items across both pages' }
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
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>All transactions · paid → estimated sale · based on eBay comps</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'left', fontWeight: 500 }}>Item</th>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'right', fontWeight: 500 }}>Paid</th>
              <th style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', padding: '0 16px 12px', textAlign: 'right', fontWeight: 500 }}>Est. Sale</th>
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
