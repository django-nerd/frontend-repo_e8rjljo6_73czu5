import { CheckCircle2, Sparkles, Rocket, Puzzle, Building2, Shield, Gauge, Cpu, Coins, ArrowRight, Star, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import { Footer } from './components/Sections';

export default function ProductsPage() {
  const products = [
    {
      icon: <Rocket />,
      name: 'Payments OS',
      desc: 'Unified acquiring, routing, retries, and reconciliation with out‑of‑the‑box dashboards.',
      highlights: ['Smart routing', 'Tokenization', 'Retries & dunning', 'PCI compliant'],
    },
    {
      icon: <Puzzle />,
      name: 'Issuing Suite',
      desc: 'Launch virtual and physical cards with controls, spend limits, and real‑time insights.',
      highlights: ['Spend controls', 'Just‑in‑time funding', 'Card lifecycle', '3DS & SCA'],
    },
    {
      icon: <Cpu />,
      name: 'Risk Engine',
      desc: 'Dynamic rules, device fingerprinting, and ML scoring to reduce fraud without friction.',
      highlights: ['Rules & webhooks', 'AML/KYC/KYB', 'Case management', 'Dispute handling'],
    },
    {
      icon: <Coins />,
      name: 'Treasury Hub',
      desc: 'Multi‑currency wallets, FX, and automated payouts with granular approvals.',
      highlights: ['Multi‑currency', 'Payout workflows', 'Ledger & audit', 'FX optimization'],
    },
  ];

  const comparison = [
    { feature: 'Enterprise security', po: true, is: true, re: true, th: true },
    { feature: 'Real‑time analytics', po: true, is: true, re: true, th: true },
    { feature: 'API & Webhooks', po: true, is: true, re: true, th: true },
    { feature: 'Sandbox & SDKs', po: true, is: true, re: true, th: true },
    { feature: 'Usage‑based pricing', po: true, is: true, re: true, th: true },
  ];

  const faqs = [
    { q: 'How do we get started?', a: 'Spin up a sandbox in minutes, then promote to production with our guided checklists.' },
    { q: 'Do products work together?', a: 'Yes. All products share a common data layer and auth model so they integrate seamlessly.' },
    { q: 'Can we bring our own bank/PSP?', a: 'Absolutely. Use our orchestration to route to your preferred banking or payment partners.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-neutral-950 py-16 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              <Star size={14} /> Products
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Modular products for modern finance</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">Pick one product or combine them all. Everything is API‑first, enterprise‑grade, and designed to launch quickly.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Explore catalog</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20">Talk to sales</a>
            </div>
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Product catalog</h2>
                <p className="mt-2 text-slate-300">Choose what you need today and add more as you scale.</p>
              </div>
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Request a demo</a>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <div key={p.name} className="group rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
                    {p.icon}
                  </div>
                  <h3 className="mt-4 font-semibold">{p.name}</h3>
                  <p className="text-sm text-slate-300">{p.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-400" /> {h}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300">
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
                  <Shield size={14} /> Trust & performance
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Security and uptime you can bank on</h2>
                <p className="mt-3 text-slate-300">Encryption in transit and at rest, granular permissions, SSO/SAML, and SOC 2 Type II. Our platform is built for compliance.</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">99.99%</div>
                    <div className="text-slate-300">Uptime SLA</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">250ms</div>
                    <div className="text-slate-300">Avg API latency</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">SOC 2</div>
                    <div className="text-slate-300">Type II certified</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">GDPR</div>
                    <div className="text-slate-300">Compliant by design</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-2 text-sm text-slate-300"><Gauge size={16} className="text-orange-400" /> Observability</div>
                <div className="mt-3 h-56 rounded-xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-white/5 border border-white/10"></div>
                <p className="mt-3 text-sm text-slate-300">Built‑in dashboards and structured logs so your teams can move fast with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">What you get with every product</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-300">
                    <th className="p-3 font-medium">Feature</th>
                    <th className="p-3 font-medium">Payments OS</th>
                    <th className="p-3 font-medium">Issuing Suite</th>
                    <th className="p-3 font-medium">Risk Engine</th>
                    <th className="p-3 font-medium">Treasury Hub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparison.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/5">
                      <td className="p-3 text-slate-200">{row.feature}</td>
                      {[row.po, row.is, row.re, row.th].map((v, i) => (
                        <td key={i} className="p-3">
                          {v ? (
                            <span className="inline-flex items-center gap-1 text-green-400"><CheckCircle2 size={16} /> Included</span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
                <Building2 size={14} /> Industries
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Built for your vertical</h2>
              <p className="mt-3 text-slate-300">E‑commerce, SaaS, marketplaces, lending, and more. Our modular design adapts to complex workflows.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-300">
              {['E‑commerce', 'SaaS', 'Marketplaces', 'Fintech & Banks', 'Gig Platforms', 'Lending', 'B2B Payments', 'Crypto & Web3'].map((i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 bg-black">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              <Zap size={14} /> Get started
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">See the platform in action</h2>
            <p className="mt-3 text-slate-300">Tell us a bit about your use case and well tailor a demo to your workflow.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Alex Johnson" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Work email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="alex@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Company</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">What are you building?</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Briefly describe your use case" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" onClick={() => alert('Thanks! We\'ll be in touch.')} className="w-full inline-flex items-center justify-center rounded-lg bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">
                  Request a demo
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white/5 open:bg-white/10 transition-colors">
                  <summary className="cursor-pointer list-none px-6 py-4 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-medium text-white">{f.q}</h3>
                      <p className="text-sm text-slate-300 mt-1">{f.a}</p>
                    </div>
                    <CheckCircle2 className="text-orange-400 shrink-0 mt-1" size={18} />
                  </summary>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
