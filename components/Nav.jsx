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
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold">Syed Uzair</a>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-2 py-1 rounded-md text-text-secondary hover:text-text transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
