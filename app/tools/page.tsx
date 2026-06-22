import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const tools = [
  { title: 'Productivity Blueprint', description: 'A practical template for weekly focus and execution.' },
  { title: 'Weekly Execution Dashboard', description: 'Visualize priorities, revenue, and progress each week.' },
  { title: 'Investment Calculator', description: 'Track your path toward the $1,000 investment target.' },
  { title: 'Vision Planning Tool', description: 'Translate your six-month goals into a clear action plan.' },
  { title: 'Offer Design Template', description: 'Structure premium offers for investors, freelancers, and entrepreneurs.' },
  { title: 'Financial Discipline Tracker', description: 'Measure savings, expenses, and capital allocation weekly.' }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Tools & Masterclasses" subtitle="Practical assets to help you execute, measure, and optimize your progress." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-3xl border border-white/10 bg-[#0C1835]/95 p-6 shadow-panel">
                <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
