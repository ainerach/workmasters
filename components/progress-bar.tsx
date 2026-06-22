interface ProgressBarProps {
  label: string;
  value: number;
  accent?: 'blue' | 'teal';
}

const accentStyles = {
  blue: 'bg-ocean',
  teal: 'bg-teal'
};

export default function ProgressBar({ label, value, accent = 'teal' }: ProgressBarProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span className="font-semibold text-white">{value}%</span>
      </div>
      <div className="h-3 rounded-full bg-white/10">
        <div className={`h-3 rounded-full ${accentStyles[accent]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
