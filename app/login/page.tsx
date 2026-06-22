'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const roleLabels: Record<string, string> = {
  PARTICIPANT: 'Participant',
  MENTOR: 'Mentor',
  ADMIN: 'Admin'
};

export default function LoginPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'PARTICIPANT';
  const roleLabel = roleLabels[role] ?? 'Participant';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const buttonText = useMemo(() => {
    return role === 'ADMIN' ? 'Sign in as admin' : `Sign in as ${roleLabel}`;
  }, [role, roleLabel]);

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
        <form
          className="mt-10 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            signIn('credentials', {
              email,
              password,
              role,
              callbackUrl: '/dashboard'
            });
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-white/10 bg-[#0A1733]/95 px-4 py-3 text-white outline-none focus:border-ocean"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean/90"
          >
            {buttonText}
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row">
          <Link href="/login?role=PARTICIPANT" className="flex-1 rounded-full border border-teal px-4 py-3 text-center transition hover:bg-teal/10">
            Participant
          </Link>
          <Link href="/login?role=MENTOR" className="flex-1 rounded-full border border-blue-400 px-4 py-3 text-center transition hover:bg-blue-400/10">
            Mentor
          </Link>
          <Link href="/login?role=ADMIN" className="flex-1 rounded-full border border-gold px-4 py-3 text-center transition hover:bg-gold/10">
            Admin
          </Link>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0A1733]/95 p-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-100">Seeded test credentials</p>
          <ul className="mt-3 space-y-2">
            <li>Participant: shamis@workmasters.com / shamis123</li>
            <li>Mentor: mentor@workmasters.com / mentor123</li>
            <li>Admin: admin@workmasters.com / admin123</li>
          </ul>
        </div>

        <Link href="/apply" className="mt-6 block text-center text-sm text-slate-300 underline underline-offset-4">
          Need to apply instead?
        </Link>
      </div>
    </div>
  );
}
