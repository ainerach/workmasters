interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="text-base leading-7 text-slate-300">{subtitle}</p> : null}
      {description ? <p className="text-sm leading-6 text-slate-400">{description}</p> : null}
    </div>
  );
}
