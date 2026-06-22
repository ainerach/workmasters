interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1730]/90 p-5 shadow-panel">
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      {detail ? <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p> : null}
    </div>
  );
}
