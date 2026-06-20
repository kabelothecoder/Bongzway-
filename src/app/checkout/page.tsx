"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const products = {
  android: { title: "Specter X Pro+ (Android)", price: "R1199.99" },
  ios: { title: "Specter X Pro+ (iOS)", price: "R1999.99" },
  windows: { title: "Specter X Pro+ (Desktop)", price: "R4499.99" }
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const selectedProduct = productSlug && products[productSlug as keyof typeof products] ? products[productSlug as keyof typeof products] : null;

  const [mentorship, setMentorship] = useState("none");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const handle = formData.get('handle');

    const phone = "27752984882";
    const text = `New Order:
Name: ${name}
Email: ${email}
Contact: ${handle}
Product: ${selectedProduct?.title || "None"}
Mentorship: ${mentorship}

I have transferred the funds to TymeBank. Here is my Proof of Payment:`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
      
      {/* Left Column: Order Summary & Payment Details */}
      <div className="space-y-8">
        
        {/* Order Summary */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-10 shadow-lg">
          <h2 className="font-headline-lg text-2xl text-white uppercase mb-8">Order Summary</h2>
          {selectedProduct ? (
            <div className="flex justify-between items-center border-b border-neutral-800 pb-6 mb-6">
              <div>
                <div className="font-label-caps text-xs text-red-500 uppercase tracking-widest mb-1">Product</div>
                <div className="font-body-md text-white text-lg">{selectedProduct.title}</div>
              </div>
              <div className="font-data-point text-2xl text-white">{selectedProduct.price}</div>
            </div>
          ) : (
            <div className="text-neutral-500 mb-6 font-body-md">No product selected. Please return to home.</div>
          )}

          {/* Mentorship Upsell */}
          <div className="space-y-4">
            <h3 className="font-label-caps text-xs text-neutral-400 uppercase tracking-widest mb-4">Add 1-on-1 Mentorship (Optional)</h3>
            
            <label className={`flex items-center gap-4 p-4 border rounded-full cursor-pointer transition-all ${mentorship === 'none' ? 'border-red-500 bg-red-900/10' : 'border-neutral-800 hover:border-neutral-600'}`}>
              <input type="radio" name="mentorship" value="none" checked={mentorship === 'none'} onChange={() => setMentorship('none')} className="hidden" />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${mentorship === 'none' ? 'border-red-500' : 'border-neutral-600'}`}>
                {mentorship === 'none' && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
              </div>
              <div className="flex-grow font-body-md text-sm text-neutral-200">No Mentorship (Software Only)</div>
            </label>

            <label className={`flex items-center gap-4 p-4 border rounded-full cursor-pointer transition-all ${mentorship === 'gauteng' ? 'border-red-500 bg-red-900/10' : 'border-neutral-800 hover:border-neutral-600'}`}>
              <input type="radio" name="mentorship" value="gauteng" checked={mentorship === 'gauteng'} onChange={() => setMentorship('gauteng')} className="hidden" />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${mentorship === 'gauteng' ? 'border-red-500' : 'border-neutral-600'}`}>
                {mentorship === 'gauteng' && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
              </div>
              <div className="flex-grow font-body-md text-sm text-neutral-200">Gauteng Meetup</div>
              <div className="font-data-point text-red-500">+ R4500</div>
            </label>

            <label className={`flex items-center gap-4 p-4 border rounded-full cursor-pointer transition-all ${mentorship === 'durban' ? 'border-red-500 bg-red-900/10' : 'border-neutral-800 hover:border-neutral-600'}`}>
              <input type="radio" name="mentorship" value="durban" checked={mentorship === 'durban'} onChange={() => setMentorship('durban')} className="hidden" />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${mentorship === 'durban' ? 'border-red-500' : 'border-neutral-600'}`}>
                {mentorship === 'durban' && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
              </div>
              <div className="flex-grow font-body-md text-sm text-neutral-200">Durban Meetup</div>
              <div className="font-data-point text-red-500">+ R9000</div>
            </label>

            <label className={`flex items-center gap-4 p-4 border rounded-full cursor-pointer transition-all ${mentorship === 'capetown' ? 'border-red-500 bg-red-900/10' : 'border-neutral-800 hover:border-neutral-600'}`}>
              <input type="radio" name="mentorship" value="capetown" checked={mentorship === 'capetown'} onChange={() => setMentorship('capetown')} className="hidden" />
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${mentorship === 'capetown' ? 'border-red-500' : 'border-neutral-600'}`}>
                {mentorship === 'capetown' && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
              </div>
              <div className="flex-grow font-body-md text-sm text-neutral-200">Cape Town Meetup</div>
              <div className="font-data-point text-red-500">+ R14000</div>
            </label>
          </div>
        </div>

        {/* TymeBank Details Oval */}
        <div className="bg-neutral-900/80 border border-red-900/30 rounded-[3rem] p-10 shadow-2xl shadow-red-900/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
            <h2 className="font-headline-lg text-xl text-white uppercase">Manual EFT Details</h2>
          </div>
          <p className="text-neutral-400 text-sm mb-6">Please transfer the total amount to the following account. Use your name as the reference.</p>
          
          <div className="space-y-4 font-body-md text-white">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Bank</span>
              <span>TymeBank</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Account Holder</span>
              <span>MR BONGANI B MASEKO</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Account Number</span>
              <span className="font-data-point text-red-500">51052784808</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Branch Code</span>
              <span>678910</span>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Checkout Form */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-10 shadow-lg h-fit">
        <h2 className="font-headline-lg text-2xl text-white uppercase mb-8">Client Details</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-caps text-xs text-neutral-400 uppercase tracking-widest mb-2 px-4">Full Name</label>
            <input name="name" required type="text" className="w-full bg-black border border-neutral-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors font-body-md" placeholder="Enter your full name" />
          </div>

          <div>
            <label className="block font-label-caps text-xs text-neutral-400 uppercase tracking-widest mb-2 px-4">Email Address</label>
            <input name="email" required type="email" className="w-full bg-black border border-neutral-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors font-body-md" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block font-label-caps text-xs text-neutral-400 uppercase tracking-widest mb-2 px-4">Telegram / WhatsApp Handle</label>
            <input name="handle" required type="text" className="w-full bg-black border border-neutral-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors font-body-md" placeholder="@username or Number" />
          </div>

          {/* Proof of Payment Oval Dropzone */}
          <div>
            <div className="bg-red-900/10 border border-red-500/50 rounded-full px-6 py-4 text-center">
              <div className="font-label-caps text-xs text-red-500 uppercase tracking-widest">
                Submit order via WhatsApp and attach your Proof of Payment there.
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white font-label-caps text-xl px-12 py-5 rounded-full uppercase hover:bg-red-700 transition-all text-center shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] tracking-widest mt-8 border border-red-500">
            Submit Order
          </button>
        </form>
      </div>

    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Ambient Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      ></div>

      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-red-900/10 rounded-full blur-[140px] z-0 pointer-events-none mix-blend-screen"></div>

      {/* Floating TopNavBar */}
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

      <div className="text-center mb-16 relative z-10">
        <h1 className="font-display-lg text-5xl tracking-tighter text-white uppercase drop-shadow-2xl">Secure <span className="text-red-600">Checkout</span></h1>
      </div>

      <Suspense fallback={<div className="text-white relative z-10 font-label-caps uppercase">Loading...</div>}>
        <CheckoutContent />
      </Suspense>

    </div>
  );
}
