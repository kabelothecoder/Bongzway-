"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Tshepo M.",
    role: "Prop Firm Funded Trader",
    content: "Passed my $50k challenge in 4 days. The low drawdown on Gold is unbelievable. Execution speed is instant on my MT5 broker.",
    location: "South Africa",
  },
  {
    name: "Kwame A.",
    role: "Retail Trader",
    content: "Bongzway SpecterX has completely transformed my trading. I just let it run on the VPS and watch the consistent growth. No more emotional trading.",
    location: "Ghana",
  },
  {
    name: "Elena R.",
    role: "Portfolio Manager",
    content: "We deployed this on our private accounts and the risk-reward ratio handles high-impact news flawlessly. Highly recommended for serious institutions.",
    location: "United Kingdom",
  },
  {
    name: "Sipho D.",
    role: "Forex Enthusiast",
    content: "Best EA I've ever bought. It took some time to set up, but the Telegram community helped me out. Now seeing 8-12% monthly gains consistently.",
    location: "South Africa",
  },
  {
    name: "David C.",
    role: "Full-time Trader",
    content: "The trailing stop mechanism on the SpecterX is next level. It secures profits while I sleep. Incredible piece of technology.",
    location: "Australia",
  },
];

export function TestimonialsColumns() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
      <div className="flex w-full justify-center gap-4 px-4 overflow-hidden">
        <motion.div
          className="flex flex-col gap-4"
          animate={{
            y: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the array for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className={cn(
                "w-[350px] sm:w-[400px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm",
                "hover:border-red-600/50 transition-colors duration-300"
              )}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">{testimonial.name}</span>
                <span className="text-xs text-neutral-500">
                  {testimonial.role} • {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
