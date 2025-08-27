import { projects } from '../../../data/projects';
import ProjectDetails from '../../../components/ProjectDetails';

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.id === params.id);
  return {
    title: project ? `${project.title} • Project` : 'Project',
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) {
    return (
      <main className="min-h-screen bg-background text-text py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <a href="/projects" className="text-sm text-text-secondary hover:text-text">← Back to Projects</a>
          <p className="text-text-secondary mt-4">Project not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-text py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <a href="/projects" className="text-sm text-text-secondary hover:text-text">← Back to Projects</a>
        <ProjectDetails project={project} />
      </div>
    </main>
  );
}

