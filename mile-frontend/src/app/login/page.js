'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import AuthShell from '@/components/AuthShell';

const inputClass = 'mt-2 block h-14 w-full rounded-xl border border-line bg-surface px-4 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-olive focus:ring-2 focus:ring-olive/15';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login({ email, password });
      router.push('/trips');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Good to see you."
      description="Your trips are right where you left them."
      footer={<>New to Milency? <Link href="/register" className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-olive">Create an account</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">Email address</label>
          <input id="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-ink">Password</label>
          <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className={inputClass} placeholder="Enter your password" />
        </div>
        {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}
        <button type="submit" disabled={submitting} className="flex min-h-14 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-surface transition-colors hover:bg-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive disabled:cursor-wait disabled:opacity-60">
          {submitting ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </AuthShell>
  );
}
