import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      className="text-slate-200/90 hover:text-white transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-sm border-b border-white/10 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-white text-lg">
            <span className="text-white">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('#projects', 'Projects')}
            {navItem('#about', 'About')}
            {navItem('#contact', 'Contact')}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navItem('#projects', 'Projects')}
            {navItem('#about', 'About')}
            {navItem('#contact', 'Contact')}
          </div>
        )}
      </div>
    </header>
  );
}
