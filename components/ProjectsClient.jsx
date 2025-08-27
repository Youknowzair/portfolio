"use client";
import { useEffect, useMemo, useState } from 'react';
import CategoryPills from './CategoryPills';
import ProjectCard from './ProjectCard';

function filterProjects(list, query, category) {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    const inCategory = category === 'All' || p.category === category;
    if (!inCategory) return false;
    if (!q) return true;
    const hay = [p.title, p.description, ...(p.tech || [])].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

export default function ProjectsClient({ initialQ = '', initialC = 'All', projects, categories }) {
  const [q, setQ] = useState(initialQ);
  const [c, setC] = useState(initialC);

  // Filter live as user types or switches category
  const filtered = useMemo(() => filterProjects(projects, q, c), [projects, q, c]);

  // Sync query params for shareability
  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (c && c !== 'All') params.set('c', c);
    const url = `/projects${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState(null, '', url);
  }, [q, c]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects..."
          className="w-full sm:w-auto flex-1 h-10 rounded-xl2 border border-divider bg-surface px-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(31,41,55,0.15)]"
        />
        <CategoryPills categories={categories} value={c} onChange={setC} />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-text-secondary text-sm py-10">No projects found.</div>
        )}
      </section>
    </div>
  );
}

