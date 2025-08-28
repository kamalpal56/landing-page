import React, { useEffect, useState } from "react";

const Check = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
    <path d="M7 12.5l3.2 3.2L17.5 8.3" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUp = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 5l7 7h-4v7H9v-7H5l7-7z" fill="#16a34a" />
  </svg>
);

const ArrowDown = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 19l-7-7h4V5h6v7h4l-7 7z" fill="#dc2626" />
  </svg>
);

export default function TradingConditions({
  title = "Top trading conditions",
  blurb = "Trade our best conditions yet, including some of the market's most competitive spreads!",
  features = [
    "Leverage up to 1:1000",
    "Forex typical spreads from 0 pips (EURUSD), micro lots and fractional shares",
    "Stocks CFDs — commission‑free*",
    "Free real‑time charts, market news and research",
    "500+ CFDs on currencies, energies, metals, indices, stocks & ETFs",
  ],
  initialRows = [
    { symbol: "GER40", bid: 24125.59, ask: 24126.19, dir: "down" },
    { symbol: "EURUSD", bid: 1.15929, ask: 1.15930, dir: "up" },
    { symbol: "GBPUSD", bid: 1.34377, ask: 1.34383, dir: "down" },
    { symbol: "USDJPY", bid: 148.059, ask: 148.062, dir: "up" },
    { symbol: "GOLD", bid: 3376.32, ask: 3376.50, dir: "down" },
    { symbol: "USA30", bid: 45438.90, ask: 45441.10, dir: "down" },
    { symbol: "BRENT", bid: 66.83, ask: 66.86, dir: "down" },
  ],
  footnote = "Prices above are indicative only — Data from Zero.MT5",
  onCtaClick = () => {},
}) {
  const [rows, setRows] = useState(initialRows);

  // Randomly fluctuate values every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRows((prev) =>
        prev.map((r) => {
          const delta = (Math.random() - 0.5) * (r.symbol.includes("USD") ? 0.001 : 2);
          const newBid = parseFloat(r.bid) + delta;
          const newAsk = parseFloat(r.ask) + delta;
          const dir = delta >= 0 ? "up" : "down";
          return {
            ...r,
            bid: parseFloat(newBid.toFixed(5)),
            ask: parseFloat(newAsk.toFixed(5)),
            dir,
          };
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tc-wrap">
      <div className="tc-card">
        <div className="tc-grid">
          {/* Left side */}
          <div>
            <h2 className="tc-title">{title}</h2>
            <p className="tc-desc">{blurb}</p>

            <ul className="tc-list">
              {features.map((f, i) => (
                <li key={i} className="tc-item">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="tc-cta" onClick={onCtaClick}>TRY FREE ON DEMO</button>
          </div>

          {/* Right side */}
          <div>
            <div className="tc-table">
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Bid</th>
                    <th>Ask</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td className="tc-symbol">
                        {r.dir === "up" ? <ArrowUp /> : <ArrowDown />} {r.symbol}
                      </td>
                      <td>{r.bid}</td>
                      <td>{r.ask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="tc-foot">{footnote}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --muted: #f6f7f9;
          --text: #0f172a;
          --muted-foreground: #6b7280;
        }
        .tc-wrap { max-width: 1200px; margin: 0 auto; padding: 24px; }
        .tc-card { background: #fff; border-radius: 18px; box-shadow: 0 18px 50px rgba(16,24,40,0.08); overflow: hidden; }
        .tc-grid { display: grid; gap: 36px; padding: 36px; grid-template-columns: 1fr; }
        @media (min-width: 960px) {
          .tc-grid { grid-template-columns: 1.05fr 1fr; padding: 48px; gap: 48px; }
        }
        .tc-title { font-size: clamp(28px, 4vw, 46px); font-weight: 700; line-height: 1.1; color: var(--text); letter-spacing: -0.02em; }
        .tc-desc { margin-top: 10px; color: var(--muted-foreground); font-size: 16px; }
        .tc-list { margin-top: 18px; display: grid; gap: 12px; }
        .tc-item { display: grid; grid-template-columns: 24px 1fr; gap: 12px; align-items: start; color: #111827; }
        .tc-cta { margin-top: 22px; background: #22c55e; color: #fff; border: 0; padding: 12px 18px; border-radius: 10px; font-weight: 600; cursor: pointer; box-shadow: 0 6px 16px rgba(34,197,94,0.3); }
        .tc-cta:hover { filter: brightness(0.98); }
        .tc-table { border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; }
        .tc-table table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .tc-table thead { background: var(--muted); color: #6b7280; text-transform: none; }
        .tc-table th, .tc-table td { padding: 14px 16px; text-align: left; }
        .tc-table tbody tr + tr { border-top: 1px solid #eef2f6; }
        .tc-symbol { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; }
        .tc-foot { background: #fafafa; color: #6b7280; font-size: 12px; padding: 10px 16px; }
      `}</style>
    </div>
  );
}

export function DemoTradingConditions() {
  return <TradingConditions />;
}
