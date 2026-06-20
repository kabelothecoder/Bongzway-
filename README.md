# Bongzway SpecterX Platform

A premium, cinematic web platform for the Bongzway SpecterX EA trading algorithm. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Cinematic UI/UX**: Dark mode, glassmorphism, glowing gradients, and strict oval/pill-shaped components.
- **Matrix Engine**: Interactive backtest simulator with live metric updates and animated SVG radial charts (Win Rate, Drawdown, Profit Factor).
- **Live Trading Integration**: Integrated TradingView XAUUSD dark widget.
- **Dynamic Results**:
  - **Robot Results**: Video and image gallery of live deployments.
  - **Student Proofs**: Verified WhatsApp testimonial screenshots.
- **EA Products**: Detailed product pages for Android, iOS, and Desktop editions.
- **Checkout Flow**: Seamless lead generation redirecting to WhatsApp.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is optimized for deployment on Vercel. A `vercel.json` configuration file is included.

1. Push the code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect Next.js and build the project.

> **Note**: The results and student proofs galleries read files from the `/public/results` and `/public/student-proofs` directories at build time. Ensure all media files are committed to Git before deploying.
