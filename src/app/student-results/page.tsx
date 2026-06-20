import Link from "next/link";
import fs from "fs";
import path from "path";

// Real client testimonials extracted from WhatsApp proof images
const realTestimonials = [
  {
    id: 1,
    name: "Arnold",
    location: "South Africa",
    text: "Awesome Bongz. I'm also one of your students and I just wanted to share that since I started using the robot last week, it's been taking consistent profitable trades. I've already managed to make a few withdrawals. Really impressed with the performance so far.",
    proof: "/student-proofs/WhatsApp%20Image%202026-06-20%20at%2018.57.11.jpeg"
  },
  {
    id: 2,
    name: "Rethabile",
    location: "South Africa",
    text: "Yea bro I can see the trades were well taken by the bot and everything looks good. You're on the right path trust the trades executed by the Bot. 727.71 ZAR in XAUUSD positions — consistent and profitable!",
    proof: "/student-proofs/WhatsApp%20Image%202026-06-20%20at%2018.57.12.jpeg"
  },
  {
    id: 3,
    name: "Thato Client",
    location: "South Africa",
    text: "Yo Bongz check out your bot took trades on BTC. We're about to hit the TP now! Bot executed perfectly on BTCUSD — 920.69 ZAR profit sitting ready to close.",
    proof: "/student-proofs/WhatsApp%20Image%202026-06-20%20at%2018.57.13.jpeg"
  },
  {
    id: 4,
    name: "Tlotlo Jane",
    location: "South Africa",
    text: "Connected ready to fund in the morning. Android version of SpecterXpro+ 2.0 is live and ready to trade!",
    proof: "/student-proofs/WhatsApp%20Image%202026-06-20%20at%2018.57.14.jpeg"
  }
];

export default async function StudentResultsPage() {
  // Read all images from public/student-proofs (excluding ones already used as testimonials)
  let additionalImages: string[] = [];
  try {
    const proofsDir = path.join(process.cwd(), "public", "student-proofs");
    if (fs.existsSync(proofsDir)) {
      const files = fs.readdirSync(proofsDir);
      const allImages = files
        .filter(file => file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg"))
        .map(file => `/student-proofs/${file.replace(/ /g, '%20')}`);
      
      // Get images beyond the first 4 (used in testimonials)
      additionalImages = allImages.slice(4);
    }
  } catch (error) {
    console.error("Failed to read student-proofs directory:", error);
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Ambient Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>

      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-neutral-800/50 rounded-full blur-[140px] z-0 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[30vw] h-[30vw] bg-red-900/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

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
            <Link className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/robot-results">
              Robot Results
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
            </Link>
            <Link className="group relative font-label-caps text-sm text-white transition-colors uppercase" href="/student-results">
              Student Proof
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 shadow-[0_0_6px_#dc2626]"></span>
            </Link>
          </div>
          <Link href="/checkout" className="bg-white text-black font-label-caps text-xs px-5 py-2.5 rounded-full uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hidden md:block">
            CHECKOUT
          </Link>
        </nav>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-green-900/30 bg-green-950/20 rounded-full px-4 py-1.5 font-label-caps text-xs text-green-500 uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 100% Real Client Results
          </div>
          <h1 className="font-display-lg text-5xl md:text-7xl tracking-tighter text-white uppercase drop-shadow-2xl">Verified <span className="text-red-600">Proof</span></h1>
          <p className="font-body-md text-neutral-400 mt-4 max-w-xl mx-auto text-lg">Real results from real traders deploying the SpecterX algorithm. Unfiltered. Unedited. 100% authentic.</p>
        </div>

        {/* Real Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {realTestimonials.map((t) => (
            <div key={t.id} className="bg-neutral-900/80 border border-neutral-800 rounded-[40px] overflow-hidden shadow-lg shadow-black/50 hover:border-green-900/50 transition-all duration-300 group">
              
              {/* Proof Screenshot - Full Width at Top */}
              <div className="w-full h-72 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={t.proof} 
                  alt={`Proof from ${t.name}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90 pointer-events-none"></div>
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-green-900/90 border border-green-500/70 text-green-400 font-label-caps text-[10px] px-3 py-1.5 rounded-full uppercase backdrop-blur-sm shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Verified
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-headline-lg text-xl text-white">{t.name}</h3>
                    <div className="font-label-caps text-xs text-neutral-500 uppercase mt-0.5">{t.location}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="#dc2626" className="text-red-600">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-body-md text-neutral-300 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional uploaded proof images in masonry gallery */}
        {additionalImages.length > 0 && (
          <div className="mb-24">
            <h2 className="font-headline-lg text-3xl uppercase tracking-tighter text-white mb-8 text-center">More Client Results</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {additionalImages.map((img, idx) => (
                <div key={idx} className="break-inside-avoid bg-neutral-900 rounded-[3rem] overflow-hidden border border-neutral-800 shadow-2xl relative group mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`Client Proof ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-500/50 text-green-500 font-label-caps text-[10px] px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Verified Proof
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center py-16">
          <div className="bg-neutral-900/80 border border-red-900/30 rounded-[3rem] p-12 max-w-2xl mx-auto shadow-2xl shadow-red-900/10">
            <h2 className="font-headline-lg text-3xl text-white uppercase mb-4 tracking-tighter">Ready to Join Them?</h2>
            <p className="text-neutral-400 font-body-md mb-8">Get your SpecterX EA license and start generating consistent profits today.</p>
            <Link href="/checkout" className="bg-red-600 text-white font-label-caps text-sm px-10 py-4 rounded-full uppercase hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] border border-red-500 inline-block">
              Get Started Today
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
