import { CheckCircle2, Shield, Sparkles, Wallet, BarChart3, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">About Us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We build delightful financial tools that help businesses move money with confidence. Our platform simplifies digital banking with secure cards, fast payments, and real-time insights.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Licensed and compliant infrastructure',
                'Global-ready payments and cards',
                'Developer-friendly APIs and dashboards',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FeatureCard icon={<Shield />} title="Secure" subtitle="Bank-grade security" />
            <FeatureCard icon={<Sparkles />} title="Delightful" subtitle="Clean, modern UI" />
            <FeatureCard icon={<Wallet />} title="Cards" subtitle="Issue & manage" />
            <FeatureCard icon={<BarChart3 />} title="Insights" subtitle="Real-time data" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{subtitle}</p>
    </div>
  );
}

export function Services() {
  const items = [
    {
      icon: <Wallet />, title: 'Card Issuing', desc: 'Virtual and physical cards with granular controls.'
    },
    {
      icon: <Globe />, title: 'Global Payments', desc: 'Send and receive money in multiple currencies.'
    },
    {
      icon: <BarChart3 />, title: 'Analytics', desc: 'Live dashboards and exportable reports.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Essential rails for modern commerce, delivered with simplicity.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                {item.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const products = [
    { name: 'Finlite Card', desc: 'Spend smarter with controls and insights.', tag: 'Popular' },
    { name: 'Payouts API', desc: 'Automate vendor and creator payments.', tag: 'New' },
    { name: 'Checkout', desc: 'Frictionless payments for e‑commerce.', tag: 'Pro' },
  ];
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Products</h2>
          <p className="mt-3 text-slate-600">Tools that power your finances end‑to‑end.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-2 py-0.5 text-xs">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="text-slate-600 text-sm">{p.desc}</p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    { title: 'Trusted Security', desc: 'End‑to‑end encryption and continuous monitoring.' },
    { title: 'Transparent Pricing', desc: 'Clear rates without hidden fees.' },
    { title: 'Scales with You', desc: 'From first card to global operations.' },
  ];
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Why Choose Us</h2>
            <p className="mt-4 text-slate-600">We blend elegant user experience with rock‑solid infrastructure.</p>
            <ul className="mt-6 space-y-4">
              {points.map((pt) => (
                <li key={pt.title} className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
                  <h4 className="font-semibold text-slate-900">{pt.title}</h4>
                  <p className="text-sm text-slate-600">{pt.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Designed for builders</h3>
            <p className="mt-2 text-sm text-slate-600">SDKs, webhooks, and clear docs so you can ship faster.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Stat label="Uptime" value="99.99%" />
              <Stat label="Currencies" value="35+" />
              <Stat label="Countries" value="70+" />
              <Stat label="Fees" value="Low" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-center">
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      <div className="text-slate-600 text-xs">{label}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-semibold text-slate-900">Finlite</div>
            <p className="text-slate-600 text-sm mt-2">Modern tools for digital banking and e‑commerce.</p>
          </div>
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Finlite Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
