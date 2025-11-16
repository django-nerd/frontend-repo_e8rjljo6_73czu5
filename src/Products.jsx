import { CheckCircle2, Rocket, Puzzle, Building2, Shield, Gauge, Cpu, ArrowRight, Star, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import { Footer } from './components/Sections';

export default function ProductsPage() {
  const products = [
    {
      icon: <Rocket />,
      name: 'Cloud Platform',
      desc: 'Deploy, scale, and observe your applications with managed Kubernetes, autoscaling, and built‑in CI/CD.',
      highlights: ['Managed K8s', 'Autoscaling', 'Observability', 'Global CDN'],
    },
    {
      icon: <Shield />,
      name: 'Cybersecurity Suite',
      desc: 'End‑to‑end protection with SOC monitoring, EDR, zero‑trust access, and vulnerability management.',
      highlights: ['24/7 SOC', 'EDR/XDR', 'Zero‑trust', 'Vuln scanning'],
    },
    {
      icon: <Puzzle />,
      name: 'DevOps Toolkit',
      desc: 'Standardized pipelines, infrastructure as code, and release automation across multi‑cloud environments.',
      highlights: ['IaC modules', 'Pipeline templates', 'GitOps', 'Policy as code'],
    },
    {
      icon: <Cpu />,
      name: 'Data & AI Studio',
      desc: 'Modern data stack with ELT, real‑time streams, and ML lifecycle management from experiment to serving.',
      highlights: ['ELT/Streaming', 'Feature store', 'Model registry', 'Realtime serving'],
    },
  ];

  const comparison = [
    { feature: 'Enterprise security (SSO/SAML, RBAC)', po: true, is: true, re: true, th: true },
    { feature: '24/7 support & onboarding', po: true, is: true, re: true, th: true },
    { feature: 'API & Webhooks', po: true, is: true, re: true, th: true },
    { feature: 'Observability & audit logging', po: true, is: true, re: true, th: true },
    { feature: 'Flexible deployment (Cloud / On‑prem)', po: true, is: true, re: true, th: true },
  ];

  const faqs = [
    { q: 'Bagaimana proses implementasinya?', a: 'Kami mulai dengan assessment, desain arsitektur, PoC jika diperlukan, lalu migrasi dan go‑live dengan pendampingan penuh.' },
    { q: 'Apakah solusi bisa dikustomisasi?', a: 'Bisa. Setiap modul dapat disesuaikan dengan kebutuhan bisnis, kebijakan keamanan, dan toolchain yang sudah ada.' },
    { q: 'Apakah tersedia opsi cloud dan on‑premise?', a: 'Ya. Kami mendukung public cloud, private cloud, maupun on‑prem dengan kontrol penuh atas data dan kepatuhan.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-neutral-950 py-16 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
              <Star size={14} /> Produk IT Solutions
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Solusi TI modular untuk modernisasi bisnis</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">Pilih satu modul atau kombinasikan semuanya. Dirancang API‑first, enterprise‑grade, dan mudah diimplementasikan.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Lihat katalog</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20">Hubungi kami</a>
            </div>
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Katalog produk</h2>
                <p className="mt-2 text-slate-300">Mulai dari yang paling dibutuhkan, lalu skala sesuai pertumbuhan bisnis.</p>
              </div>
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">Minta demo</a>
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
                    Pelajari lebih lanjut <ArrowRight size={16} />
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
                  <Shield size={14} /> Keunggulan
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Aman, scalable, dan siap enterprise</h2>
                <p className="mt-3 text-slate-300">Enkripsi menyeluruh, kontrol akses granular, SSO/SAML, serta kepatuhan ISO 27001. Tim bersertifikasi siap mendampingi.</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">99.95%</div>
                    <div className="text-slate-300">Uptime SLA</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold"><span className="align-middle">15m</span></div>
                    <div className="text-slate-300">Rata‑rata waktu respons support</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">ISO 27001</div>
                    <div className="text-slate-300">Kepatuhan & audit</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-semibold">Global</div>
                    <div className="text-slate-300">Coverage multi‑region</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-2 text-sm text-slate-300"><Gauge size={16} className="text-orange-400" /> Observability & compliance</div>
                <div className="mt-3 h-56 rounded-xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-white/5 border border-white/10"></div>
                <p className="mt-3 text-sm text-slate-300">Dashboard, alerting, dan audit trail terpadu agar tim bergerak cepat dengan kontrol penuh.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Fitur standar di setiap produk</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-300">
                    <th className="p-3 font-medium">Fitur</th>
                    <th className="p-3 font-medium">Cloud Platform</th>
                    <th className="p-3 font-medium">Cybersecurity Suite</th>
                    <th className="p-3 font-medium">DevOps Toolkit</th>
                    <th className="p-3 font-medium">Data & AI Studio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparison.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/5">
                      <td className="p-3 text-slate-200">{row.feature}</td>
                      {[row.po, row.is, row.re, row.th].map((v, i) => (
                        <td key={i} className="p-3">
                          {v ? (
                            <span className="inline-flex items-center gap-1 text-green-400"><CheckCircle2 size={16} /> Termasuk</span>
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
                <Building2 size={14} /> Industri yang kami layani
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Cocok untuk berbagai sektor</h2>
              <p className="mt-3 text-slate-300">Kesehatan, layanan keuangan, ritel, manufaktur, dan lainnya. Arsitektur kami mudah beradaptasi dengan proses kompleks.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-300">
              {['Kesehatan', 'Layanan Keuangan', 'Ritel', 'Manufaktur', 'Pemerintahan', 'Pendidikan', 'Logistik', 'Media & Hiburan'].map((i) => (
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
              <Zap size={14} /> Mulai sekarang
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Jadwalkan konsultasi gratis</h2>
            <p className="mt-3 text-slate-300">Ceritakan kebutuhan Anda, dan kami akan menyiapkan demo serta rekomendasi arsitektur yang sesuai.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
              <div>
                <label className="text-sm text-slate-300">Nama</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Alex Johnson" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email kantor</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="alex@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Perusahaan</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Kebutuhan Anda</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm" placeholder="Ceritakan use case atau tantangan utama Anda" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" onClick={() => alert("Terima kasih! Tim kami akan segera menghubungi Anda.")} className="w-full inline-flex items-center justify-center rounded-lg bg-orange-500 text-black px-4 py-2 text-sm font-medium hover:bg-orange-400">
                  Minta demo
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Pertanyaan yang sering diajukan</h2>
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
