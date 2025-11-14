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
