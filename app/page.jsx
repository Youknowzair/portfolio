
"use client";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import GlassCard from "../components/GlassCard";
import experiences from "../data/experiences";
import education from "../data/education";
import testimonials from "../data/testimonials";

export default function OnePage() {
  const [loaded, setLoaded] = useState(false);
  const [tLoading, setTLoading] = useState(false);
  const [tShown, setTShown] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 3500); return () => clearTimeout(t); }, []); // 3.5 seconds to match loader
  if (!loaded) return <Loader />;

  return (
    <div className="space-y-20">
      {/* HERO */}
      <section id="home" className="section grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">I build clean, scalable software.</h1>
          <p className="text-text-secondary text-lg">Building AI-driven systems • ML engineering • Reliable, scalable software</p>
          <div className="flex items-center gap-4 md:gap-5">
            <a href="/projects" className="px-5 py-3 rounded-xl2 btn-primary">View Projects</a>
            <a href="#resume" className="px-5 py-3 rounded-xl2 btn-ghost">Download CV</a>
            <a className="inline-flex items-center justify-center hover:opacity-90"
               href="https://www.linkedin.com/in/syed-uzair-a31308256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="24" height="24" aria-hidden>
                <defs>
                  <linearGradient id="premiumGoldHero" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E7D79E"/>
                    <stop offset="50%" stopColor="#C9AE6C"/>
                    <stop offset="100%" stopColor="#9C7A2F"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="14" height="14" rx="2" fill="url(#premiumGoldHero)"/>
                <path fill="#FFFFFF" d="M4 5H2v7h2V5zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2V8.29z"/>
              </svg>
            </a>
            <a className="inline-flex items-center justify-center hover:opacity-90"
               href="https://github.com/youknowzair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.1.08 1.67 1.14 1.67 1.14.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.14-2.95-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.12.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.12-1.43 3.05-1.12 3.05-1.12.6 1.54.22 2.68.11 2.96.71.77 1.14 1.75 1.14 2.95 0 4.22-2.58 5.16-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.63.75.53 4.36-1.46 7.51-5.57 7.51-10.41C23.01 5.24 18.27.5 12 .5z"/>
              </svg>
            </a>
            <a className="inline-flex items-center justify-center hover:opacity-90"
               href="mailto:Uzairamansyed@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
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
            <p className="text-text-secondary text-[15px] leading-7">
              As an Information Technology undergraduate at TCET, I am deeply focused on advancing my expertise in Artificial Intelligence and Machine Learning. With a solid foundation in programming and data-driven problem-solving, I have developed and contributed to projects involving predictive modeling, intelligent systems, and algorithmic optimization.
              <br /><br />
              I am continuously enhancing my proficiency in Python, machine learning frameworks, and data analysis tools. My goal is to build intelligent, scalable solutions that drive innovation across industries, while actively pursuing opportunities to grow as a software engineer in AI-centric domains.
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

      {/* PROJECTS with marquee carousel (refactored as case studies) */}
      <section id="projects" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">Selected Projects</h2>
        <div className="overflow-x-hidden">
          <div className="marquee">
            {[
              { title: "AI Mock Interviewer", role: "Full‑stack", problem: "Practice technical + behavioral interviews", actions: "LLM prompts, streaming UI, rubric scoring", impact: "+32% answer structure (n=57)", stack: ["Next.js","OpenAI","Supabase"], repo: "https://github.com/you/ai-mock-interviewer", link: "#" },
              { title: "PDF QA Bot", role: "Backend", problem: "Search answers in complex PDFs", actions: "Chunking + rerank, OCR for tables", impact: "p95 420ms @ 500 RPS (synthetic)", stack: ["Next.js","OCR","Langchain"], repo: "https://github.com/you/pdf-qa-bot", link: "#" },
              { title: "Color System Tool", role: "Frontend", problem: "Design tokens editor", actions: "Token parsing + live preview", impact: "+20% design consistency (team)", stack: ["React","TS","Tailwind"], repo: "https://github.com/you/color-system-tool", link: "#" },
              // duplicated for loop smoothness
              { title: "AI Mock Interviewer", role: "Full‑stack", problem: "Practice technical + behavioral interviews", actions: "LLM prompts, streaming UI, rubric scoring", impact: "+32% answer structure (n=57)", stack: ["Next.js","OpenAI","Supabase"], repo: "https://github.com/you/ai-mock-interviewer", link: "#" },
              { title: "PDF QA Bot", role: "Backend", problem: "Search answers in complex PDFs", actions: "Chunking + rerank, OCR for tables", impact: "p95 420ms @ 500 RPS (synthetic)", stack: ["Next.js","OCR","Langchain"], repo: "https://github.com/you/pdf-qa-bot", link: "#" },
              { title: "Color System Tool", role: "Frontend", problem: "Design tokens editor", actions: "Token parsing + live preview", impact: "+20% design consistency (team)", stack: ["React","TS","Tailwind"], repo: "https://github.com/you/color-system-tool", link: "#" }
            ].map((p, idx) => (
              <a key={p.title + idx} href={p.link} className="card card-pro card-hover block min-w-[340px] max-w-[360px]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-xs text-text-secondary">Role: {p.role}</p>
                  </div>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="opacity-70 hover:opacity-100 transition">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.85 3.14 8.96 7.49 10.41.55.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.04-3.05.66-3.69-1.31-3.69-1.31-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.47-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.48-1.43.11-2.99 0 0 .93-.3 3.05 1.12a10.58 10.58 0 0 1 2.78-.37c.94 0 1.89.12 2.78.37 2.12-1.42 3.05-1.12 3.05-1.12.59 1.56.22 2.71.11 2.99.69.77 1.12 1.74 1.12 2.94 0 4.21-2.57 5.14-5.02 5.41.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 .0.29.2.63.77.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z"/></svg>
                  </a>
                </div>
                <div className="mt-2 text-xs text-text-secondary">
                  <p><span className="font-medium text-text">Problem:</span> {p.problem}</p>
                  <p><span className="font-medium text-text">Actions:</span> {p.actions}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 text-[11px]">
                  {p.stack.map(s => <span key={s} className="px-2 py-1 rounded border border-divider">{s}</span>)}
                </div>
                <div className="mt-3 text-[11px] text-text-muted">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-divider bg-surface/60">Impact: {p.impact}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-text"><span className="opacity-75">Read case study →</span></p>
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

      {/* SKILLS with proof points */}
      <section id="skills" className="section max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "AI/ML", items: ["PyTorch","TensorFlow","sklearn","LangChain","Ray"], proof: ["Shipped LLM interviewer (prod)","Built RAG with reranking","Fine-tuned small models for cost"] },
            { title: "Backend", items: ["Node.js","Python","PostgreSQL","Redis","gRPC"], proof: ["Cut p95 latency 43% via cache rewrite","Feature flags with 0 incidents","CI time -28%"] },
            { title: "Systems", items: ["Docker","Kubernetes","Queues","Caching","Observability"], proof: ["Containerized multi-service app","Added tracing and alerts","Optimized resource limits"] }
          ].map((g) => (
            <GlassCard key={g.title}>
              <h3 className="font-semibold mb-2">{g.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {g.items.map(x => <span key={x} className="px-2 py-1 rounded border border-divider">{x}</span>)}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-text-secondary list-disc list-inside">
                {g.proof.map(p => <li key={p}>{p}</li>)}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What others say</h2>
          <button
            onClick={() => {
              if (tShown) {
                setTShown(false);
              } else {
                setTLoading(true);
                setTimeout(() => { setTLoading(false); setTShown(true); }, 1200);
              }
            }}
            disabled={tLoading}
            className="px-3 py-1.5 rounded-md border border-divider bg-surface text-xs md:text-sm hover:opacity-90 disabled:opacity-60"
            aria-pressed={tShown}
          >
            {tShown ? 'Hide recommendations' : (tLoading ? 'Fetching from LinkedIn…' : 'Show LinkedIn recommendations')}
          </button>
        </div>
        {tShown ? (
          <div className="border border-divider rounded-xl2 bg-surface p-3 sm:p-4">
            <div className="grid gap-4">
              {testimonials.map(t => (
                <div key={t.name} className="glass rounded-xl p-3 border border-divider shadow-sm">
                  <div className="flex items-start gap-3">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-surface/60 border border-divider flex items-center justify-center text-sm font-medium">
                        {t.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-base font-semibold">{t.name}</p>
                        {t.connection && <span className="text-xs text-text-muted">· {t.connection}</span>}
                        {t.linkedin && (
                          <a className="inline-flex items-center ml-2" href={t.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="16" height="16" aria-label="LinkedIn premium-style logo">
                              <defs>
                                <linearGradient id="premiumGold" x1="0" y1="0" x2="1" y2="1">
                                  <stop offset="0%" stopColor="#E7D79E"/>
                                  <stop offset="50%" stopColor="#C9AE6C"/>
                                  <stop offset="100%" stopColor="#9C7A2F"/>
                                </linearGradient>
                              </defs>
                              <rect x="0" y="0" width="14" height="14" rx="2" fill="url(#premiumGold)"/>
                              <path fill="#FFFFFF" d="M4 5H2v7h2V5zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2V8.29z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      {t.title && <p className="text-sm text-text-secondary">{t.title}</p>}
                      {t.meta && <p className="text-xs text-text-muted mt-0.5">{t.meta}</p>}
                      <p className="mt-2 text-sm text-text-secondary leading-6">“{t.quote}”</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>


      {/* RESUME (download only) */}
      <section id="resume" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Resume / CV</h2>
        <div className="flex flex-wrap items-center gap-3">
          <a className="px-5 py-3 rounded-xl2 btn-ghost" href="/resume.pdf" download>Download CV</a>
          <a className="inline-flex items-center justify-center w-11 h-11 rounded-xl2 border border-divider bg-surface hover:opacity-90"
             href="https://www.linkedin.com/in/syed-uzair-a31308256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="18" height="18" aria-hidden>
              <defs>
                <linearGradient id="premiumGoldSmall" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E7D79E"/>
                  <stop offset="50%" stopColor="#C9AE6C"/>
                  <stop offset="100%" stopColor="#9C7A2F"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="14" height="14" rx="2" fill="url(#premiumGoldSmall)"/>
              <path fill="#FFFFFF" d="M4 5H2v7h2V5zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2V8.29z"/>
            </svg>
          </a>
          <a className="inline-flex items-center justify-center w-11 h-11 rounded-xl2 border border-divider bg-surface hover:opacity-90"
             href="https://github.com/youknowzair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.1.08 1.67 1.14 1.67 1.14.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.14-2.95-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.12.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.12-1.43 3.05-1.12 3.05-1.12.6 1.54.22 2.68.11 2.96.71.77 1.14 1.75 1.14 2.95 0 4.22-2.58 5.16-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.63.75.53 4.36-1.46 7.51-5.57 7.51-10.41C23.01 5.24 18.27.5 12 .5z"/>
            </svg>
          </a>
          <a className="inline-flex items-center justify-center w-11 h-11 rounded-xl2 border border-divider bg-surface hover:opacity-90"
             href="mailto:Uzairamansyed@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
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
            <div className="space-y-4">
              {experiences.map((it, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-divider shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-5">
                      {it.logo && (
                        <img src={it.logo} alt={`${it.company} logo`} className="w-16 h-16 object-contain" />
                      )}
                      <div className="font-inter">
                        <div className="text-lg font-semibold leading-tight text-text tracking-tight">{it.company}</div>
                        <div className="text-base text-text-secondary font-medium">{it.role}</div>
                      </div>
                    </div>
                    <div className="text-sm text-text-muted self-start bg-surface/60 px-3 py-1 rounded-full font-medium">{it.period}</div>
                  </div>
                  <ul className="mt-3 grid gap-1.5 list-disc list-inside text-[13px] text-text-secondary">
                    {it.impacts.map(line => <li key={line}>{line}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-divider shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {ed.logo && (
                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 aspect-square" style={{ WebkitMaskImage: 'radial-gradient(circle, #000 99%, transparent 100%)', maskImage: 'radial-gradient(circle, #000 99%, transparent 100%)' }}>
                          <img src={ed.logo} alt={`${ed.school} logo`} className="w-full h-full object-cover object-center" />
                        </div>
                      )}
                      <div className="font-inter flex-1">
                        <div className="text-lg font-semibold leading-tight text-text tracking-tight">{ed.school}</div>
                        {ed.honors && (
                          <div className="text-sm text-text-secondary font-medium mt-0.5">{ed.honors}</div>
                        )}
                        <div className="text-base text-text-secondary font-medium mt-0.5">{ed.degree}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[140px]">
                      <div className="text-sm text-text-muted bg-surface/60 px-3 py-1 rounded-full font-medium">{ed.period}</div>
                      {ed.percentage && (
                        <div className="text-sm text-text-muted">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-divider bg-surface/60 font-medium">
                            {ed.percentage}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
