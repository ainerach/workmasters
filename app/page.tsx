import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { ArrowRight, Award, Briefcase, Sparkles, Target, ShieldCheck } from 'lucide-react';

const sections = [
  { title: 'Discover', text: 'Explore your strengths, income pathways, and the goals that matter most for the next six months.' },
  { title: 'Produce', text: 'Build consistent revenue, client momentum, and high-value deliverables with systems that scale.' },
  { title: 'Multiply', text: 'Grow your capital, skills, and influence through investments, offers, and premium collaboration.' },
  { title: 'Manage', text: 'Track progress, sessions, assignments, and accountability from a single professional workspace.' },
  { title: 'Expand', text: 'Move into investor, freelancer, or entrepreneur leadership with clarity, confidence, and momentum.' }
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-10 lg:px-20 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(320px,0.9fr)]">
          <section className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-ocean/10 px-4 py-1 text-sm text-ocean ring-1 ring-ocean/20">
              Launchpad for ambitious productivity journeys
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                WorkMasters Launchpad is the premium growth platform for investors, freelancers, and entrepreneurs.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Join a carefully curated six-month productivity program that supports selected members with mentorship, sessions, assignments, and investment planning.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy shadow-glow transition hover:bg-teal/90">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
                Explore Dashboard
              </Link>
            </div>
          </section>
          <section className="rounded-[32px] border border-white/10 bg-surface/90 p-8 shadow-panel backdrop-blur-xl">
            <PageHeader title="Why WorkMasters Launchpad" subtitle="A premium program engineered for consistent, measurable growth." />
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-[#0D1A35]/90 p-6">
                <div className="flex items-center gap-3 text-teal">
                  <Award className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.24em] text-teal">Program focus</p>
                </div>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Cohort-based learning with real assignments, weekly sessions, and tailored mentorship for long-term revenue and investment outcomes.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#0B1730]/90 p-6">
                  <div className="flex items-center gap-3 text-gold">
                    <Target className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-100">Impact</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Build sustainable income, launch service offers, and structure investments around real personal growth.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#0B1730]/90 p-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Briefcase className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-100">Structure</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Integrated tools, progress tracking, and accountability pods to keep your six-month roadmap on pace.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-7 shadow-glow">
              <div className="flex items-center gap-3 text-teal">
                <Sparkles className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{section.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
