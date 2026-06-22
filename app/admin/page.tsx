import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const metrics = [
  { label: 'Total participants', value: '45' },
  { label: 'Active participants', value: '42' },
  { label: 'Total revenue generated', value: '$314K' },
  { label: 'Total investments', value: '$46K' },
  { label: 'Attendance rate', value: '92%' },
  { label: 'Assignment completion', value: '84%' }
];

const sections = [
  'Participants',
  'Applications',
  'Sessions',
  'Assignments',
  'Resources',
  'Mentors',
  'Investments',
  'Creations',
  'Pods'
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Admin Dashboard" subtitle="Manage participants, applications, and program progress from one workspace." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Admin tools</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {sections.map((item) => (
                <button key={item} className="rounded-3xl border border-white/10 bg-[#08122A]/95 px-5 py-4 text-left text-sm text-slate-200 transition hover:border-ocean/40">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
