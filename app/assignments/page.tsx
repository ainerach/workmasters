import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const assignments = [
  { title: 'Design client engagement plan', session: 'Self-Discovery', due: 'Jul 10 2026', status: 'In Progress' },
  { title: 'Investment target mapping', session: 'Investment Must Be Personal', due: 'Jul 14 2026', status: 'Not Started' },
  { title: 'Weekly execution review', session: 'From Household to Homestead', due: 'Jul 18 2026', status: 'Submitted' }
];

const statusColors: Record<string, string> = {
  'Not Started': 'bg-white/5 text-slate-300',
  'In Progress': 'bg-ocean/10 text-ocean',
  Submitted: 'bg-teal/10 text-teal',
  Reviewed: 'bg-gold/10 text-gold'
};

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Assignments" subtitle="Current work, session context, and submission status." />
          <div className="mt-10 grid gap-6">
            {assignments.map((assignment) => (
              <div key={assignment.title} className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{assignment.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">Related session: {assignment.session}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusColors[assignment.status]}`}>
                    {assignment.status}
                  </span>
                </div>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-300">Due date: {assignment.due}</p>
                  <button className="rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white transition hover:bg-ocean/90">Submit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
