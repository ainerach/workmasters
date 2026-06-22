import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';

const mentors = [
  { name: 'Arielle Mason', specialty: 'Business Growth', note: 'Strengthens offers, pricing, and revenue momentum.' },
  { name: 'Daniel Osei', specialty: 'Investment Strategy', note: 'Supports portfolio decisions and capital allocation discipline.' }
];

const quarters = [
  { label: 'Q1', status: 'Completed' },
  { label: 'Q2', status: 'In Progress' },
  { label: 'Q3', status: 'Not Started' },
  { label: 'Q4', status: 'Not Started' }];

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Mentorship" subtitle="Quarterly progress, mentor profiles, and check-in momentum." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Mentor</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{mentor.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{mentor.specialty}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{mentor.note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Quarterly check-ins</p>
              <div className="mt-6 space-y-4">
                {quarters.map((quarter) => (
                  <div key={quarter.label} className="rounded-3xl border border-white/10 bg-[#08122A]/90 px-5 py-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{quarter.label}</p>
                      <p className="text-sm text-slate-300">{quarter.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-7 w-full rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean/90">
                Book Check-in
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
