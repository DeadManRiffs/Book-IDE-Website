"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/library', label: 'Library' },
  { href: '/editor', label: 'Editor' },
  { href: '/cover-editor', label: 'Cover Editor' },
  { href: '/export', label: 'Export' },
  { href: '/auth', label: 'Sign In' },
];

export default function SiteNav() {
  const pathname = usePathname() || '/';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="bg-gray-950/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="font-header font-semibold tracking-wide">
            <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-turquoise rounded px-1">
              Book<span className="text-blue-400">IDE</span>
            </Link>
          </div>
          <ul className="flex items-center gap-2 sm:gap-4">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={clsx(
                      'px-3 py-1.5 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-turquoise',
                      isActive ? 'bg-blue-600/20 text-white border border-blue-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
