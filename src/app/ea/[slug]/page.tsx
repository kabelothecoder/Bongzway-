import Link from "next/link";
import { notFound } from "next/navigation";

// Define the available EAs
const eaData = {
  android: {
    title: "Specter X Pro+ (Android)",
    price: "R1199.99",
    features: [
      "MT4/MT5 Mobile integration",
      "24/7 background hosting support",
      "Lifetime license",
      "Full synthetics & currencies"
    ],
    image: "/images/android-ea.png"
  },
  ios: {
    title: "Specter X Pro+ (iOS)",
    price: "R1999.99",
    features: [
      "Mobile terminal compatibility via secure cloud bridging",
      "98% accuracy presets",
      "Instant push notifications"
    ],
    image: "/images/robot-hero.png" // Fallback to hero
  },
  windows: {
    title: "Specter X Pro+ (Desktop Edition)",
    price: "R4499.99",
    features: [
      "Max hardware thread execution",
      "Automated multi-chart scalper mode",
      "Absolute latency optimization",
      "Full algorithmic control panel"
    ],
    image: "/images/desktop-ea.png"
  }
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = eaData[resolvedParams.slug as keyof typeof eaData];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
      
      {/* Ambient Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>

      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/10 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      {/* Floating TopNavBar (Simplified for subpages) */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="bg-neutral-950/60 backdrop-blur-md border border-neutral-800/50 rounded-full px-6 py-3 w-full max-w-5xl flex justify-between items-center pointer-events-auto shadow-2xl">
          <Link href="/" className="font-display-lg text-xl tracking-tighter text-white uppercase flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]"></div> BONGZWAY
          </Link>
          <Link href="/" className="font-label-caps text-xs text-neutral-400 hover:text-white uppercase transition-colors">
            Back to Home
          </Link>
        </nav>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Oversized Oval Image Container */}
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-[3rem] p-12 flex flex-col items-center justify-center shadow-2xl mb-12 shadow-red-900/10">
          
          {/* Hero visual - robot image */}
          <div className="w-full h-56 mb-6 overflow-hidden rounded-[2rem] relative bg-black flex items-center justify-center">
            <img 
              src="/images/robot-hero.png" 
              alt={product.title} 
              className="w-full h-full object-contain object-center"
              style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
            />
            <div className="absolute bottom-3 left-3">
              <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 text-neutral-400 font-label-caps text-[10px] px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                Specter X Pro+
              </div>
            </div>
          </div>

          <h1 className="font-headline-lg text-4xl text-white uppercase text-center mb-2 tracking-tighter">{product.title}</h1>
          <div className="font-data-point text-3xl text-red-500 mb-6">{product.price}</div>
          
          <div className="w-full bg-black/50 border border-neutral-800 rounded-[3rem] p-6">
            <h3 className="font-label-caps text-xs text-neutral-400 uppercase mb-4 tracking-widest text-center">System Capabilities</h3>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="w-5 h-5 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span> 
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Telegram Community CTA */}
        <a
          href="https://t.me/+Zz56bI7DyHs1OGRk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#2AABEE]/10 border border-[#2AABEE]/30 rounded-full px-6 py-4 mb-6 hover:bg-[#2AABEE]/20 transition-colors w-full max-w-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.4 13.955l-2.93-.916c-.637-.203-.65-.637.136-.943l11.443-4.41c.53-.194.994.13.845.535z"/></svg>
          </div>
          <div>
            <div className="font-label-caps text-xs text-white uppercase">Free Telegram Group</div>
            <div className="font-label-caps text-[10px] text-neutral-500 uppercase tracking-wider">Watch this bot trade live</div>
          </div>
        </a>

        {/* Massive Glowing Oval Buy Button */}
        <Link 
          href={`/checkout?product=${resolvedParams.slug}`} 
          className="bg-red-600 text-white font-label-caps text-xl px-16 py-6 rounded-full uppercase hover:bg-red-700 transition-all text-center shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] border border-red-500 tracking-widest mb-8"
        >
          Proceed to Checkout
        </Link>

        {/* Footer credit */}
        <div className="font-label-caps text-[10px] text-neutral-700 uppercase tracking-widest text-center">
          Developed by{" "}
          <a href="https://www.instagram.com/algokabs/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">AlgoKabs</a>
          {" "}· <a href="https://www.instagram.com/bongzway/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">@bongzway</a>
        </div>
      </div>
    </div>
  );
}
