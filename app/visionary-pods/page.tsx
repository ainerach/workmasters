import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';
import PodCard from '@/components/pod-card';

const pods = [
  { name: 'Pod Alpha', members: 'Shamis, Aaliyah, Kofi', focus: 'Revenue accountability and investment clarity', progress: 68, nextMeeting: 'Jul 1 2026' },
  { name: 'Pod Beta', members: 'Nia, Omar, Maya', focus: 'Client systems and quarterly launch planning', progress: 54, nextMeeting: 'Jul 3 2026' },
  { name: 'Pod Gamma', members: 'Jade, Ethan, Mina', focus: 'Offer development and growth alignment', progress: 48, nextMeeting: 'Jul 5 2026' }
];

export default function VisionaryPodsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Visionary Pods" subtitle="Small accountability groups supporting weekly focus and growth." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pods.map((pod) => (
              <PodCard key={pod.name} {...pod} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
