"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav className="bg-neutral-950/80 backdrop-blur-md border border-neutral-800/50 rounded-[2rem] px-6 py-3 w-full max-w-5xl flex flex-col md:flex-row md:justify-between md:items-center pointer-events-auto shadow-2xl transition-all">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-display-lg text-xl tracking-tighter text-white uppercase flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]"></div> BONGZWAY
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 flex items-center justify-center hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            )}
          </button>
        </div>
        
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-0 items-center pb-4 md:pb-0`}>
          <Link onClick={() => setIsOpen(false)} className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/matrix">
            Matrix
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
          </Link>
          <Link onClick={() => setIsOpen(false)} className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/robot-results">
            Robot Results
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
          </Link>
          <Link onClick={() => setIsOpen(false)} className="group relative font-label-caps text-sm text-neutral-400 hover:text-white transition-colors uppercase" href="/student-results">
            Student Proof
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#dc2626]"></span>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/checkout" className="bg-white text-black font-label-caps text-xs px-5 py-2.5 rounded-full uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] mt-2 md:mt-0">
            CHECKOUT
          </Link>
        </div>
      </nav>
    </div>
  );
}
