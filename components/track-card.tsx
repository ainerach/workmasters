interface TrackCardProps {
  track: string;
  description: string;
  progress: number;
}

export default function TrackCard({ track, description, progress }: TrackCardProps) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#11234A]/95 p-6 shadow-panel">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Current track</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{track}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Program progress</span>
          <span className="font-semibold text-white">{progress}%</span>
        </div>
        <div className="mt-3 h-3 rounded-full bg-white/10">
          <div className="h-3 rounded-full bg-ocean" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
