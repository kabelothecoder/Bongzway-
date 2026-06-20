import Image from "next/image";
import Link from "next/link";
import TradingViewWidget from "@/components/ui/TradingViewWidget";
import Navigation from "@/components/ui/Navigation";

export default function Home() {
  return (
    <>
      {/* Ambient Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>

      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[140px] z-0 pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-neutral-800/50 rounded-full blur-[140px] z-0 pointer-events-none"></div>
      
      {/* Floating TopNavBar */}
      <Navigation />

      <main className="flex-grow z-10 relative pt-32">
        {/* Cinematic Hero Section - Enforced massive oval border-radius */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-neutral-900/30 backdrop-blur-sm rounded-[3rem] border border-neutral-800/50 mx-4 md:mx-12 mt-4 mb-24">
          
          <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex flex-col-reverse md:flex-row items-center h-full">
            {/* Left Content */}
            <div className="w-full md:w-[60%] text-center md:text-left flex flex-col items-center md:items-start space-y-6 relative z-20 mt-8 md:mt-0 py-12 md:py-16">
              <div className="inline-flex items-center gap-2.5 border border-neutral-700/60 bg-neutral-900/70 rounded-full px-4 py-1.5 font-label-caps text-[10px] md:text-xs text-neutral-300 uppercase mb-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Robot is Live — Trading Now
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1] text-white uppercase drop-shadow-2xl">
                AUTOMATE<br/>
                YOUR EDGE.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">TRADE LIKE AN INSTITUTION.</span>
              </h1>
              
              <p className="font-body-md text-neutral-300 max-w-[550px] mx-auto md:mx-0 text-base sm:text-lg leading-relaxed">
                Deploy elite algorithmic trading systems designed for absolute precision. Maximize win rates, eliminate emotional trading, and execute with robotic efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto">
                <Link href="/checkout" className="bg-red-600 text-white font-label-caps text-sm px-8 py-4 rounded-full uppercase hover:bg-red-700 transition-all w-full sm:w-auto text-center shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500 inline-block">
                  Get Started
                </Link>
                <Link href="/robot-results" className="bg-neutral-900/80 backdrop-blur-sm border border-red-900/50 text-white font-label-caps text-sm px-8 py-4 rounded-full uppercase hover:border-red-500 hover:text-red-400 transition-colors w-full sm:w-auto text-center inline-block">
                  View Live Results
                </Link>
              </div>

              {/* Platform Stack Pill */}
              <div className="pt-8">
                <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-md rounded-full px-5 py-2.5">
                  <span className="text-[10px] sm:text-xs font-label-caps text-neutral-400 uppercase tracking-widest mr-1">Supported on</span>
                  
                  {/* Windows SVG */}
                  <div className="flex items-center gap-1.5 text-neutral-200">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    <span className="text-[9px] sm:text-[10px] font-label-caps uppercase">Win</span>
                  </div>

                  <div className="w-[1px] h-3 bg-neutral-700"></div>

                  {/* Android SVG */}
                  <div className="flex items-center gap-1.5 text-neutral-200">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    <span className="text-[9px] sm:text-[10px] font-label-caps uppercase">Android</span>
                  </div>

                  <div className="w-[1px] h-3 bg-neutral-700"></div>

                  {/* Apple SVG */}
                  <div className="flex items-center gap-1.5 text-neutral-200">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2.04C10.5 2.04 9.36 3.1 9.36 4.54c0 .08 0 .16.01.24-.01 0-.01 0-.01.01-1.2.04-2.43.68-3.23 1.76-1.12 1.52-1.39 3.65-.68 5.48.74 1.88 2.06 3.32 3.36 4.88 1.1 1.34 2.37 2.92 3.86 2.87 1.43-.05 1.94-.92 3.65-.92 1.7 0 2.16.92 3.68.89 1.54-.03 2.66-1.46 3.75-2.83 1.25-1.55 1.75-3.04 1.78-3.12-.04-.02-2.93-1.11-2.96-4.42-.03-2.77 2.27-4.11 2.38-4.18-1.31-1.9-3.35-2.16-4.07-2.22-1.74-.17-3.41 1.03-4.31 1.03-.9 0-2.26-1.02-3.68-1.01zM14.9 0c-.8.03-1.85.53-2.4 1.19-.48.56-.91 1.48-.77 2.37.89.07 1.83-.43 2.39-1.09.52-.61.99-1.58.82-2.47-.01 0-.03 0-.04 0z"/></svg>
                    <span className="text-[9px] sm:text-[10px] font-label-caps uppercase">iOS</span>
                  </div>

                </div>
              </div>

              {/* Mini TradingView Widget */}
              <div className="pt-6 w-full flex justify-center md:justify-start">
                <div className="bg-neutral-900/80 border border-neutral-800/50 rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-[350px]">
                  <TradingViewWidget />
                </div>
              </div>

            </div>

            {/* Right Content — Robot Hero Image */}
            <div className="w-[80%] sm:w-[60%] md:w-[50%] h-[300px] sm:h-[400px] md:h-[115%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center md:justify-end mb-4 md:mb-0 pointer-events-none mt-12 md:mt-0">
              <div className="relative w-full h-full" style={{ maskImage: "linear-gradient(to left, black 55%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 55%, transparent 100%)" }}>
                <img 
                  className="w-full h-full object-contain md:object-right filter drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]" 
                  alt="Specter X Pro+ Robot" 
                  src="/images/robot-hero.png"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 md:px-12 container mx-auto max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-4xl sm:text-5xl uppercase tracking-tighter text-white">
              CHART <span className="text-red-500">SCANNER</span>
            </h2>
            <p className="font-body-md text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              A built-in feature of the Alpha-ScalpStrike V3 robot — upload a screenshot of any trading chart and let it read the structure, candles and momentum, then return a possible direction for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 md:px-12 container mx-auto max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-4xl sm:text-5xl uppercase tracking-tighter text-white">
              HOW IT <span className="text-red-500">WORKS</span>
            </h2>
            <p className="font-body-md text-neutral-400 mt-4">
              From purchase to profit — in four simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-2 relative overflow-hidden group hover:border-red-500/30 transition-colors">
              <div className="absolute right-[-10px] top-[-10px] text-[8rem] font-black text-neutral-800/20 leading-none group-hover:text-red-900/10 transition-colors">01</div>
              <div className="text-red-500 font-label-caps text-xs uppercase mb-2">Step 01</div>
              <h3 className="text-xl font-headline-lg text-white uppercase relative z-10">Choose Your Version</h3>
              <p className="text-neutral-400 text-sm relative z-10">Pick the copy that matches your device — Android, iOS or PC.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-2 relative overflow-hidden group hover:border-red-500/30 transition-colors">
              <div className="absolute right-[-10px] top-[-10px] text-[8rem] font-black text-neutral-800/20 leading-none group-hover:text-red-900/10 transition-colors">02</div>
              <div className="text-red-500 font-label-caps text-xs uppercase mb-2">Step 02</div>
              <h3 className="text-xl font-headline-lg text-white uppercase relative z-10">Make Payment</h3>
              <p className="text-neutral-400 text-sm relative z-10">Pay via Bank Transfer (FNB) or USDT TRC20 for international.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-2 relative overflow-hidden group hover:border-red-500/30 transition-colors">
              <div className="absolute right-[-10px] top-[-10px] text-[8rem] font-black text-neutral-800/20 leading-none group-hover:text-red-900/10 transition-colors">03</div>
              <div className="text-red-500 font-label-caps text-xs uppercase mb-2">Step 03</div>
              <h3 className="text-xl font-headline-lg text-white uppercase relative z-10">Send Proof</h3>
              <p className="text-neutral-400 text-sm relative z-10">Send your proof of payment to us on WhatsApp.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] flex flex-col gap-2 relative overflow-hidden group hover:border-red-500/30 transition-colors">
              <div className="absolute right-[-10px] top-[-10px] text-[8rem] font-black text-neutral-800/20 leading-none group-hover:text-red-900/10 transition-colors">04</div>
              <div className="text-red-500 font-label-caps text-xs uppercase mb-2">Step 04</div>
              <h3 className="text-xl font-headline-lg text-white uppercase relative z-10">Get Started</h3>
              <p className="text-neutral-400 text-sm relative z-10">Receive your setup instructions and start trading on autopilot.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 md:px-12 container mx-auto max-w-7xl relative">
          <div className="mb-16 text-center relative z-10">
            <h2 className="font-headline-lg text-4xl uppercase tracking-tighter text-white">Select Your Platform</h2>
            <p className="font-body-md text-neutral-400 mt-2">Choose the version that aligns with your trading lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Android Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 relative overflow-hidden group hover:border-red-500/50 transition-colors flex flex-col rounded-[3rem]">
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-neutral-800 p-3 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <h3 className="font-headline-lg text-2xl text-white uppercase">Android</h3>
                </div>
                <div className="mb-6">
                  <div className="font-data-point text-3xl text-white">R1199.99</div>
                  <div className="text-neutral-500 text-sm">~ $74 USD</div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>MT4/MT5 Mobile integration</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>24/7 background hosting support</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>Lifetime license</span></li>
                </ul>
                <Link href="/ea/android" className="w-full text-center border border-red-500/50 text-red-500 font-label-caps text-sm py-4 rounded-full uppercase hover:bg-red-500 hover:text-white transition-colors mt-auto block">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Desktop Card */}
            <div className="bg-neutral-900 border border-red-600 p-8 relative overflow-hidden group scale-105 z-10 shadow-2xl shadow-red-900/20 flex flex-col rounded-[3rem]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white font-label-caps text-[10px] px-6 py-1.5 uppercase rounded-b-full">Pro Edition</div>
              <div className="relative z-10 pt-4 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-red-900/30 p-3 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <h3 className="font-headline-lg text-2xl text-white uppercase">Desktop</h3>
                </div>
                <div className="mb-6">
                  <div className="font-data-point text-3xl text-red-500">R4499.99</div>
                  <div className="text-neutral-500 text-sm">~ $274 USD</div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs mt-0.5">✓</span> <span className="text-white">Max hardware thread execution</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs mt-0.5">✓</span> <span className="text-white">Automated multi-chart scalper mode</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs mt-0.5">✓</span> <span className="text-white">Absolute latency optimization</span></li>
                </ul>
                <Link href="/ea/windows" className="w-full text-center bg-red-600 text-white font-label-caps text-sm py-4 rounded-full uppercase hover:bg-red-700 transition-colors mt-auto shadow-[0_0_15px_rgba(220,38,38,0.3)] block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* iOS Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 relative overflow-hidden group hover:border-red-500/50 transition-colors flex flex-col rounded-[3rem]">
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-neutral-800 p-3 rounded-full flex items-center justify-center text-red-500">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.04C10.5 2.04 9.36 3.1 9.36 4.54c0 .08 0 .16.01.24-.01 0-.01 0-.01.01-1.2.04-2.43.68-3.23 1.76-1.12 1.52-1.39 3.65-.68 5.48.74 1.88 2.06 3.32 3.36 4.88 1.1 1.34 2.37 2.92 3.86 2.87 1.43-.05 1.94-.92 3.65-.92 1.7 0 2.16.92 3.68.89 1.54-.03 2.66-1.46 3.75-2.83 1.25-1.55 1.75-3.04 1.78-3.12-.04-.02-2.93-1.11-2.96-4.42-.03-2.77 2.27-4.11 2.38-4.18-1.31-1.9-3.35-2.16-4.07-2.22-1.74-.17-3.41 1.03-4.31 1.03-.9 0-2.26-1.02-3.68-1.01zM14.9 0c-.8.03-1.85.53-2.4 1.19-.48.56-.91 1.48-.77 2.37.89.07 1.83-.43 2.39-1.09.52-.61.99-1.58.82-2.47-.01 0-.03 0-.04 0z"/></svg>
                  </div>
                  <h3 className="font-headline-lg text-2xl text-white uppercase">Apple (iOS)</h3>
                </div>
                <div className="mb-6">
                  <div className="font-data-point text-3xl text-white">R1999.99</div>
                  <div className="text-neutral-500 text-sm">~ $122 USD</div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>Mobile terminal compatibility</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>98% accuracy presets</span></li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300"><span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5">✓</span> <span>Instant push notifications</span></li>
                </ul>
                <Link href="/ea/ios" className="w-full text-center border border-red-500/50 text-red-500 font-label-caps text-sm py-4 rounded-full uppercase hover:bg-red-500 hover:text-white transition-colors mt-auto block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 py-16 border-t border-neutral-900 relative z-20 mt-12 rounded-t-[3rem]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]"></div>
                <span className="font-display-lg text-lg tracking-tighter text-white uppercase">BONGZWAY</span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-body-md">
                Elite algorithmic trading systems powered by SpecterX Pro+. Automate your edge.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-5">Community & Support</div>
              <div className="space-y-3">
                <a
                  href="https://t.me/+Zz56bI7DyHs1OGRk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2AABEE]/10 border border-[#2AABEE]/30 flex items-center justify-center group-hover:bg-[#2AABEE]/20 transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#2AABEE"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.4 13.955l-2.93-.916c-.637-.203-.65-.637.136-.943l11.443-4.41c.53-.194.994.13.845.535z"/></svg>
                  </div>
                  <span>Telegram Free Group<span className="block text-[10px] text-neutral-600 uppercase tracking-wider">Watch the bot perform live</span></span>
                </a>
                <a
                  href="https://www.instagram.com/bongzway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-900/10 border border-pink-900/30 flex items-center justify-center group-hover:bg-pink-900/20 transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ec4899" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#ec4899" stroke="none"/></svg>
                  </div>
                  <span>@bongzway<span className="block text-[10px] text-neutral-600 uppercase tracking-wider">Robot Owner</span></span>
                </a>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-5">Legal</div>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                This algorithmic trading software is for informational and educational purposes only. It does not constitute financial advice. Past performance is not indicative of future results. All trading decisions are made at the user&apos;s own risk.
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-label-caps text-xs text-neutral-600 uppercase">
              © 2025 BONGZWAY FOREX EA. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-1.5 text-neutral-600 text-[10px] font-label-caps uppercase tracking-wider">
              Developed by
              <a
                href="https://www.instagram.com/algokabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors ml-1"
              >
                AlgoKabs
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
