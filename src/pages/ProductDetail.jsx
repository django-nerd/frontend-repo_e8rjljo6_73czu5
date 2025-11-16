import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, Cpu, Rocket, Puzzle, Building2, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Sections';

const catalog = {
  'cloud-platform': {
    icon: <Rocket />,
    title: 'Cloud Platform',
    subtitle: 'Deploy, scale, and observe applications with confidence',
    blurb:
      'Platform cloud terkelola dengan Kubernetes, autoscaling, observability, dan pipeline CI/CD siap pakai untuk mempercepat time‑to‑market.',
    features: [
      'Managed Kubernetes dengan autoscaling',
      'Load balancing & global CDN',
      'Observability (metrics, tracing, logging)',
      'Pipelines CI/CD standar (blue/green, canary)',
      'Backup & disaster recovery',
    ],
    useCases: ['Modernisasi aplikasi', 'Microservices', 'Multi‑region deployment', 'Container migration'],
  },
  'cybersecurity-suite': {
    icon: <Shield />,
    title: 'Cybersecurity Suite',
    subtitle: 'Zero‑trust security from endpoint to cloud',
    blurb:
      'Perlindungan menyeluruh dengan SOC 24/7, EDR/XDR, zero‑trust access, dan vulnerability management untuk menurunkan risiko secara signifikan.',
    features: [
      'SOC 24/7 & threat intelligence',
      'EDR/XDR dan respons insiden',
      'Zero‑trust network access (ZTNA)',
      'Vulnerability scanning & patch management',
      'Kepatuhan & audit otomatis',
    ],
    useCases: ['Compliance & audit', 'Proteksi endpoint', 'Hybrid workforce', 'Risk management'],
  },
  'devops-toolkit': {
    icon: <Puzzle />,
    title: 'DevOps Toolkit',
    subtitle: 'Standardized delivery for multi‑cloud teams',
    blurb:
      'Tooling DevOps terpadu: Infrastructure as Code, pipeline template, GitOps, dan policy‑as‑code untuk rilis cepat dan konsisten.',
    features: [
      'Template pipeline & reusable actions',
      'Infrastructure as Code (Terraform/Helm)',
      'GitOps & environment promotion',
      'Policy as code & guardrails',
      'Change management & approvals',
    ],
    useCases: ['Standarisasi SDLC', 'Platform engineering', 'Multi‑cloud delivery', 'Cost governance'],
  },
  'data-ai-studio': {
    icon: <Cpu />,
    title: 'Data & AI Studio',
    subtitle: 'From ingestion to real‑time model serving',
    blurb:
      'Tumpukan data modern dengan ELT, streaming real‑time, feature store, dan manajemen siklus ML dari eksperimen hingga produksi.',
    features: [
      'ELT & streaming pipelines',
      'Feature store & data quality',
      'ML experiment tracking & registry',
      'Batch & real‑time model serving',
      'Governance & lineage',
    ],
    useCases: ['360° customer view', 'Fraud detection', 'Personalization', 'Predictive maintenance'],
  },
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const data = catalog[slug ?? ''];

  const related = useMemo(() => {
    const keys = Object.keys(catalog).filter((k) => k !== slug);
    return keys.slice(0, 3);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-24">
          <section className="py-24 bg-neutral-950">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-semibold">Produk tidak ditemukan</h1>
              <p className="mt-3 text-slate-300">Maaf, halaman yang Anda cari tidak tersedia.</p>
              <div className="mt-6">
                <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">
                  Kembali ke produk <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-neutral-950 py-16 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              {data.icon}
              <span>Produk</span>
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">{data.title}</h1>
            <p className="mt-3 text-slate-300 max-w-2xl">{data.subtitle}</p>
            <p className="mt-4 text-slate-300 max-w-3xl">{data.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Diskusikan kebutuhan</a>
              <Link to="/products" className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20">Lihat produk lain</Link>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Fitur utama</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((f) => (
                <div key={f} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2 text-white"><CheckCircle2 className="text-orange-400" size={18} /> {f}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases + Pricing */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Use case yang didukung</h3>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {data.useCases.map((u) => (
                  <li key={u} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-400" /> {u}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Paket harga</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-white font-semibold">Starter</div>
                  <div className="text-2xl font-bold mt-1">Hubungi kami</div>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-400" /> SLA standar</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-400" /> Dukungan jam kerja</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-400" /> Onboarding terpandu</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5">
                  <div className="text-orange-400 font-semibold">Enterprise</div>
                  <div className="text-2xl font-bold mt-1 text-white">Konsultasi</div>
                  <ul className="mt-3 space-y-2 text-slate-200">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-300" /> SLA 99.95%+</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-300" /> Support 24/7 & TAM</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-300" /> Kustomisasi & integrasi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-xl md:text-2xl font-semibold">Produk terkait</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((key) => {
                const r = catalog[key];
                return (
                  <Link key={key} to={`/products/${key}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">{r.icon}</div>
                    <div className="mt-3 font-semibold text-white">{r.title}</div>
                    <div className="text-sm text-slate-300">{r.subtitle}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm text-orange-400">Lihat detail <ArrowRight size={16} /></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              <Zap size={14} /> Siap memulai?
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Bicara dengan konsultan kami</h2>
            <p className="mt-3 text-slate-300">Kami bantu rancang arsitektur yang tepat untuk kasus Anda.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
              <div>
                <label className="text-sm text-slate-300">Nama</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="email@perusahaan.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Ringkasan kebutuhan</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Ceritakan kebutuhan dan target Anda" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" onClick={() => alert('Terima kasih! Kami akan segera menghubungi Anda.')} className="w-full inline-flex items-center justify-center rounded-lg bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">
                  Jadwalkan konsultasi
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
