import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { dashboardStats, dashboardInvoices } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-from)_0%,_transparent_65%)] from-primary/6" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-from)_0%,_transparent_65%)] from-amber-700/4" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-accent/3" />
        <div className="absolute top-24 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 left-0 w-px h-48 bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up mb-10">
            <Badge className="border-primary/15 bg-primary/[0.04] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now in public beta
            </Badge>
          </div>

          <h1 className="animate-blur-in animation-delay-100 font-serif text-5xl font-bold tracking-tight leading-[1.08] sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-foreground">Billing</span>
            <br />
            <span className="text-foreground">that finally</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-amber-700 bg-clip-text text-transparent">
              makes sense
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-300 mt-10 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-xl mx-auto font-light tracking-wide">
            Create professional invoices, scan receipts with AI, and automate
            your billing workflow. Get paid faster with smart reminders and
            real-time tracking.
          </p>

          <div className="animate-fade-in-up animation-delay-400 mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href="/signup" className="group">
              Start free trial
              <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              See how it works
            </Button>
          </div>

          <p className="animate-fade-in animation-delay-700 mt-8 text-sm tracking-widest uppercase text-muted-foreground/60">
            No credit card required &middot; Free 14-day trial
          </p>
        </div>

        <div className="animate-blur-in animation-delay-500 mx-auto mt-20 max-w-5xl">
          <div className="relative rounded-2xl border border-border/50 bg-card shadow-2xl shadow-stone-900/[0.04] overflow-hidden grain-overlay">
            <div className="flex items-center gap-2 border-b border-border/40 bg-surface/50 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs tracking-wide text-muted-foreground font-mono">
                Dashboard &mdash; InvoiceFlow
              </span>
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-3">
              {dashboardStats.map((stat, i) => (
                <div key={stat.title} className="animate-blur-in" style={{ animationDelay: `${600 + i * 100}ms` }}>
                  <StatCard {...stat} />
                </div>
              ))}
            </div>

            <div className="mx-5 mb-5 overflow-hidden rounded-xl border border-border/40 bg-surface/30 px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold tracking-wide">Recent Invoices</span>
                <span className="text-xs font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200">
                  View all &rarr;
                </span>
              </div>
              <div className="space-y-1.5">
                {dashboardInvoices.map((row) => (
                  <div
                    key={row.client}
                    className="flex items-center justify-between rounded-lg bg-card/60 px-4 py-3 text-sm transition-all duration-200 hover:bg-card hover:shadow-sm"
                  >
                    <span className="font-medium">{row.client}</span>
                    <div className="flex items-center gap-3">
                      <span className="tabular-nums text-muted-foreground font-mono text-xs">
                        {row.amount}
                      </span>
                      <span
                        className={[
                          "rounded-md px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
                          row.status === "Paid" && "bg-emerald-50 text-emerald-700",
                          row.status === "Pending" && "bg-amber-50 text-amber-700",
                          row.status === "Overdue" && "bg-red-50 text-red-700",
                        ].join(" ")}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#features"
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors duration-300 group"
            aria-label="Scroll to features"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Explore</span>
            <span className="animate-float">
              <ChevronDownIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
