import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#041124]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <Link href="/" className="text-lg font-semibold text-white">
          WorkMasters
        </Link>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/apply" className="rounded-full border border-teal px-4 py-2 text-sm font-semibold text-teal transition hover:bg-teal/10">
            Apply as Participant
          </Link>
          <Link href="/login?role=PARTICIPANT" className="rounded-full border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/10">
            Participant Login
          </Link>
          <Link href="/login?role=MENTOR" className="rounded-full border border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10">
            Mentor Login
          </Link>
          <Link href="/login?role=ADMIN" className="rounded-full border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-400/10">
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
}
