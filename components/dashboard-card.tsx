interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  accent?: 'blue' | 'teal' | 'gold';
}

const accentClasses = {
  blue: 'bg-ocean/10 text-ocean',
  teal: 'bg-teal/10 text-teal',
  gold: 'bg-gold/10 text-gold'
};

export default function DashboardCard({ title, value, description, accent = 'blue' }: DashboardCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1730]/90 p-6 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className={`rounded-2xl px-3 py-2 text-xs font-semibold ${accentClasses[accent]}`}>
          {accent.toUpperCase()}
        </div>
      </div>
      {description ? <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p> : null}
    </div>
  );
}
