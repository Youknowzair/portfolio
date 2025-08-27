import SkillsMap from '../../components/skills/SkillsMap';
import SkillPanels from '../../components/skills/SkillPanels';

export const metadata = {
  title: 'Skills',
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background text-text py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-text-secondary mt-2">Interactive skill network and detailed skill breakdown.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-surface border border-divider rounded-lg p-4 h-[520px]">
              <SkillsMap />
            </div>
          </div>

          <div>
            <SkillPanels />
          </div>
        </div>
      </div>
    </main>
  );
}
