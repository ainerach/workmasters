import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { ArrowRight, Sparkles, Briefcase, Users, ShieldCheck } from 'lucide-react';

const pillars = [
  { title: 'DISCOVER', text: 'Understand yourself, your strengths, opportunities, and long-term vision.' },
  { title: 'PRODUCE', text: 'Create meaningful work, income streams, offers, products, and businesses.' },
  { title: 'MULTIPLY', text: 'Invest capital, grow assets, and develop systems that increase output.' },
  { title: 'MANAGE', text: 'Steward your time, money, relationships, and opportunities wisely.' },
  { title: 'EXPAND', text: 'Become a builder, leader, investor, and contributor capable of creating long-term impact.' }
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-10 lg:px-20 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(360px,0.9fr)]">
          <section className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-ocean/10 px-4 py-1 text-sm text-ocean ring-1 ring-ocean/20">
              Annual membership — renewable every 12 months
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Build More. Earn More. Invest More.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A private membership community for professionals, entrepreneurs, freelancers, and investors committed to increasing productivity, growing income, and building long-term wealth.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy shadow-glow transition hover:bg-teal/90">
                Apply for Membership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
                Member Login
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/login?role=PARTICIPANT" className="inline-flex flex-1 items-center justify-center rounded-full border border-teal bg-teal/10 px-6 py-3 text-sm font-semibold text-teal transition hover:bg-teal/20">
                Participant Login
              </Link>
              <Link href="/login?role=MENTOR" className="inline-flex flex-1 items-center justify-center rounded-full border border-blue-400 bg-blue-400/10 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-400/20">
                Mentor Login
              </Link>
              <Link href="/login?role=ADMIN" className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-400 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/6">
                Admin Login
              </Link>
            </div>

            <section className="mt-10 space-y-8">
              <PageHeader title="Why WorkMasters" subtitle="Most communities stop at learning. WorkMasters is built around execution." />
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Members do not simply attend sessions. They learn together, build together, invest together, and operate using shared productivity and business systems to create long-term value.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                  <h3 className="text-lg font-semibold text-white">Learn Together</h3>
                  <p className="mt-2 text-sm text-slate-300">Access practical frameworks, masterclasses, tools, and systems that improve personal and professional performance.</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                  <h3 className="text-lg font-semibold text-white">Build Together</h3>
                  <p className="mt-2 text-sm text-slate-300">Apply what you learn through projects, assignments, accountability pods, and execution challenges.</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                  <h3 className="text-lg font-semibold text-white">Invest Together</h3>
                  <p className="mt-2 text-sm text-slate-300">Participate in real investment opportunities while developing discipline around capital allocation and ownership.</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                  <h3 className="text-lg font-semibold text-white">Grow Together</h3>
                  <p className="mt-2 text-sm text-slate-300">Operate using shared productivity, planning, business, and wealth-building systems that compound over time.</p>
                </article>
              </div>
            </section>
          </section>

          <aside className="rounded-[32px] border border-white/10 bg-surface/90 p-8 shadow-panel backdrop-blur-xl">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0D1A35]/90 p-6">
                <h4 className="text-sm uppercase tracking-[0.24em] text-teal">Annual Membership</h4>
                <p className="mt-3 text-3xl font-semibold text-white">$600<span className="text-base font-medium text-slate-300">/year</span></p>
                <p className="mt-2 text-sm text-slate-300">Renewable Every 12 Months</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li>✓ Monthly Physical Sessions</li>
                  <li>✓ Monthly Online Sessions</li>
                  <li>✓ Accountability Pods</li>
                  <li>✓ Quarterly Mentor Check-ins</li>
                  <li>✓ Investment Opportunities</li>
                  <li>✓ Resource Library</li>
                  <li>✓ Productivity Systems</li>
                  <li>✓ Builder Network</li>
                </ul>
                <div className="mt-6">
                  <Link href="/apply" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-95">Apply for Membership</Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/90 p-6">
                <h5 className="text-sm uppercase tracking-[0.24em] text-slate-200">Current investment opportunities</h5>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>Coffee</li>
                  <li>Cocoa</li>
                  <li>Gold</li>
                  <li>Transportation</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <article key={p.title} className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{p.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <PageHeader title="What Makes WorkMasters Different?" subtitle="A membership built for production, wealth creation, and real outcomes." />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
              <h4 className="text-lg font-semibold text-white">Most Communities</h4>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
                <li>Attend events</li>
                <li>Consume information</li>
                <li>Learn concepts</li>
                <li>Network occasionally</li>
                <li>Wait for opportunities</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6">
              <h4 className="text-lg font-semibold text-white">WorkMasters Members</h4>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
                <li>Produce meaningful work</li>
                <li>Build income streams</li>
                <li>Acquire clients</li>
                <li>Invest consistently</li>
                <li>Build assets</li>
                <li>Operate systems</li>
                <li>Create opportunities</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
