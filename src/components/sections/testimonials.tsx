import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials, integrationBrands } from "@/lib/data";

export function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <SectionHeader
        label="Testimonials"
        heading="Trusted by thousands"
        mutedLine="of businesses"
        subtext="See why freelancers, agencies, and enterprises choose InvoiceFlow to run their billing."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="group flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:shadow-xl hover:shadow-stone-900/[0.04] hover:-translate-y-1 hover:border-border"
          >
            <div className="text-6xl font-serif font-bold text-primary/10 leading-none select-none">
              &ldquo;
            </div>
            <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
              {t.quote}
            </p>
            <footer className="mt-7 pt-6 border-t border-border/40">
              <div className="font-serif font-semibold tracking-tight">{t.author}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-24 border-t border-border/40 pt-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Integrates with your favorite tools
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {integrationBrands.map((brand) => (
            <span
              key={brand}
              className="font-serif text-lg font-medium tracking-tight text-muted-foreground/40 hover:text-muted-foreground transition-all duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
