import Sidebar from '@/components/sidebar';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#041124] text-white lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-[#07132A]/95 p-10 shadow-panel">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-teal">Application</p>
            <h1 className="text-4xl font-semibold text-white">Apply to WorkMasters Launchpad</h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Complete the application to join the six-month cohort. Selected participants receive mentorship, sessions, and a structured pathway to revenue and investment growth.
            </p>
          </div>
          <form className="mt-10 grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Full name
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="text" name="name" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Email
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="email" name="email" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Phone
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="tel" name="phone" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Gender
              <select className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
                <option>Prefer not to say</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Occupation
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="text" name="occupation" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Current income source
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="text" name="incomeSource" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Current monthly income
              <input className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" type="text" name="monthlyIncome" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Track selection
              <select className="w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="track">
                <option>Investor</option>
                <option>Freelancer</option>
                <option>Entrepreneur</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
              Why do you want to join?
              <textarea className="min-h-[120px] w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="motivation" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
              Main productivity challenge
              <textarea className="min-h-[120px] w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="challenge" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
              6-month goal
              <textarea className="min-h-[120px] w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="goal" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
              Vision statement
              <textarea className="min-h-[120px] w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean" name="vision" />
            </label>
          </form>
          <div className="mt-8 flex justify-end">
            <button className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal/90">
              Submit Application
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
