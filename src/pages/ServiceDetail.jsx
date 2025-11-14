import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Wallet, Globe, BarChart3, Shield, Check, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Sections';

const SERVICES = {
  'card-issuing': {
    title: 'Card Issuing',
    icon: Wallet,
    blurb:
      'Issue virtual and physical cards with granular controls, real-time spend visibility, and instant provisioning.',
    capabilities: [
      'Virtual & physical cards',
      'Spend controls and limits',
      'Tokenization (Apple Pay / Google Pay)',
      'Real-time notifications',
      'Just-in-time funding',
      'Dispute management',
    ],
    useCases: [
      'Employee expense programs',
      'On-demand gig payouts',
      'Customer cashback cards',
      'Vendor and procurement cards',
    ],
  },
  'global-payments': {
    title: 'Global Payments',
    icon: Globe,
    blurb:
      'Move money across borders in 35+ currencies with competitive FX, transparent fees, and automated reconciliation.',
    capabilities: [
      'Multi-currency accounts',
      'Local rails & SWIFT',
      'Automated FX conversion',
      'Scheduled & bulk payouts',
      'Reconciliation & reporting',
      'Compliance screening (AML/KYB)',
    ],
    useCases: [
      'Marketplace vendor payouts',
      'SaaS multi-currency billing',
      'Global payroll & contractor payments',
      'Cross-border remittances',
    ],
  },
  analytics: {
    title: 'Analytics',
    icon: BarChart3,
    blurb:
      'Full-funnel visibility with dashboards, cohort analysis, anomaly detection, and export-ready reports.',
    capabilities: [
      'Realtime dashboards',
      'Cohorts & retention',
      'Revenue & margin insights',
      'Anomaly alerts',
      'Custom segments & filters',
      'CSV/BI exports',
    ],
    useCases: [
      'Finance and ops reporting',
      'Risk monitoring and chargeback analysis',
      'Unit economics optimization',
      'Executive KPIs and board packs',
    ],
  },
  'risk-compliance': {
    title: 'Risk & Compliance',
    icon: Shield,
    blurb:
      'Build on a compliant foundation with KYC/KYB, AML screening, device risk, and configurable rules.',
    capabilities: [
      'KYC / KYB verification',
      'Sanctions & PEP screening',
      'Rule-based monitoring',
      'Case management & audits',
      'Device & behavioral risk signals',
      'Dispute workflows',
    ],
    useCases: [
      'Fraud prevention for payouts',
      'Compliance automation',
      'Chargeback reduction',
      'High-risk merchant monitoring',
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = SERVICES[slug];

  const Icon = useMemo(() => (data ? data.icon : Shield), [data]);

  const otherServices = Object.entries(SERVICES)
    .filter(([k]) => k !== slug)
    .map(([k, v]) => ({ slug: k, title: v.title, Icon: v.icon }));

  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Sandbox',
      features: [
        'Sandbox access',
        'API keys & docs',
        'Basic analytics',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '$299',
      period: 'per month',
      features: [
        'Everything in Starter',
        'Production onboarding',
        'Advanced analytics',
        'Priority support',
      ],
      highlight: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: 'annual',
      features: [
        'Dedicated SSO/SAML',
        'Custom SLAs',
        'Solution architect',
        'Volume pricing',
      ],
    },
  ];

  // For comparison, map features across tiers (true if included)
  const comparisonRows = [
    { feature: 'Sandbox access', starter: true, growth: true, scale: true },
    { feature: 'Production onboarding', starter: false, growth: true, scale: true },
    { feature: 'Advanced analytics', starter: false, growth: true, scale: true },
    { feature: 'Priority support', starter: false, growth: true, scale: true },
    { feature: 'Dedicated SSO/SAML', starter: false, growth: false, scale: true },
    { feature: 'Custom SLAs', starter: false, growth: false, scale: true },
    { feature: 'Solution architect', starter: false, growth: false, scale: true },
    { feature: 'Volume pricing', starter: false, growth: false, scale: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="bg-neutral-950 py-14 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-slate-300">
              <Link to="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <ArrowLeft size={16} /> Back to Services
              </Link>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-black">
                <Icon size={22} />
              </span>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
                  <Zap size={14} /> Service Detail
                </span>
                <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">{data ? data.title : 'Service not found'}</h1>
                <p className="mt-4 text-slate-300 max-w-2xl">
                  {data ? data.blurb : 'The service you are looking for does not exist. Please return to Services.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {data && (
          <>
            {/* Capabilities & Use cases */}
            <section className="py-14 bg-black">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-semibold">Capabilities</h2>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {data.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                        <Check className="text-orange-400 mt-0.5" size={18} />
                        <span className="text-slate-300">{c}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="mt-10 text-xl font-semibold">Use cases</h2>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    {data.useCases.map((u) => (
                      <div key={u} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-slate-200">{u}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sticky top-28">
                    <h3 className="font-semibold">Get started</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      Talk to our team about pricing, implementation timelines, and a tailored rollout plan.
                    </p>
                    <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">
                      Talk to sales
                    </a>
                    <Link to="/services" className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20">
                      Explore all services
                    </Link>
                  </div>
                </aside>
              </div>
            </section>

            {/* Pricing */}
            <section className="py-14 bg-neutral-950 border-t border-white/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold">Simple, transparent pricing</h2>
                  <p className="mt-3 text-slate-300">Start in sandbox for free and move to production when you’re ready.</p>
                </div>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  {tiers.map((t) => (
                    <div key={t.name} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${t.highlight ? 'ring-1 ring-orange-500/40' : ''}`}>
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold">{t.name}</h3>
                        {t.highlight && (
                          <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">Popular</span>
                        )}
                      </div>
                      <div className="mt-4">
                        <span className="text-3xl font-semibold">{t.price}</span>
                        <span className="ml-2 text-sm text-slate-400">{t.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check size={16} className="text-orange-400 mt-0.5" />
                            <span className="text-slate-300">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium ${t.highlight ? 'bg-orange-500 text-black hover:bg-orange-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                        Choose {t.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Feature comparison */}
            <section className="py-14 bg-black">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">Feature comparison</h2>
                <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
                  <table className="min-w-full text-sm">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left px-4 py-3 font-medium text-slate-300">Feature</th>
                        <th className="px-4 py-3 font-medium text-slate-300">Starter</th>
                        <th className="px-4 py-3 font-medium text-slate-300">Growth</th>
                        <th className="px-4 py-3 font-medium text-slate-300">Scale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {comparisonRows.map((row) => (
                        <tr key={row.feature} className="bg-black/40">
                          <td className="px-4 py-3 text-slate-200 text-left">{row.feature}</td>
                          {[row.starter, row.growth, row.scale].map((val, idx) => (
                            <td key={idx} className="px-4 py-3 text-center">
                              {val ? (
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                  <Check size={14} />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/5 text-slate-500 border border-white/10">—</span>
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

            {/* Related services */}
            <section className="py-14 bg-neutral-950 border-t border-white/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">Related services</h2>
                    <p className="mt-2 text-slate-300">Explore more ways to build and scale.</p>
                  </div>
                  <Link to="/services" className="hidden sm:inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20">View all</Link>
                </div>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherServices.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
                        <s.Icon size={18} />
                      </div>
                      <h3 className="mt-4 font-semibold group-hover:text-white text-slate-100">{s.title}</h3>
                      <p className="text-sm text-slate-400">Learn how {s.title.toLowerCase()} can help your team.</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact form */}
            <section id="contact" className="py-14 bg-black">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-semibold">Talk to our team</h2>
                  <p className="mt-2 text-slate-300">Tell us a bit about your use case and we’ll reach out shortly.</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thanks! We\'ll be in touch shortly.');
                  }}
                  className="mt-8 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-300">Full name</label>
                      <input required type="text" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300">Work email</label>
                      <input required type="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300">Company</label>
                    <input type="text" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300">How can we help?</label>
                    <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder={`We\'re interested in ${data.title.toLowerCase()}...`} />
                  </div>
                  <button type="submit" className="inline-flex items-center rounded-full bg-orange-500 text-black px-5 py-2.5 text-sm font-medium hover:bg-orange-400">Request demo</button>
                </form>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-14 bg-neutral-950 border-t border-white/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold">Ready to build?</h2>
                  <p className="mt-3 text-slate-300">
                    Our solution architects can help map requirements, integrate APIs, and launch a pilot in weeks.
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-orange-500 text-black px-5 py-2.5 text-sm font-medium hover:bg-orange-400">
                    Contact us
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
