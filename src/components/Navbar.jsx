import { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 text-white shadow-sm">
              <CreditCard size={18} />
            </span>
            <span className="tracking-tight">Finlite</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 rounded-md hover:bg-slate-100 text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
