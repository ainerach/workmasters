import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const categories = [
  { name: 'Productivity', items: 12 },
  { name: 'Wealth Building', items: 8 },
  { name: 'Investing', items: 7 },
  { name: 'Freelancing', items: 9 },
  { name: 'Business', items: 11 },
  { name: 'Leadership', items: 6 }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Resources" subtitle="Focused categories to support your productivity, investing, and leadership journey." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.name} className="rounded-3xl border border-white/10 bg-[#0C1836]/95 p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{category.items} curated resources for the cohort.</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
