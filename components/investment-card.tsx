interface InvestmentCardProps {
  title: string;
  status: string;
  amount: string;
  detail: string;
}

export default function InvestmentCard({ title, status, amount, detail }: InvestmentCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0A1631]/95 p-5 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <p className="mt-2 text-xl font-semibold text-white">{amount}</p>
        </div>
        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{detail}</p>
    </div>
  );
}
