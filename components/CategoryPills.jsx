"use client";

export default function CategoryPills({ categories, value, onChange }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
      {categories.map((cat) => {
        const active = value === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`${active ? 'bg-[rgb(15,23,42)] text-white dark:bg-white dark:text-[rgb(15,23,42)]' : 'bg-surface text-text-secondary'} border border-divider px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

