"use client";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#resume", label: "CV" },
  { href: "/#contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        <a href="/" className="font-semibold text-base sm:text-lg flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-text text-background flex items-center justify-center text-sm font-bold">
            SU
          </div>
          <span className="hidden xs:inline">Syed Uzair</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-2 py-1 rounded-md text-text-secondary hover:text-text transition">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden p-2 text-text-secondary hover:text-text transition"
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden border-t border-divider bg-background/95 backdrop-blur-md">
          <nav className="px-4 py-4 space-y-2">
            {links.map((l, index) => (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-all duration-200 group"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: open ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className="w-2 h-2 bg-text-secondary rounded-full group-hover:bg-text transition-colors"></div>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
