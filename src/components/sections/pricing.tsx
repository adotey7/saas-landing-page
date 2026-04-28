import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { CheckIcon } from "@/components/icons";
import { tiers } from "@/lib/data";

export function Pricing() {
  return (
    <SectionContainer id="pricing" className="bg-surface/30">
      <SectionHeader
        label="Pricing"
        heading="Plans that scale"
        mutedLine="with you"
        subtext="Start free and upgrade when you need more. No hidden fees, cancel anytime."
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3 lg:items-start">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={[
              "relative flex flex-col rounded-2xl border p-8 transition-all duration-500",
              tier.featured
                ? "border-primary/30 bg-card shadow-2xl shadow-primary/[0.08] scale-[1.03] z-10 ring-1 ring-primary/10"
                : "border-border/50 bg-card hover:border-border hover:shadow-lg",
            ].join(" ")}
          >
            {tier.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-lg shadow-primary/25">
                Most popular
              </div>
            )}

            <div className={tier.featured ? "mt-1" : ""}>
              <h3 className="font-serif text-xl font-semibold tracking-tight">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
            </div>

            <div className="mt-7 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-bold tracking-tight leading-none">
                {tier.price}
              </span>
              <span className="text-sm text-muted-foreground font-medium">{tier.period}</span>
            </div>

            <ul className="mt-9 flex-1 space-y-4">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={tier.featured ? "primary" : "outline"}
              size="lg"
              href={tier.featured ? "/signup?plan=pro" : "/signup"}
              className={[
                "mt-9 w-full font-semibold tracking-wide",
                tier.featured ? "shadow-lg shadow-primary/20" : "",
              ].join(" ")}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
