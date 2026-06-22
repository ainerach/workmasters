import Sidebar from '@/components/sidebar';
import PageHeader from '@/components/page-header';
import InvestmentCard from '@/components/investment-card';
import DataTable from '@/components/data-table';

const categories = [
  { title: 'Commodities', status: 'Active', amount: '$320' },
  { title: 'Coffee and Cocoa', status: 'Active', amount: '$210' },
  { title: 'Gold', status: 'Planned', amount: '$140' },
  { title: 'Transportation', status: 'Active', amount: '$330' }
];

const rows = [
  ['Coffee allocation', 'Commodities', '$210', 'Accepted'],
  ['Gold reserve plan', 'Investing', '$140', 'Pending'],
  ['Transport equity', 'Commodities', '$330', 'Accepted']
];

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="rounded-[32px] border border-white/10 bg-[#07132A]/95 p-8 shadow-panel">
          <PageHeader title="Investments" subtitle="Track your $1,000 investment target for December 2026." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Total invested</p>
                <h3 className="mt-3 text-4xl font-semibold text-white">$1,000</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">Remaining balance to goal: $0. Keep building diversified holdings.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {categories.map((category) => (
                  <InvestmentCard key={category.title} title={category.title} status={category.status} amount={category.amount} detail="Target allocation for this quarter." />
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Add investment</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-3xl border border-white/10 bg-[#08122A]/95 px-4 text-white outline-none focus:border-ocean" placeholder="Amount" />
                  <select className="h-12 rounded-3xl border border-white/10 bg-[#08122A]/95 px-4 text-white outline-none focus:border-ocean">
                    <option>Commodities</option>
                    <option>Coffee and Cocoa</option>
                    <option>Gold</option>
                    <option>Transportation</option>
                  </select>
                  <button className="col-span-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal/90">Add investment</button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0B1730]/95 p-6 shadow-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Investment history</p>
                <div className="mt-6">
                  <DataTable columns={['Investment', 'Category', 'Amount', 'Status']} rows={rows} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
