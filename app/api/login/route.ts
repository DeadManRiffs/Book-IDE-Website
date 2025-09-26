import { NextRequest, NextResponse } from 'next/server';
import { signSession } from '@/lib/session';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body as { email?: string; password?: string };

  const WHITELIST_EMAIL = process.env.WHITELIST_EMAIL || 'deadmanriffs@gmail.com';
  const WHITELIST_PASSWORD = process.env.WHITELIST_PASSWORD || 'Mosteller3301$=pw';

  if (email === WHITELIST_EMAIL && password === WHITELIST_PASSWORD) {
    const token = signSession({ email, plan: 'lifetime', iat: Math.floor(Date.now() / 1000) });
    const res = NextResponse.json({ ok: true, plan: 'lifetime' });
    res.cookies.set('session', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365 * 10,
    });
    return res;
  }

  return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 });
}
