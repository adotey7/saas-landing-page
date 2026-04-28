"use client";

import Link from "next/link";
import { useState } from "react";
import { oauthProviders } from "@/lib/data";

export default function LoginPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleOAuth = (provider: string) => {
    setLoading(provider);
    setTimeout(() => setLoading(null), 2000);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">
          Sign in
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Welcome back. Sign in to your InvoiceFlow account.
        </p>
      </div>

      <div className="space-y-3">
        {oauthProviders.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleOAuth(id)}
            disabled={loading !== null}
            className="group relative flex w-full items-center justify-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-border hover:bg-surface hover:shadow-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Icon />
            <span>Continue with {name}</span>
            {loading === id && (
              <span className="absolute right-4 h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/60" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-3 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
        >
          Sign in with email
        </button>
      </form>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}
