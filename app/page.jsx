
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
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      {/* HERO */}
      <section id="home" className="section grid md:grid-cols-2 gap-6 sm:gap-8 items-center pt-4 sm:pt-0">
        <div className="space-y-4 sm:space-y-6 text-center md:text-left">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">I build clean, scalable software.</h1>
            <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">Building AI-driven systems • ML engineering • Reliable, scalable software</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col xs:flex-row gap-3 justify-center md:justify-start">
              <a href="/projects" className="px-5 py-3 rounded-xl2 btn-primary text-sm sm:text-base font-medium">View Projects</a>
              <a href="#resume" className="px-5 py-3 rounded-xl2 btn-ghost text-sm sm:text-base font-medium">Download CV</a>
            </div>
            
            <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-divider hover:opacity-90 hover:scale-105 transition-all duration-200"
                 href="https://www.linkedin.com/in/syed-uzair-a31308256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="20" height="20" aria-hidden>
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
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-divider hover:opacity-90 hover:scale-105 transition-all duration-200"
                 href="https://github.com/youknowzair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.1.08 1.67 1.14 1.67 1.14.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.14-2.95-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.12.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.12-1.43 3.05-1.12 3.05-1.12.6 1.54.22 2.68.11 2.96.71.77 1.14 1.75 1.14 2.95 0 4.22-2.58 5.16-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.63.75.53 4.36-1.46 7.51-5.57 7.51-10.41C23.01 5.24 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-divider hover:opacity-90 hover:scale-105 transition-all duration-200"
                 href="mailto:Uzairamansyed@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Profile Image in Circle */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-text/10 to-text/5 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-glass">
              <img 
                src="/profile.png" 
                alt="Syed Uzair" 
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <GlassCard className="md:col-span-2 p-4 sm:p-6">
            <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed sm:leading-7">
              As an Information Technology undergraduate at TCET, I am deeply focused on advancing my expertise in <span className="text-text font-medium">Artificial Intelligence and Machine Learning</span>. With a solid foundation in programming and data-driven problem-solving, I have developed and contributed to projects involving predictive modeling, intelligent systems, and algorithmic optimization.
            </p>
            <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed sm:leading-7 mt-4">
              I am continuously enhancing my proficiency in Python, machine learning frameworks, and data analysis tools. My goal is to build <span className="text-text font-medium">intelligent, scalable solutions</span> that drive innovation across industries, while actively pursuing opportunities to grow as a software engineer in AI-centric domains.
            </p>
          </GlassCard>
          <GlassCard className="p-4 sm:p-6">
            <h3 className="text-sm font-semibold mb-3 text-text">Quick Facts</h3>
            <ul className="text-xs sm:text-sm space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text rounded-full"></div>
                Open-source contributor
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text rounded-full"></div>
                Georgia Tech MS CS (target)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text rounded-full"></div>
                Interested in latency, cost, quality trade-offs
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* PROJECTS with marquee carousel (refactored as case studies) */}
      <section id="projects" className="section">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-tight">Selected Projects</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full"></div>
          <p className="text-text-secondary text-sm mt-3">Hover to pause • Click GitHub icon to open repo</p>
        </div>
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
              <a key={p.title + idx} href={p.link} className="card card-pro card-hover block min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[360px]">
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold truncate">{p.title}</h3>
                    <p className="text-xs text-text-secondary">Role: {p.role}</p>
                  </div>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="opacity-70 hover:opacity-100 transition shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.85 3.14 8.96 7.49 10.41.55.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.04-3.05.66-3.69-1.31-3.69-1.31-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.47-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.48-1.43.11-2.99 0 0 .93-.3 3.05 1.12a10.58 10.58 0 0 1 2.78-.37c.94 0 1.89.12 2.78.37 2.12-1.42 3.05-1.12 3.05-1.12.59 1.56.22 2.71.11 2.99.69.77 1.12 1.74 1.12 2.94 0 4.21-2.57 5.14-5.02 5.41.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 .0.29.2.63.77.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z"/></svg>
                  </a>
                </div>
                <div className="mt-2 text-xs text-text-secondary space-y-1">
                  <p className="line-clamp-1"><span className="font-medium text-text">Problem:</span> {p.problem}</p>
                  <p className="line-clamp-1"><span className="font-medium text-text">Actions:</span> {p.actions}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 text-[10px] sm:text-[11px]">
                  {p.stack.slice(0, 3).map(s => <span key={s} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-divider">{s}</span>)}
                  {p.stack.length > 3 && <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-divider text-text-muted">+{p.stack.length - 3}</span>}
                </div>
                <div className="mt-3 text-[10px] sm:text-[11px] text-text-muted">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-divider bg-surface/60 line-clamp-1">Impact: {p.impact}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-text"><span className="opacity-75">Read case study →</span></p>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text transition-colors">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-tight">Experience & Education</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full"></div>
        </div>
        <TabPanel experiences={experiences} education={education} />
      </section>

      {/* SKILLS with proof points */}
      <section id="skills" className="section max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-tight">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "AI/ML", items: ["PyTorch","TensorFlow","sklearn","LangChain","Ray"], proof: ["Shipped LLM interviewer (prod)","Built RAG with reranking","Fine-tuned small models for cost"], icon: "🤖" },
            { title: "Backend", items: ["Node.js","Python","PostgreSQL","Redis","gRPC"], proof: ["Cut p95 latency 43% via cache rewrite","Feature flags with 0 incidents","CI time -28%"], icon: "⚙️" },
            { title: "Systems", items: ["Docker","Kubernetes","Queues","Caching","Observability"], proof: ["Containerized multi-service app","Added tracing and alerts","Optimized resource limits"], icon: "🔧" }
          ].map((g) => (
            <GlassCard key={g.title} className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-semibold text-base sm:text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {g.items.map(x => (
                  <span key={x} className="px-2 py-1 text-xs sm:text-sm rounded-full border border-divider bg-surface hover:bg-text hover:text-background transition-colors cursor-default">
                    {x}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider">Recent Impact</h4>
                <ul className="space-y-2">
                  {g.proof.map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <div className="w-1 h-1 bg-text-secondary rounded-full mt-2 shrink-0"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">What others say</h2>
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
            className="px-3 py-1.5 rounded-md border border-divider bg-surface text-xs sm:text-sm hover:opacity-90 disabled:opacity-60 self-start sm:self-auto"
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
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Resume</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full mb-6"></div>
          
          <div className="glass rounded-xl2 p-6 sm:p-8 max-w-md mx-auto">
            <div className="mb-4">
              <div className="w-16 h-16 bg-text/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <p className="text-text-secondary text-sm">Download my resume to learn more about my experience and skills</p>
            </div>
            
            <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl2 btn-primary font-medium mb-4" href="/resume.pdf" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-divider">
              <span className="text-xs text-text-secondary">Connect:</span>
              <a className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-divider bg-surface hover:opacity-90 hover:scale-105 transition-all"
                 href="https://www.linkedin.com/in/syed-uzair-a31308256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="16" height="16">
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
              <a className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-divider bg-surface hover:opacity-90 hover:scale-105 transition-all"
                 href="https://github.com/youknowzair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.67.07-.67 1.1.08 1.67 1.14 1.67 1.14.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.14-2.95-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.12.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.12-1.43 3.05-1.12 3.05-1.12.6 1.54.22 2.68.11 2.96.71.77 1.14 1.75 1.14 2.95 0 4.22-2.58 5.16-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.63.75.53 4.36-1.46 7.51-5.57 7.51-10.41C23.01 5.24 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-divider bg-surface hover:opacity-90 hover:scale-105 transition-all"
                 href="mailto:Uzairamansyed@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Get in Touch</h2>
          <div className="w-12 h-1 bg-text mx-auto rounded-full"></div>
          <p className="text-text-secondary text-sm mt-3">Let's discuss your next project</p>
        </div>
        <form className="glass rounded-xl2 p-4 sm:p-6 space-y-5" action="https://formspree.io/f/your-id" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input 
                className="w-full px-4 py-3 rounded-lg border border-divider bg-surface focus:ring-2 focus:ring-text/10 focus:border-text/20 outline-none transition-all placeholder-text-muted" 
                id="name" 
                name="name" 
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-divider bg-surface focus:ring-2 focus:ring-text/10 focus:border-text/20 outline-none transition-all placeholder-text-muted" 
                id="email" 
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full px-4 py-3 rounded-lg border border-divider bg-surface focus:ring-2 focus:ring-text/10 focus:border-text/20 outline-none transition-all resize-none placeholder-text-muted" 
              id="message" 
              name="message" 
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button className="w-full px-6 py-3 rounded-xl2 btn-primary font-medium">
            Send Message
          </button>
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
                className={`px-3 sm:px-5 py-3 text-xs sm:text-sm text-center rounded-none flex-1 ${tab==='work' ? 'btn-primary' : 'btn-ghost'}`}
                aria-pressed={tab==='work'}
              >
                Work
              </button>
              <button
                onClick={() => setTab('education')}
                className={`-ml-px px-3 sm:px-5 py-3 text-xs sm:text-sm text-center rounded-none flex-1 ${tab==='education' ? 'btn-primary' : 'btn-ghost'}`}
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
                <div key={i} className="glass rounded-xl p-3 sm:p-4 border border-divider shadow-sm">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">
                      {it.logo && (
                        <img src={it.logo} alt={`${it.company} logo`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain shrink-0" />
                      )}
                      <div className="font-inter flex-1 min-w-0">
                        <div className="text-base sm:text-lg font-semibold leading-tight text-text tracking-tight">{it.company}</div>
                        <div className="text-sm sm:text-base text-text-secondary font-medium">{it.role}</div>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-text-muted self-start bg-surface/60 px-2 sm:px-3 py-1 rounded-full font-medium shrink-0">{it.period}</div>
                  </div>
                  <ul className="mt-3 grid gap-1.5 list-disc list-inside text-xs sm:text-[13px] text-text-secondary">
                    {it.impacts.map(line => <li key={line} className="leading-relaxed">{line}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="glass rounded-xl p-3 sm:p-4 border border-divider shadow-sm">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      {ed.logo && (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 aspect-square" style={{ WebkitMaskImage: 'radial-gradient(circle, #000 99%, transparent 100%)', maskImage: 'radial-gradient(circle, #000 99%, transparent 100%)' }}>
                          <img src={ed.logo} alt={`${ed.school} logo`} className="w-full h-full object-cover object-center" />
                        </div>
                      )}
                      <div className="font-inter flex-1 min-w-0">
                        <div className="text-base sm:text-lg font-semibold leading-tight text-text tracking-tight">{ed.school}</div>
                        {ed.honors && (
                          <div className="text-xs sm:text-sm text-text-secondary font-medium mt-0.5">{ed.honors}</div>
                        )}
                        <div className="text-sm sm:text-base text-text-secondary font-medium mt-0.5">{ed.degree}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[100px] sm:min-w-[140px] shrink-0">
                      <div className="text-xs sm:text-sm text-text-muted bg-surface/60 px-2 sm:px-3 py-1 rounded-full font-medium text-center">{ed.period}</div>
                      {ed.percentage && (
                        <div className="text-xs sm:text-sm text-text-muted">
                          <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full border border-divider bg-surface/60 font-medium">
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
