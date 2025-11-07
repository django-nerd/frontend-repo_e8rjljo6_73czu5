import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 bg-black">
      <div className="absolute inset-0 h-[70vh] md:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[60vh] md:min-h-[70vh]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black px-3 py-1 text-xs shadow">
                Dark • Orange • Modern
              </span>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                Bold fintech for builders and brands
              </h1>
              <p className="text-slate-300 text-lg md:text-xl max-w-xl">
                Cards, payments, and payouts on a sleek, developer‑friendly platform. Built for speed and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#products" className="inline-flex items-center justify-center rounded-full bg-orange-500 text-black px-5 py-3 text-sm shadow hover:bg-orange-400">
                  Explore Products
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm shadow border border-white/10 hover:bg-white/20">
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
