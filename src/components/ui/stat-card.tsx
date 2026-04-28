export function StatCard({
  title,
  value,
  change,
  trend,
}: {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-surface/50 p-5 transition-all duration-200 hover:bg-surface hover:border-border">
      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
        {title}
      </p>
      <p className="mt-2 font-serif text-[1.75rem] font-bold tracking-tight tabular-nums leading-none">
        {value}
      </p>
      <p
        className={[
          "mt-2 text-xs font-semibold",
          trend === "up" ? "text-emerald-600" : "text-muted-foreground",
        ].join(" ")}
      >
        {change} {trend === "up" && <span>&#8593;</span>}
      </p>
    </div>
  );
}
