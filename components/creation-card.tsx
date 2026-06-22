interface CreationCardProps {
  title: string;
  outcome: string;
  clients: string;
  revenue: string;
  status: string;
}

export default function CreationCard({ title, outcome, clients, revenue, status }: CreationCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0C1833]/95 p-6 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-400">{outcome}</p>
        </div>
        <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean">
          {status}
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <p className="text-sm text-slate-300"><span className="font-semibold text-white">Clients:</span> {clients}</p>
        <p className="text-sm text-slate-300"><span className="font-semibold text-white">Revenue:</span> {revenue}</p>
      </div>
    </div>
  );
}
