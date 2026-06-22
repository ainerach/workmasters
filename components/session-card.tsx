interface SessionCardProps {
  title: string;
  date: string;
  highlight: string;
  status: string;
}

export default function SessionCard({ title, date, highlight, status }: SessionCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-[#0A152C]/90 p-6 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-400">{date}</p>
        </div>
        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-teal">
          {status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{highlight}</p>
      <button className="mt-6 inline-flex items-center rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white transition hover:bg-ocean/90">
        Read more
      </button>
    </article>
  );
}
