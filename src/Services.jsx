import { CheckCircle2, Shield, Sparkles, Wallet, BarChart3, Globe, Zap, Layers, Building2, Server, Workflow, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Sections';

export default function ServicesPage() {
  const core = [
    { icon: <Wallet />, title: 'Card Issuing', desc: 'Virtual and physical cards with spending controls, limits, and real-time notifications.', slug: 'card-issuing' },
    { icon: <Globe />, title: 'Global Payments', desc: 'Send and receive across currencies with FX optimization and transparent fees.', slug: 'global-payments' },
    { icon: <BarChart3 />, title: 'Analytics', desc: 'Dashboards, cohort trends, and exportable reports for finance and ops teams.', slug: 'analytics' },
    { icon: <Shield />, title: 'Risk & Compliance', desc: 'KYC/KYB, AML screening, and rule-based monitoring built-in.', slug: 'risk-compliance' },
  ];

  const platform = [
    { icon: <Server />, title: 'APIs & Webhooks', desc: 'Developer-first REST APIs, events, and SDKs to integrate quickly.' },
    { icon: <Workflow />, title: 'Automation', desc: 'Approval flows, scheduled payouts, and custom rules without code.' },
    { icon: <Layers />, title: 'Modular Stack', desc: 'Pick what you need today and add more as you scale.' },
    { icon: <Lock />, title: 'Security', desc: 'Encryption at rest and in transit, SSO/SAML, audit trails.' },
  ];

  const faqs = [
    {
      q: 'Can we mix and match services?',
      a: 'Yes. The platform is modular—start with one service and add more anytime without migrations.'
    },
    {
      q: 'Do you support multiple currencies?',
      a: 'We support 35+ currencies with competitive FX rates and automatic reconciliation.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Most teams ship a pilot in under two weeks with our guides, SDKs, and solution architects.'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="bg-neutral-950 py-16 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              <Zap size={14} /> Services
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Purpose-built financial services</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">Everything you need to launch, run, and scale modern financial products—delivered with enterprise security and a delightful developer experience.</p>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Core services</h2>
                <p className="mt-2 text-slate-300">Start with the essentials and expand as you grow.</p>
              </div>
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Talk to sales</a>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {core.map((c) => (
                <div key={c.title} className="group rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="text-sm text-slate-300">{c.desc}</p>
                  <Link to={`/services/${c.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
                <Sparkles size={14} /> Platform
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Built to scale with you</h2>
              <p className="mt-3 text-slate-300">A secure, modular platform that adapts to your use case. Add capabilities without rework.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platform.map((p) => (
                <div key={p.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
                    {p.icon}
                  </div>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
                <Building2 size={14} /> Industries
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Where we fit best</h2>
              <p className="mt-3 text-slate-300">From startups to enterprises across e‑commerce, SaaS, marketplaces, and fintechs.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-300">
              {['E‑commerce', 'SaaS', 'Marketplaces', 'Fintech & Banks', 'EdTech', 'Gig Platforms', 'B2B Payments', 'Crypto & Web3'].map((i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  {i}
                </div>
              ))}
            </div>
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

            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center rounded-full bg-orange-500 text-black px-5 py-2.5 text-sm font-medium hover:bg-orange-400">Contact us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
