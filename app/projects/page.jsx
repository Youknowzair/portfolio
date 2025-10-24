import { projects, CATEGORIES } from '../../data/projects';
import ProjectsClient from '../../components/ProjectsClient';

export const metadata = {
  title: 'Projects',
  description: 'Explore projects spanning AI, web development, blockchain, and more.'
};

export default function ProjectsPage({ searchParams }) {
  const q = typeof searchParams?.q === 'string' ? searchParams.q : '';
  const c = typeof searchParams?.c === 'string' && CATEGORIES.includes(searchParams.c) ? searchParams.c : 'All';

  return (
    <main className="min-h-screen bg-background text-text py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
          <p className="text-text-secondary mt-2 text-sm sm:text-base">Explore my portfolio of projects spanning AI, web development, blockchain, and more.</p>
        </header>

        <ProjectsClient initialQ={q} initialC={c} projects={projects} categories={CATEGORIES} />
      </div>
    </main>
  );
}

