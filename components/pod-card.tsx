interface PodCardProps {
  name: string;
  members: string;
  focus: string;
  progress: number;
  nextMeeting: string;
}

export default function PodCard({ name, members, focus, progress, nextMeeting }: PodCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0C1731]/95 p-6 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-slate-400">{members}</p>
        </div>
        <p className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal">{progress}%</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{focus}</p>
      <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-white">Next meeting:</span> {nextMeeting}</p>
    </div>
  );
}
