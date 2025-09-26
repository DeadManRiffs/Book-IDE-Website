"use client";
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Login failed');
      }
      router.replace('/library');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-matte-black">
      <GlassCard className="w-full max-w-md flex flex-col items-center gap-6 p-8">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 text-violet-blue inline-block align-middle" aria-hidden>👤</span>
          <span className="h-4 w-4 text-violet-blue inline-block align-middle" aria-hidden>🔒</span>
        </div>
        {error && (
          <div className="w-full text-center text-red-400 text-sm">{error}</div>
        )}
        <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
          {/* email */}
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="placeholder:animate-slide-in"
            required
          />
          {/* password */}
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="placeholder:animate-slide-in"
            required
          />
          <div className="flex flex-col gap-2 mt-4">
            <NeonButton variant="violet" type="submit" disabled={loading}>
              {loading ? '⏳ Logging in...' : '➡️ Login'}
            </NeonButton>
            <NeonButton variant="turquoise" type="button">
              ✨ Start Free Trial
            </NeonButton>
          </div>
        </form>
      </GlassCard>
    </main>
  );
}
