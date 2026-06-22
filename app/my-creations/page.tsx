import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';
import CreationCard from '@/components/creation-card';

const creations = [
  { title: 'Brand Refresh Project', outcome: 'Improved client conversion by 24%', clients: '4', revenue: '$6,800', status: 'In Progress' },
  { title: 'Lead Magnet Campaign', outcome: 'Generated 120 qualified leads', clients: '2', revenue: '$2,200', status: 'Completed' }
];

export default function MyCreationsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="My Creations" subtitle="Top creations, client impact, and growth notes from Shamis' journey." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {creations.map((creation) => (
              <CreationCard key={creation.title} {...creation} />
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Growth notes</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Shamis is building deeper client value through refined offers and stronger follow-up systems that move prospects to recurring engagements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
