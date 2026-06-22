import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';
import TrackCard from '@/components/track-card';
import DashboardCard from '@/components/dashboard-card';
import StatCard from '@/components/stat-card';
import ProgressBar from '@/components/progress-bar';

const journeySteps = [
  { title: 'Intake and clarity', status: 'Completed' },
  { title: 'Offer design', status: 'In Progress' },
  { title: 'Client and revenue', status: 'In Progress' },
  { title: 'Investment planning', status: 'Not Started' }
];

const upcomingSessions = ['Jul 05 2026', 'Jul 12 2026', 'Jul 19 2026'];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="mb-8 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome Back</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white">Welcome Back, Shamis</h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                Your progress is strong. Stay focused on revenue, client relationships, and your investment target for December 2026.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:w-[420px]">
              <DashboardCard title="Revenue generated" value="$19,200" description="Total earned through program collaborations." accent="gold" />
              <DashboardCard title="Program progress" value="54%" description="On track toward the six-month outcome." accent="blue" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <TrackCard track="Freelancer" description="High-value client delivery and scalable service systems." progress={54} />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <StatCard label="Revenue" value="$19.2K" detail="Performance through client work and retainers." />
              <StatCard label="Clients onboarded" value="8" detail="Current relationships moving toward retainer status." />
              <StatCard label="Sessions attended" value="14" detail="Active participation in core weekly sessions." />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Investment goal</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">$1,000 target</h3>
                  </div>
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal">Dec 2026</span>
                </div>
                <div className="mt-6 space-y-3">
                  <ProgressBar label="Goal completion" value={45} accent="blue" />
                  <p className="text-sm leading-6 text-slate-300">Keep allocating savings, network deals, and recurring revenue toward your investment milestone.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Upcoming sessions</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {upcomingSessions.map((session) => (
                    <li key={session} className="rounded-3xl bg-white/5 px-4 py-3">{session}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-[#0E1A34]/95 p-6 shadow-panel">
              <PageHeader title="Journey roadmap" subtitle="Track your milestones across the six-month program." />
              <div className="mt-6 space-y-4">
                {journeySteps.map((step) => (
                  <div key={step.title} className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#08122A]/90 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-300">{step.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Goals achieved</p>
                <p className="mt-4 text-4xl font-semibold text-white">5</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Main challenge</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">Maintaining energy and consistent execution while balancing client commitments and capital growth.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
