import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';
import SessionCard from '@/components/session-card';

const sessions = [
  {
    title: 'Investment Must Be Personal',
    date: 'Apr 08 2026',
    highlight:
      'Investment is not simply about making money. Successful investment should align with personal interests, values, natural strengths, and long-term vision. The group explored the Wealth Triangle: you make money, your business makes money, and your assets make money.',
    status: 'Completed'
  },
  {
    title: 'From Household to Homestead',
    date: 'Apr 15 2026',
    highlight:
      'The session explored the difference between a household and a homestead. A household focuses on consumption, while a homestead focuses on production, systems, income generation, assets, and multiplying resources.',
    status: 'Completed'
  },
  {
    title: 'Self-Discovery',
    date: 'Apr 22 2026',
    highlight:
      'Members reflected on Origin, Identity, and Potential. The session emphasized Be → Do → Have: first become the right person, then do the right work, and finally obtain the desired results.',
    status: 'Completed'
  }
];

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Sessions" subtitle="Completed sessions and key takeaways from the cohort curriculum." />
          <div className="mt-10 grid gap-6">
            {sessions.map((session) => (
              <SessionCard key={session.title} {...session} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
