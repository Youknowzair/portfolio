"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

function filterProjects(list, query, category) {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    const inCategory = category === "All" || p.category === category;
    if (!inCategory) return false;
    if (!q) return true;
    const hay = [p.title, p.description, ...(p.tech || [])]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export default function ProjectsExplorer({ projects, categories, initialQuery = "", initialCategory = "All" }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const router = useRouter();
  const pathname = usePathname();

  // Push URL updates (debounced for query changes)
  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams();
      if (query) params.set("q", query);
      if (category && category !== "All") params.set("c", category);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    }, 250);
    return () => clearTimeout(t);
  }, [query, category, pathname, router]);

  const filtered = useMemo(() => filterProjects(projects, query, category), [projects, query, category]);

  return (
    <div>
      {/* Search + Category pills */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full h-10 rounded-xl2 border border-divider bg-surface px-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(31,41,55,0.15)]"
              aria-label="Search projects"
            />
            {query && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="-mx-1 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-1 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={
                  "px-3 py-1.5 rounded-full border text-sm transition whitespace-nowrap " +
                  (category === cat
                    ? "bg-[rgba(31,41,55,0.08)] dark:bg-[rgba(255,255,255,0.08)] border-divider"
                    : "bg-surface border-divider hover:bg-[rgba(0,0,0,0.03)]")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
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

