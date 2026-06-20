import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function RobotResultsPage() {
  // Read all media from public/results (images + videos)
  let uploadedImages: string[] = [];
  let uploadedVideos: string[] = [];
  
  try {
    const resultsDir = path.join(process.cwd(), "public", "results");
    if (fs.existsSync(resultsDir)) {
      const files = fs.readdirSync(resultsDir);
      uploadedImages = files
        .filter(file => file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg"))
        .map(file => `/results/${file.replace(/ /g, '%20')}`);
      uploadedVideos = files
        .filter(file => file.endsWith(".mp4") || file.endsWith(".mov") || file.endsWith(".webm"))
        .map(file => `/results/${file.replace(/ /g, '%20')}`);
    }
  } catch (error) {
    console.error("Failed to read results directory:", error);
  }

  const allMedia = [...uploadedVideos, ...uploadedImages]; // Videos first for impact

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Ambient Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>

      {/* Glow effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-red-900/15 rounded-full blur-[140px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[30vw] h-[30vw] bg-neutral-800/40 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      {/* Floating TopNavBar */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="bg-neutral-950/60 backdrop-blur-md border border-neutral-800/50 rounded-full px-6 py-3 w-full max-w-5xl flex justify-between items-center pointer-events-auto shadow-2xl">
          <Link href="/" className="font-display-lg text-xl tracking-tighter text-white uppercase flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]"></div> BONGZWAY
          </Link>
          <div className="hidden md:flex gap-8">
            <Link className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/matrix">
              Matrix
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
            </Link>
            <Link className="group relative font-label-caps text-sm text-white transition-colors uppercase" href="/robot-results">
              Robot Results
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 shadow-[0_0_6px_#dc2626]"></span>
            </Link>
            <Link className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/student-results">
              Student Proof
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
            </Link>
          </div>
          <Link href="/checkout" className="bg-white text-black font-label-caps text-xs px-5 py-2.5 rounded-full uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hidden md:block">
            CHECKOUT
          </Link>
        </nav>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-red-900/40 bg-red-950/30 rounded-full px-4 py-1.5 font-label-caps text-xs text-red-400 uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span> 
            Robot is LIVE — Trading Now
          </div>
          <h1 className="font-display-lg text-5xl md:text-7xl tracking-tighter text-white uppercase drop-shadow-2xl">
            Specter X <span className="text-red-600">Analytics</span>
          </h1>
          <p className="font-body-md text-neutral-400 mt-4 max-w-xl mx-auto">Live tracked performance metrics. Real trades, real profits. XAUUSD (Gold) primary asset.</p>
        </div>

        {/* KPI Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-lg">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-2">Win Rate</div>
            <div className="font-data-point text-4xl text-white">98<span className="text-xl text-red-500">%</span></div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-lg">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-2">Max DD</div>
            <div className="font-data-point text-4xl text-white">4.2<span className="text-xl text-neutral-500">%</span></div>
          </div>
          <div className="bg-neutral-900 border border-red-900/30 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-lg shadow-red-900/10">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-2">Primary Pair</div>
            <div className="font-data-point text-2xl text-red-500">XAUUSD</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-lg">
            <div className="font-label-caps text-xs text-neutral-500 uppercase tracking-widest mb-2">Status</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
              <span className="font-label-caps text-sm text-green-500 uppercase">Live</span>
            </div>
          </div>
        </div>

        {/* Live Media Gallery */}
        {allMedia.length > 0 ? (
          <div className="mb-24">
            <h2 className="font-headline-lg text-3xl uppercase tracking-tighter text-white mb-8 text-center">
              Live Deployment <span className="text-red-600">Recordings</span>
            </h2>
            
            {/* Videos Section */}
            {uploadedVideos.length > 0 && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {uploadedVideos.map((video, idx) => (
                    <div key={idx} className="bg-neutral-900 rounded-[3rem] overflow-hidden border border-red-900/30 shadow-2xl shadow-red-900/10 relative group">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="inline-flex items-center gap-2 bg-red-600/90 text-white font-label-caps text-[10px] px-3 py-1.5 rounded-full uppercase backdrop-blur-sm shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE REC
                        </div>
                      </div>
                      <video 
                        controls 
                        muted 
                        loop
                        playsInline
                        className="w-full h-auto max-h-[500px] object-contain bg-black"
                        preload="metadata"
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support video.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Images Section */}
            {uploadedImages.length > 0 && (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {uploadedImages.map((img, idx) => (
                  <div key={idx} className="break-inside-avoid bg-neutral-900 rounded-[3rem] overflow-hidden border border-neutral-800 shadow-2xl relative group mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`Robot Result ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 pointer-events-none">
                      <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 text-red-500 font-label-caps text-[10px] px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Verified Trade
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Placeholder equity curve charts when no real media */
          <div className="mb-16">
            <h2 className="font-headline-lg text-3xl uppercase tracking-tighter text-white mb-8 text-center">Performance Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gold Asset Card */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 text-yellow-500 font-label-caps text-xs px-4 py-1.5 rounded-full uppercase mb-6">
                  XAUUSD / GOLD
                </div>
                <h3 className="font-headline-lg text-2xl text-white uppercase mb-8">Monthly Equity Curve</h3>
                <div className="w-full h-48 bg-black/50 border border-neutral-800 rounded-[2rem] relative overflow-hidden flex items-end p-4 gap-2">
                  <div className="w-1/6 bg-yellow-600/20 rounded-t-full h-[20%]"></div>
                  <div className="w-1/6 bg-yellow-600/40 rounded-t-full h-[35%]"></div>
                  <div className="w-1/6 bg-yellow-600/60 rounded-t-full h-[60%]"></div>
                  <div className="w-1/6 bg-yellow-600/80 rounded-t-full h-[75%]"></div>
                  <div className="w-1/6 bg-yellow-500 rounded-t-full h-[90%] shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-1/6 bg-yellow-400 rounded-t-full h-[100%] shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
                </div>
                <div className="mt-6 flex justify-between w-full text-xs text-neutral-500 font-label-caps">
                  <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                </div>
              </div>

              {/* Synthetics Card */}
              <div className="bg-neutral-900 border border-red-900/30 rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_0_30px_rgba(220,38,38,0.05)]">
                <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 font-label-caps text-xs px-4 py-1.5 rounded-full uppercase mb-6">
                  VOLATILITY 75
                </div>
                <h3 className="font-headline-lg text-2xl text-white uppercase mb-8">Monthly Equity Curve</h3>
                <div className="w-full h-48 bg-black/50 border border-neutral-800 rounded-[2rem] relative overflow-hidden flex items-end p-4 gap-2">
                  <div className="w-1/6 bg-red-600/20 rounded-t-full h-[30%]"></div>
                  <div className="w-1/6 bg-red-600/40 rounded-t-full h-[45%]"></div>
                  <div className="w-1/6 bg-red-600/60 rounded-t-full h-[55%]"></div>
                  <div className="w-1/6 bg-red-600/80 rounded-t-full h-[80%]"></div>
                  <div className="w-1/6 bg-red-500 rounded-t-full h-[85%] shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                  <div className="w-1/6 bg-red-500 rounded-t-full h-[95%] shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
                </div>
                <div className="mt-6 flex justify-between w-full text-xs text-neutral-500 font-label-caps">
                  <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center py-8">
          <div className="bg-neutral-900/80 border border-red-900/30 rounded-[3rem] p-12 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-3xl text-white uppercase mb-4">Want These Results?</h2>
            <p className="text-neutral-400 font-body-md mb-8">Deploy the SpecterX EA on your account and let it trade for you 24/7.</p>
            <Link href="/checkout" className="bg-red-600 text-white font-label-caps text-sm px-10 py-4 rounded-full uppercase hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] border border-red-500 inline-block">
              Get Your License Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
