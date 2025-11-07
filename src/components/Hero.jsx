import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div className="absolute inset-0 h-[70vh] md:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[60vh] md:min-h-[70vh]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs shadow">
                Fintech • Modern • Minimal
              </span>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
                Simple digital banking for modern commerce
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-xl">
                Manage cards, payments, and payouts with a clean, unified platform. Built for startups, creators, and growing brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#products" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm shadow hover:bg-slate-800">
                  Explore Products
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm shadow border border-slate-200 hover:bg-slate-50">
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
