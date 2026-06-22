import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#041124] px-6 py-10 text-white">
      <div className="max-w-xl rounded-[32px] border border-white/10 bg-[#07132A]/95 p-10 text-center shadow-panel">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          The page you are looking for is not available in the WorkMasters Launchpad app.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal/90">
          Return to home
        </Link>
      </div>
    </main>
  );
}
