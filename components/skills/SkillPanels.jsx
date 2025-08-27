"use client";
import { useState } from 'react';

const groups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', pct: 90 },
      { name: 'Next.js', pct: 85 },
      { name: 'Tailwind', pct: 88 },
      { name: 'TypeScript', pct: 70 }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', pct: 80 },
      { name: 'Express', pct: 75 },
      { name: 'Postgres', pct: 65 }
    ]
  },
  {
    title: 'Tools & Others',
    items: [
      { name: 'Git', pct: 85 },
      { name: 'Docker', pct: 60 },
      { name: 'CI/CD', pct: 55 }
    ]
  }
];

function Progress({ pct }){
  return (
    <div className="w-full bg-[#ffffff10] rounded-full h-2 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function SkillPanels(){
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Skill Highlights</h2>
        <div className="text-sm text-text-secondary">Updated • 2025</div>
      </div>

      <div className="space-y-3">
        {groups.map((g, idx)=> (
          <div key={g.title} className="p-3 bg-surface border border-divider rounded">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{g.title}</div>
              <div className="text-sm text-text-secondary">{g.items.length} skills</div>
            </div>
            <div className="space-y-3">
              {g.items.map(it=> (
                <div key={it.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div>{it.name}</div>
                    <div className="text-xs text-text-secondary">{it.pct}%</div>
                  </div>
                  <Progress pct={it.pct} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-surface border border-divider rounded">
        <h3 className="font-medium mb-2">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-[#ffffff10] text-sm">AWS Certified</span>
          <span className="px-3 py-1 rounded-full bg-[#ffffff10] text-sm">Google Cloud</span>
          <span className="px-3 py-1 rounded-full bg-[#ffffff10] text-sm">Frontend Pro</span>
        </div>
      </div>
    </div>
  );
}
