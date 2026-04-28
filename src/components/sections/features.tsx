import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { features } from "@/lib/data";

export function Features() {
  return (
    <SectionContainer id="features" className="bg-surface/30">
      <SectionHeader
        label="Features"
        heading="Everything you need"
        mutedLine="to run billing"
        subtext="From creation to collection, InvoiceFlow handles the entire invoice lifecycle so you can focus on your business."
      />

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:shadow-xl hover:shadow-stone-900/[0.05] hover:-translate-y-1.5 hover:border-primary/15 grain-overlay"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-surface/60 text-primary transition-all duration-400 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/15 group-hover:scale-110">
                <feature.icon />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
