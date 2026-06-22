interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-[#08112C]/80 p-8 text-center text-slate-300">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</p>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}
