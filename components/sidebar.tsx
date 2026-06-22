import Link from 'next/link';
import { Briefcase, BookOpen, Compass, Layers, CheckSquare, PieChart, ShieldCheck, Sparkles, Trophy, Users, Zap } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: PieChart },
  { label: 'My Journey', href: '/dashboard', icon: Compass },
  { label: 'Sessions', href: '/sessions', icon: BookOpen },
  { label: 'Learning Hub', href: '/learning-hub', icon: Layers },
  { label: 'Assignments', href: '/assignments', icon: CheckSquare },
  { label: 'Resources', href: '/resources', icon: ShieldCheck },
  { label: 'Mentorship', href: '/mentorship', icon: Users },
  { label: 'Investments', href: '/investments', icon: Sparkles },
  { label: 'My Creations', href: '/my-creations', icon: Trophy },
  { label: 'Visionary Pods', href: '/visionary-pods', icon: Zap }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-white/10 lg:bg-[#07112C]/90 lg:px-6 lg:py-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-ocean/10 text-ocean">
          WM
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">WorkMasters</p>
          <p className="font-semibold text-white">Launchpad</p>
        </div>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-4 w-4 text-slate-400 group-hover:text-teal" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
