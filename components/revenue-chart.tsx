'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Feb', revenue: 8200 },
  { month: 'Mar', revenue: 9400 },
  { month: 'Apr', revenue: 11800 },
  { month: 'May', revenue: 13600 },
  { month: 'Jun', revenue: 15400 },
  { month: 'Jul', revenue: 19200 }
];

export default function RevenueChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-5 shadow-panel">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Revenue trend</p>
          <p className="mt-2 text-lg font-semibold text-white">Last six months</p>
        </div>
        <p className="text-sm font-semibold text-teal">+34% growth</p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1572E8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1572E8" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1E2D52" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
            <Tooltip contentStyle={{ backgroundColor: '#0A1730', border: '1px solid rgba(148, 163, 184, 0.2)', color: '#F8FAFC' }} />
            <Area type="monotone" dataKey="revenue" stroke="#1572E8" fill="url(#revenueGradient)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
