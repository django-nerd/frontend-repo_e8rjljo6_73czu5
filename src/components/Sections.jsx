import { CheckCircle2, Shield, Sparkles, Wallet, BarChart3, Globe, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">About Us</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We build delightful financial tools that help businesses move money with confidence. Our platform simplifies digital banking with secure cards, fast payments, and real-time insights.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Licensed and compliant infrastructure',
                'Global-ready payments and cards',
                'Developer-friendly APIs and dashboards',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-orange-400" size={20} />
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
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{subtitle}</p>
    </div>
  );
}

export function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
            <Sparkles size={14} /> Our North Star
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Vision & Mission</h2>
          <p className="mt-3 text-slate-300">What guides us today and where we're headed tomorrow.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
              <Sparkles />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              A world where moving money is instant, borderless, and accessible for everyone—from emerging founders to global enterprises.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Frictionless experiences across every channel</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Intelligence that anticipates needs, not just reports</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Trust by design—transparent, secure, resilient</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
              <Shield />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Empower teams to build and scale financial products with secure infrastructure, elegant tooling, and clear economics.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Ship developer-first APIs and dashboards</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Operate with uncompromising compliance</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-orange-400" size={18} /> Partner for long-term, global growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
    <section id="services" className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Our Services</h2>
          <p className="mt-3 text-slate-300">Essential rails for modern commerce, delivered with simplicity.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 p-6 bg-white/5 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-black">
                {item.icon}
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
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
    { name: 'Checkout', desc: 'Frictionless payments for e-commerce.', tag: 'Pro' },
  ];
  return (
    <section id="products" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Our Products</h2>
          <p className="mt-3 text-slate-300">Tools that power your finances end-to-end.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-white/10 p-6 bg-white/5 shadow-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-orange-500 text-black px-2 py-0.5 text-xs">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300">
                Learn more <ArrowRight size={16} />
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
    { title: 'Trusted Security', desc: 'End-to-end encryption and continuous monitoring.' },
    { title: 'Transparent Pricing', desc: 'Clear rates without hidden fees.' },
    { title: 'Scales with You', desc: 'From first card to global operations.' },
  ];
  return (
    <section id="why-us" className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Why Choose Us</h2>
            <p className="mt-4 text-slate-300">We blend elegant user experience with rock-solid infrastructure.</p>
            <ul className="mt-6 space-y-4">
              {points.map((pt) => (
                <li key={pt.title} className="rounded-xl border border-white/10 p-4 bg-white/5 shadow-sm">
                  <h4 className="font-semibold text-white">{pt.title}</h4>
                  <p className="text-sm text-slate-300">{pt.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 shadow-sm">
            <h3 className="font-semibold text-white">Designed for builders</h3>
            <p className="mt-2 text-sm text-slate-300">SDKs, webhooks, and clear docs so you can ship faster.</p>
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
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-slate-300 text-xs">{label}</div>
    </div>
  );
}

export function GetInTouch() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    alert(`Thanks, ${name}! We\u2019ll get back to you shortly.`);
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-medium border border-orange-500/20">
            <Send size={14} /> Get in touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Let’s build something great</h2>
          <p className="mt-3 text-slate-300">Have a question or want a tailored demo? Drop us a line and we’ll respond within a business day.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li className="flex items-center gap-3"><Mail className="text-orange-400" size={18} /> hello@finlite.io</li>
              <li className="flex items-center gap-3"><Phone className="text-orange-400" size={18} /> +1 (555) 010-1010</li>
              <li className="flex items-center gap-3"><MapPin className="text-orange-400" size={18} /> 100 Market St, San Francisco, CA</li>
            </ul>
            <div className="mt-6 text-xs text-slate-400">We usually reply in under 24 hours.</div>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-white/10 p-6 bg-white/5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm text-slate-300 mb-1">Company</label>
                <input id="company" name="company" type="text" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your company (optional)" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your needs" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <p className="text-xs text-slate-400">By submitting, you agree to our Terms and Privacy Policy.</p>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black px-5 py-2.5 text-sm font-medium hover:bg-orange-400">
                  Send message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  function handleSubscribe(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get('email');
    alert(`Subscribed: ${email}`);
    form.reset();
  }

  return (
    <footer className="pt-16 pb-10 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-xl font-semibold text-white">Finlite</div>
            <p className="text-slate-300 text-sm mt-2">Modern tools for digital banking and e-commerce.</p>
            <form onSubmit={handleSubscribe} className="mt-5 flex items-center gap-2">
              <div className="relative flex-1">
                <input type="email" name="email" required placeholder="Your email" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-black px-3 py-2 text-sm font-medium hover:bg-orange-400">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
            <p className="mt-2 text-xs text-slate-500">Stay updated with product news and releases.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#products" className="hover:text-orange-400">Cards</a></li>
              <li><a href="#services" className="hover:text-orange-400">Payments</a></li>
              <li><a href="#services" className="hover:text-orange-400">Analytics</a></li>
              <li><a href="#why-us" className="hover:text-orange-400">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-orange-400">About</a></li>
              <li><a href="#vision-mission" className="hover:text-orange-400">Vision & Mission</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-orange-400">Docs</a></li>
              <li><a href="#" className="hover:text-orange-400">API Reference</a></li>
              <li><a href="#" className="hover:text-orange-400">Status</a></li>
              <li><a href="#" className="hover:text-orange-400">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} Finlite Inc. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-orange-400">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-orange-400">Terms</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 inline-flex items-center gap-1"><Globe size={16}/> EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
