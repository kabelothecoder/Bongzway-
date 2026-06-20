"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "@/components/ui/Navigation";

const brokers = ["Exness SA", "IFX Brokers", "Vault Markets"] as const;
const accountSizes = [
  { label: "Small Account", sub: "R2,000 / $120", value: "small" },
  { label: "Big Account", sub: "R200,000 / $12,000", value: "big" },
] as const;

type BrokerKey = (typeof brokers)[number];
type SizeKey = "small" | "big";

const metricsData: Record<BrokerKey, Record<SizeKey, { drawdown: number; winRate: number; profitFactor: number; monthlyReturn: number[] }>> = {
  "Exness SA": {
    small: { drawdown: 3.2, winRate: 89, profitFactor: 2.4, monthlyReturn: [4.1, 6.3, 5.8, 7.2, 8.1, 9.4] },
    big: { drawdown: 1.8, winRate: 94, profitFactor: 3.1, monthlyReturn: [6.2, 8.4, 7.9, 10.1, 11.3, 13.7] },
  },
  "IFX Brokers": {
    small: { drawdown: 3.5, winRate: 88, profitFactor: 2.2, monthlyReturn: [3.8, 5.1, 4.9, 6.3, 7.2, 8.0] },
    big: { drawdown: 1.9, winRate: 93, profitFactor: 2.9, monthlyReturn: [5.8, 7.6, 8.1, 9.4, 10.8, 12.1] },
  },
  "Vault Markets": {
    small: { drawdown: 4.1, winRate: 86, profitFactor: 2.1, monthlyReturn: [3.2, 4.8, 5.0, 5.9, 6.7, 7.5] },
    big: { drawdown: 2.2, winRate: 91, profitFactor: 2.9, monthlyReturn: [5.1, 7.0, 7.8, 9.0, 10.2, 11.9] },
  },
};

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

// SVG Radial Progress component
function RadialProgress({ value, max, color, size = 120 }: { value: number; max: number; color: string; size?: number }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#1f1f1f"
        strokeWidth="10"
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
      />
    </svg>
  );
}

