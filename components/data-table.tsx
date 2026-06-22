interface DataTableProps {
  columns: string[];
  rows: Array<string[]>;
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1733]/95 shadow-panel">
      <div className="grid grid-cols-[1fr_repeat(3,minmax(120px,1fr))] gap-4 border-b border-white/10 bg-[#081432]/95 px-6 py-4 text-sm uppercase tracking-[0.24em] text-slate-400">
        {columns.map((column) => (
          <div key={column}>{column}</div>
        ))}
      </div>
      <div className="divide-y divide-white/5 text-sm text-slate-300">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-[1fr_repeat(3,minmax(120px,1fr))] gap-4 px-6 py-4">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
