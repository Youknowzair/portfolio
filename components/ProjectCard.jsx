export default function ProjectCard({ project }) {
  return (
    <div className="bg-surface border border-divider rounded-xl2 overflow-hidden card-hover flex flex-col">
      <div className="aspect-[16/9] bg-[rgb(240,242,247)] dark:bg-[rgb(20,24,32)] flex items-center justify-center text-text-muted text-sm">
        {/* Placeholder image box; replace with <Image /> if you add real screenshots */}
        <span className="opacity-70 text-xs sm:text-sm text-center px-2">{project.imageAlt}</span>
      </div>

      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold leading-tight">{project.title}</h3>
            <p className="mt-1 text-xs text-text-secondary line-clamp-2">{project.description}</p>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 text-text-secondary">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-text transition p-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.85 3.14 8.96 7.49 10.41.55.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.04-3.05.66-3.69-1.31-3.69-1.31-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.68 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.47-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.17 1.12-2.94-.11-.28-.48-1.43.11-2.99 0 0 .93-.3 3.05 1.12a10.58 10.58 0 0 1 2.78-.37c.94 0 1.89.12 2.78.37 2.12-1.42 3.05-1.12 3.05-1.12.59 1.56.22 2.71.11 2.99.69.77 1.12 1.74 1.12 2.94 0 4.21-2.57 5.14-5.02 5.41.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 .0.29.2.63.77.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z"/>
                </svg>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Live"
                className="hover:text-text transition p-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 text-[10px] sm:text-[11px]">
          {project.tech?.slice(0,4).map((t) => (
            <span key={t} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-divider">{t}</span>
          ))}
          {project.tech?.length > 4 && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-divider text-text-muted">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="mt-auto pt-2 sm:pt-3">
          <a href={`/projects/${project.id}`} className="text-xs font-medium text-text-secondary hover:text-text transition">View Details →</a>
        </div>
      </div>
    </div>
  );
}

