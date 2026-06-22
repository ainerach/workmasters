import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const categories = [
  'Tools',
  'Masterclasses',
  'Productivity',
  'Leadership',
  'Digital Skills',
  'Entrepreneurship',
  'AI for Work',
  'Financial Literacy',
  'Remote Work'
];

export default function LearningHubPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Learning Hub" subtitle="Core categories for practical skill development and program mastery." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category} className="rounded-3xl border border-white/10 bg-[#0C1835]/95 p-6 transition hover:-translate-y-1 hover:border-ocean/40">
                <h3 className="text-xl font-semibold text-white">{category}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Practical resources, templates, and sessions designed to support sustained progress in {category.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