export default function MatrixPage() {
  const [broker, setBroker] = useState<BrokerKey>("Exness SA");
  const [accountSize, setAccountSize] = useState<SizeKey>("big");
  const [animated, setAnimated] = useState(true);

  // Re-trigger animation on selection change
  useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(t);
  }, [broker, accountSize]);

  const metrics = metricsData[broker][accountSize];
  const maxBar = Math.max(...metrics.monthlyReturn);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Ambient Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-red-600/10 rounded-full blur-[140px] z-0 pointer-events-none mix-blend-screen"></div>

      {/* Floating TopNavBar */}
      <Navigation />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="font-display-lg text-5xl md:text-7xl tracking-tighter text-white uppercase drop-shadow-2xl">
            The <span className="text-red-600">Matrix Engine</span>
          </h1>
          <p className="font-body-md text-neutral-400 mt-4 max-w-xl mx-auto">
            XAUUSD (Gold) Backtest Simulator. Select your broker and account size to see live performance metrics.
          </p>
        </div>

        {/* Selectors Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Broker Selector */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8">
            <h3 className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-6">
              Select Broker Spread Environment
            </h3>
            <div className="flex flex-col gap-3">
              {brokers.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBroker(b)}
                  className={`w-full px-6 py-4 rounded-full border text-sm font-label-caps uppercase transition-all text-left flex items-center justify-between cursor-pointer
                    ${broker === b
                      ? "bg-red-900/20 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.15)]"
                      : "bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                    }`}
                >
                  <span>{b}</span>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${broker === b ? "bg-red-500 shadow-[0_0_8px_#dc2626]" : "bg-neutral-700"}`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Account Size Selector */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8">
            <h3 className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-6">
              Select Account Size (Equity)
            </h3>
            <div className="flex flex-col gap-3">
              {accountSizes.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setAccountSize(s.value)}
                  className={`w-full px-6 py-4 rounded-full border text-sm font-label-caps uppercase transition-all text-left flex items-center justify-between cursor-pointer
                    ${accountSize === s.value
                      ? "bg-red-900/20 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.15)]"
                      : "bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                    }`}
                >
                  <div>
                    {s.label}
                    <span className="text-neutral-500 ml-3 lowercase font-sans text-xs tracking-normal">{s.sub}</span>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${accountSize === s.value ? "bg-red-500 shadow-[0_0_8px_#dc2626]" : "bg-neutral-700"}`}></div>
                </button>
              ))}

              {/* System Note */}
              <div className="bg-neutral-950 p-5 rounded-[2rem] border border-neutral-800 mt-2">
                <div className="font-label-caps text-[10px] text-red-500 uppercase mb-2">System Note</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Larger equity pools allow aggressive scaling with minimal risk. Smaller accounts see higher relative drawdown due to XAUUSD margin requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === BEAUTIFUL CHARTS SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Win Rate — Radial Chart */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8 flex flex-col items-center text-center">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-6">Win Rate (XAUUSD)</div>
            <div className="relative flex items-center justify-center mb-4">
              <RadialProgress value={animated ? metrics.winRate : 0} max={100} color="#22c55e" size={140} />
              <div className="absolute flex flex-col items-center">
                <span className="font-data-point text-4xl text-white">{metrics.winRate}<span className="text-xl text-green-500">%</span></span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <div className="bg-green-900/20 border border-green-500/30 rounded-full px-3 py-1 text-[10px] font-label-caps text-green-500 uppercase">
                {metrics.winRate >= 90 ? "Elite" : "Strong"}
              </div>
              <div className="bg-neutral-800 border border-neutral-700 rounded-full px-3 py-1 text-[10px] font-label-caps text-neutral-400 uppercase">
                Gold (XAUUSD)
              </div>
            </div>
          </div>

          {/* Max Drawdown — Gauge */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8 flex flex-col items-center text-center">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-6">Max Drawdown</div>
            <div className="relative flex items-center justify-center mb-4">
              <RadialProgress value={animated ? metrics.drawdown : 0} max={10} color={metrics.drawdown < 3 ? "#22c55e" : "#f59e0b"} size={140} />
              <div className="absolute flex flex-col items-center">
                <span className="font-data-point text-4xl text-white">{metrics.drawdown}<span className="text-xl text-neutral-400">%</span></span>
              </div>
            </div>
            {/* Gauge scale */}
            <div className="w-full mt-2">
              <div className="flex justify-between text-[9px] text-neutral-600 font-label-caps uppercase mb-1">
                <span>0% Safe</span><span>5% Moderate</span><span>10% High</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${animated ? (metrics.drawdown / 10) * 100 : 0}%`,
                    background: metrics.drawdown < 3 ? "#22c55e" : "#f59e0b"
                  }}
                ></div>
              </div>
            </div>
            <div className={`mt-4 rounded-full px-3 py-1 text-[10px] font-label-caps uppercase border ${metrics.drawdown < 3 ? "bg-green-900/20 border-green-500/30 text-green-500" : "bg-yellow-900/20 border-yellow-500/30 text-yellow-500"}`}>
              {metrics.drawdown < 3 ? "Low Risk" : "Moderate Risk"}
            </div>
          </div>

          {/* Profit Factor */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8 flex flex-col items-center text-center">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-6">Profit Factor</div>
            <div className="relative flex items-center justify-center mb-4">
              <RadialProgress value={animated ? metrics.profitFactor : 0} max={5} color="#dc2626" size={140} />
              <div className="absolute flex flex-col items-center">
                <span className="font-data-point text-4xl text-red-500">{metrics.profitFactor.toFixed(1)}</span>
                <span className="text-[10px] text-neutral-600 font-label-caps uppercase">ratio</span>
              </div>
            </div>
            {/* Reference lines */}
            <div className="w-full space-y-2 mt-2">
              {[
                { label: "Break Even", value: 1.0, color: "neutral" },
                { label: "Good", value: 1.5, color: "yellow" },
                { label: "Elite (Current)", value: metrics.profitFactor, color: "red" },
              ].map((ref) => (
                <div key={ref.label} className="flex items-center justify-between">
                  <span className="text-[10px] font-label-caps text-neutral-500 uppercase">{ref.label}</span>
                  <span className={`text-xs font-data-point ${ref.color === "red" ? "text-red-500" : "text-neutral-400"}`}>{ref.value.toFixed(1)}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Returns Bar Chart */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-8 md:p-10">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="font-headline-lg text-2xl text-white uppercase tracking-tighter">Monthly Returns</h2>
              <p className="text-neutral-500 text-sm font-body-md mt-1">{broker} · {accountSize === "big" ? "Big Account" : "Small Account"} · XAUUSD</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-900/40 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-label-caps text-xs text-red-400 uppercase">Live Sim</span>
            </div>
          </div>

          <div className="flex items-end gap-3 h-48">
            {metrics.monthlyReturn.map((val, idx) => {
              const heightPct = animated ? (val / maxBar) * 100 : 0;
              const isLast = idx === metrics.monthlyReturn.length - 1;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <span className={`font-data-point text-sm transition-all ${isLast ? "text-red-500" : "text-neutral-400"}`}>
                    {val}%
                  </span>
                  <div className="w-full flex items-end" style={{ height: "140px" }}>
                    <div
                      className={`w-full rounded-t-full transition-all duration-700 ${isLast
                          ? "bg-gradient-to-t from-red-700 to-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                          : "bg-gradient-to-t from-neutral-700 to-neutral-600"
                        }`}
                      style={{
                        height: `${heightPct}%`,
                        transitionDelay: `${idx * 60}ms`
                      }}
                    ></div>
                  </div>
                  <span className="font-label-caps text-[10px] text-neutral-600 uppercase">{months[idx]}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="text-center">
              <div className="font-label-caps text-[10px] text-neutral-500 uppercase mb-1">6-Month Avg</div>
              <div className="font-data-point text-xl text-white">
                {(metrics.monthlyReturn.reduce((a, b) => a + b, 0) / metrics.monthlyReturn.length).toFixed(1)}%
              </div>
            </div>
            <div className="text-center">
              <div className="font-label-caps text-[10px] text-neutral-500 uppercase mb-1">Peak Month</div>
              <div className="font-data-point text-xl text-red-500">{maxBar}%</div>
            </div>
            <div className="text-center">
              <div className="font-label-caps text-[10px] text-neutral-500 uppercase mb-1">6-Month Total</div>
              <div className="font-data-point text-xl text-green-500">
                +{metrics.monthlyReturn.reduce((a, b) => a + b, 0).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="text-center mt-12">
          <h2 className="font-headline-lg text-4xl uppercase tracking-tighter text-white">
            Core <span className="text-red-500">Strategy</span>
          </h2>
          <p className="font-body-md text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Alpha-ScalpStrike V3 is an institutional-grade algorithmic system that analyzes market structure, liquidity zones, and momentum anomalies to execute high-probability entries with strict risk management.
          </p>
        </div>

        {/* Features Section */}
        <div className="text-center mt-12 mb-8">
          <h2 className="font-headline-lg text-4xl sm:text-5xl uppercase tracking-tighter text-white">
            CHART <span className="text-red-500">SCANNER</span>
          </h2>
          <p className="font-body-md text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A built-in feature of the Alpha-ScalpStrike V3 robot — upload a screenshot of any trading chart and let it read the structure, candles and momentum, then return a possible direction for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            <h3 className="text-xl font-headline-lg text-white uppercase">Upload Screenshot</h3>
            <p className="text-neutral-400 text-sm">Drop a chart image from any broker or platform.</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h6v6H3z"></path><path d="M15 3h6v6h-6z"></path><path d="M15 15h6v6h-6z"></path><path d="M3 15h6v6H3z"></path></svg>
            </div>
            <h3 className="text-xl font-headline-lg text-white uppercase">Smart Pattern Scan</h3>
            <p className="text-neutral-400 text-sm">The robot reads structure, candles and market momentum.</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            </div>
            <h3 className="text-xl font-headline-lg text-white uppercase">Possible Direction</h3>
            <p className="text-neutral-400 text-sm">Receive a clear BUY or SELL signal.</p>
          </div>
        </div>

        {/* Telegram CTA */}
        <div className="text-center">
          <a
            href="https://t.me/+Zz56bI7DyHs1OGRk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2AABEE]/10 border border-[#2AABEE]/30 rounded-full px-8 py-4 hover:bg-[#2AABEE]/20 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.4 13.955l-2.93-.916c-.637-.203-.65-.637.136-.943l11.443-4.41c.53-.194.994.13.845.535z" /></svg>
            </div>
            <div className="text-left">
              <div className="font-label-caps text-sm text-white uppercase">Join Free Telegram Group</div>
              <div className="font-label-caps text-[10px] text-neutral-500 uppercase tracking-wider">Watch the bot trade live in real time</div>
            </div>
          </a>
        </div>

        {/* Footer Credit */}
        <div className="pb-8 text-center">
          <div className="font-label-caps text-[10px] text-neutral-700 uppercase tracking-widest">
            Developed by{" "}
            <a href="https://www.instagram.com/algokabs/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              AlgoKabs
            </a>
            {" "}· <a href="https://www.instagram.com/bongzway/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">@bongzway</a>
          </div>
        </div>

      </div>
    </div>
  );
}
