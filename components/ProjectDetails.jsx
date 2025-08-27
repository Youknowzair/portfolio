"use client";
import { useState } from 'react';

export default function ProjectDetails({ project }) {
  const [tab, setTab] = useState('Overview');
  const tabs = ['Overview', 'Features', 'Impact'];

  const overview = project.overview || project.description;
  const features = project.features || project.tech || [];
  const impact = project.impact || [
    'Improved UX and performance through clean architecture.',
    'Shipped fast iterations with measurable outcomes.'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left column: media and tags */}
      <div className="lg:col-span-1">
        <div className="bg-surface border border-divider rounded-xl2 overflow-hidden">
          <div className="aspect-[16/9] bg-[rgb(240,242,247)] dark:bg-[rgb(20,24,32)] flex items-center justify-center text-text-muted">
            <span className="text-sm opacity-70">{project.imageAlt || 'Project preview'}</span>
          </div>
          <div className="p-3 flex flex-wrap gap-2 text-[11px] border-t border-divider">
            {(project.tech || []).map((t) => (
              <span key={t} className="px-2 py-1 rounded border border-divider">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          {project.live && (
            <a href={project.live} className="btn-primary px-3 py-2 rounded-xl2 text-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
          {project.github && (
            <a href={project.github} className="btn-ghost px-3 py-2 rounded-xl2 text-sm" target="_blank" rel="noopener noreferrer">View Code</a>
          )}
        </div>
      </div>

      {/* Right column: title, summary, tabs */}
      <div className="lg:col-span-2">
        <div className="mb-3">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h1>
          <p className="text-text-secondary mt-2 max-w-2xl">{project.description}</p>
        </div>

        <div className="border-b border-divider mb-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-3 py-2 text-sm whitespace-nowrap ${active ? 'text-text border-b-2 border-[rgb(31,41,55)] dark:border-white' : 'text-text-secondary'}`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {tab === 'Overview' && (
          <div className="prose prose-sm max-w-none text-[13px] leading-6 text-text-secondary">
            {Array.isArray(overview) ? (
              <ul className="list-disc pl-5">
                {overview.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : (
              <p>{overview}</p>
            )}
          </div>
        )}

        {tab === 'Features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(features || []).map((f, i) => (
              <div key={i} className="bg-surface border border-divider rounded-xl2 p-3 text-sm text-text-secondary">{f}</div>
            ))}
            {(!features || features.length === 0) && <p className="text-text-secondary text-sm">No feature list provided.</p>}
          </div>
        )}

        {tab === 'Impact' && (
          <ul className="list-disc pl-5 text-sm text-text-secondary">
            {(impact || []).map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

