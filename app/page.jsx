
"use client";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import GlassCard from "../components/GlassCard";
import experiences from "../data/experiences";
import education from "../data/education";

export default function OnePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 1500); return () => clearTimeout(t); }, []);
  if (!loaded) return <Loader />;

  return (
    <div className="space-y-20">
      {/* HERO */}
      <section id="home" className="section grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">I build clean, scalable software.</h1>
          <p className="text-text-secondary text-lg">Minimalist engineering • AI/ML aware • Systems thinking</p>
          <div className="flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl2 btn-primary">View Projects</a>
            <a href="#resume" className="px-5 py-3 rounded-xl2 btn-ghost">Download CV</a>
          </div>
        </div>
        <div className="relative">
          {/* Subtle animated line mesh (SVG) */}
          <svg className="w-full h-[260px]" viewBox="0 0 600 260" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="600" y2="0">
                <stop offset="0%" stopOpacity="0.15" stopColor="currentColor"/>
                <stop offset="100%" stopOpacity="0.05" stopColor="currentColor"/>
              </linearGradient>
            </defs>
            {Array.from({ length: 8 }).map((_, i) => (
              <polyline
                key={i}
                points={Array.from({ length: 16 }, (_, j) => {
                  const x = j * (600/15);
                  const y = 40 + i*25 + Math.sin((j+i)*0.9)*8;
                  return `${x},${y}`;
                }).join(" ")}
                stroke="url(#g1)" strokeWidth="1" fill="none"
                className="animate-[dash_1.6s_ease-out_forwards]"
                style={{ strokeDasharray: 120, strokeDashoffset: 120, opacity: 0.9 - i*0.08 }}
              />
            ))}
          </svg>
          <p className="sr-only">Animated line mesh decorative</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <GlassCard className="md:col-span-2">
            <p className="text-text-secondary">
              Short, sharp narrative about your motivation, what you’re exploring in AI/ML and systems,
              and how you approach engineering decisions (constraints → trade-offs → measurable impact).
            </p>
          </GlassCard>
          <GlassCard>
            <ul className="text-sm list-disc pl-5">
              <li>Open-source contributor</li>
              <li>Georgia Tech MS CS (target)</li>
              <li>Interested in latency, cost, quality trade-offs</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* PROJECTS with marquee carousel */}
      <section id="projects" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
        <div className="overflow-x-hidden">
          <div className="marquee">
            {[
              { title: "AI Mock Interviewer", summary: "LLM-powered interviews with streaming feedback", stack: ["Next.js","OpenAI","Supabase"], impact: "Avg. +32% answer structure (n=57)", repo: "https://github.com/you/ai-mock-interviewer", link: "#" },
              { title: "PDF QA Bot", summary: "Answers from complex PDFs incl. code & tables", stack: ["Next.js","OCR","Langchain"], impact: "p95 latency 420ms @ 500 RPS (synthetic)", repo: "https://github.com/you/pdf-qa-bot", link: "#" },
              { title: "Color System Tool", summary: "Design tokens editor with live previews", stack: ["React","TS","Tailwind"], impact: "Improved DX & consistency", repo: "https://github.com/you/color-system-tool", link: "#" },
              // duplicate for seamless loop
              { title: "AI Mock Interviewer", summary: "LLM-powered interviews with streaming feedback", stack: ["Next.js","OpenAI","Supabase"], impact: "Avg. +32% answer structure (n=57)", repo: "https://github.com/you/ai-mock-interviewer", link: "#" },
              { title: "PDF QA Bot", summary: "Answers from complex PDFs incl. code & tables", stack: ["Next.js","OCR","Langchain"], impact: "p95 latency 420ms @ 500 RPS (synthetic)", repo: "https://github.com/you/pdf-qa-bot", link: "#" },
              { title: "Color System Tool", summary: "Design tokens editor with live previews", stack: ["React","TS","Tailwind"], impact: "Improved DX & consistency", repo: "https://github.com/you/color-system-tool", link: "#" }
            ].map((p, idx) => (
              <a key={p.title + idx} href={p.link} className="card card-pro card-hover block min-w-[320px] max-w-[340px]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-text-secondary">{p.summary}</p>
                  </div>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="opacity-70 hover:opacity-100 transition">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.85 3.14 8.96 7.49 10.41.55.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.04-3.05.66-3.69-1.31-3.69-1.31-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.47-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.48-1.43.11-2.99 0 0 .93-.3 3.05 1.12a10.58 10.58 0 0 1 2.78-.37c.94 0 1.89.12 2.78.37 2.12-1.42 3.05-1.12 3.05-1.12.59 1.56.22 2.71.11 2.99.69.77 1.12 1.74 1.12 2.94 0 4.21-2.57 5.14-5.02 5.41.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 .0.29.2.63.77.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z"/></svg>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  {p.stack.map(s => <span key={s} className="px-2 py-1 rounded border border-divider">{s}</span>)}
                </div>
                <p className="mt-3 text-xs text-text-muted">{p.impact}</p>
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-text-muted mt-2">Hover to pause the carousel · Click the GitHub icon to open repo</p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">

  <TabPanel experiences={experiences} education={education} />
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "AI/ML", items: ["PyTorch","TensorFlow","sklearn","LangChain","Ray"] },
            { title: "Backend", items: ["Node.js","Python","PostgreSQL","Redis","gRPC"] },
            { title: "Systems", items: ["Docker","Kubernetes","Queues","Caching","Observability"] }
          ].map((g) => (
            <GlassCard key={g.title}>
              <h3 className="font-semibold mb-2">{g.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {g.items.map(x => <span key={x} className="px-2 py-1 rounded border border-divider">{x}</span>)}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* RESUME (download only) */}
      <section id="resume" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Resume / CV</h2>
        <div className="flex flex-wrap items-center gap-3">
          <a className="px-5 py-3 rounded-xl2 btn-ghost" href="/resume.pdf" download>Download CV</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get in touch</h2>
        <form className="glass rounded-xl2 p-4 space-y-4" action="https://formspree.io/f/your-id" method="POST">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 rounded-md border border-divider bg-surface" id="name" name="name" required/>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input type="email" className="w-full px-3 py-2 rounded-md border border-divider bg-surface" id="email" name="email" required/>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 rounded-md border border-divider bg-surface" id="message" name="message" rows="5" required/>
          </div>
          <button className="px-5 py-3 rounded-xl2 btn-primary">Send</button>
        </form>
      </section>
    </div>
  );
}

function TabPanel({ experiences, education }){
  const [tab, setTab] = useState('work');

  return (
    <div>
      <div className="max-w-2xl mx-auto border border-divider rounded-xl2 bg-surface">
        <div className="p-3 sm:p-4 border-b border-divider">
          <div className="flex w-full">
            <div className="inline-flex w-full">
              <button
                onClick={() => setTab('work')}
                className={`px-5 py-3 text-sm text-center rounded-none flex-1 ${tab==='work' ? 'btn-primary' : 'btn-ghost'}`}
                aria-pressed={tab==='work'}
              >
                Work
              </button>
              <button
                onClick={() => setTab('education')}
                className={`-ml-px px-5 py-3 text-sm text-center rounded-none flex-1 ${tab==='education' ? 'btn-primary' : 'btn-ghost'}`}
                aria-pressed={tab==='education'}
              >
                Education
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          {tab === 'work' ? (
            <div className="space-y-3">
              {experiences.map((it, i) => (
                <div key={i} className="glass rounded-xl p-3 border border-divider shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {it.logo && (
                        <img src={it.logo} alt={`${it.company} logo`} className="w-9 h-9 rounded-md object-contain bg-white/5 p-1" />
                      )}
                      <div>
                        <div className="text-sm font-semibold leading-tight">{it.company}</div>
                        <div className="text-xs text-text-secondary">{it.role}</div>
                      </div>
                    </div>
                    <div className="text-xs text-text-muted self-start bg-surface/60 px-2 py-0.5 rounded-full">{it.period}</div>
                  </div>
                  <ul className="mt-2 grid gap-1 list-disc list-inside text-xs text-text-secondary">
                    {it.impacts.map(line => <li key={line}>{line}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {education.map((ed, i) => (
                <a key={i} href={ed.link} className="glass rounded-xl p-3 block border border-divider shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold leading-tight">{ed.school}</div>
                      <div className="text-xs text-text-secondary">{ed.degree}</div>
                    </div>
                    <div className="text-xs text-text-muted bg-surface/60 px-2 py-0.5 rounded-full">{ed.period}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
