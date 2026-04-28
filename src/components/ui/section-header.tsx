export function SectionHeader({
  label,
  heading,
  subtext,
  mutedLine,
}: {
  label: string;
  heading: string;
  subtext: string;
  mutedLine: string;
}) {
  return (
    <div className="mx-auto max-w-2xl mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
        {heading}
        <br />
        <span className="text-muted-foreground/40">{mutedLine}</span>
      </h2>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
        {subtext}
      </p>
    </div>
  );
}
