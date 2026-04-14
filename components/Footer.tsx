export function Footer() {
  return (
    <footer style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.3)' }}>
        Bid<span style={{ color: 'rgba(232,197,71,0.5)' }}>squire</span>
      </div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
        © {new Date().getFullYear()} Bidsquire. All rights reserved.
      </div>
    </footer>
  );
}
