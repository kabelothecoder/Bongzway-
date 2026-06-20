"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Android Version",
    price: "R1199.99",
    usdPrice: "$74",
    description: "Perfect for trading on the go with your Android device.",
    features: [
      "Optimized for MT4/MT5 Mobile",
      "Instant push notifications",
      "Standard execution speed",
      "Access to Telegram community",
      "1 Live Account License",
    ],
    popular: false,
  },
  {
    name: "Desktop (Windows)",
    price: "R4499.99",
    usdPrice: "$274",
    description: "The ultimate institutional-grade trading environment.",
    features: [
      "Ultra-low latency execution",
      "Advanced trailing stop mechanism",
      "Multiple timeframe analysis",
      "News filter integration",
      "Unlimited Demo Accounts",
      "3 Live Account Licenses",
      "Priority VIP Support",
    ],
    popular: true,
  },
  {
    name: "Apple (iOS) Version",
    price: "R1999.99",
    usdPrice: "$122",
    description: "Seamless integration for the Apple ecosystem.",
    features: [
      "Optimized for iOS MT4/MT5",
      "Instant push notifications",
      "Standard execution speed",
      "Access to Telegram community",
      "1 Live Account License",
      "Mac VPS Compatibility",
    ],
    popular: false,
  },
];

export function PricingCards() {
  const telegramLink = "https://t.me/+Zz56bI7DyHs1OGRk";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 py-12">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={cn(
            "relative flex flex-col rounded-2xl border bg-neutral-900/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            plan.popular ? "border-red-600 shadow-red-900/20" : "border-neutral-800"
          )}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-red-600 px-3 py-1 text-center text-xs font-medium text-white shadow-sm">
              Most Popular
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-neutral-400 text-sm h-10">{plan.description}</p>
          </div>
          
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white">{plan.price}</span>
            <span className="text-neutral-500 font-medium">/ {plan.usdPrice}</span>
          </div>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mb-8 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
              plan.popular
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            )}
          >
            Buy Now
          </a>

          <div className="flex-1 space-y-4">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className={cn("h-4 w-4", plan.popular ? "text-red-500" : "text-neutral-500")} />
                <span className="text-sm text-neutral-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
