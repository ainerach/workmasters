'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#041124] px-6 py-10 text-white">
      <div className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-[#07132A]/95 p-10 shadow-panel">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal">Sign in</p>
          <h1 className="text-3xl font-semibold text-white">Access WorkMasters Launchpad</h1>
          <p className="text-sm leading-7 text-slate-300">
            Use your program credentials to enter the dashboard and continue your productivity journey.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          <button
            onClick={() => signIn('credentials')}
            className="w-full rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean/90"
          >
            Sign in with credentials
          </button>
          <Link href="/apply" className="block text-center text-sm text-slate-300 underline underline-offset-4">
            Need to apply instead?
          </Link>
        </div>
      </div>
    </div>
  );
}
