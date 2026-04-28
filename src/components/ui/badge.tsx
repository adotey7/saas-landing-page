type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground tracking-wide shadow-sm backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
