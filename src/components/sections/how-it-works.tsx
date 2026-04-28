import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <SectionContainer id="how-it-works">
      <SectionHeader
        label="How it works"
        heading="From draft to deposit"
        mutedLine="in minutes"
        subtext="Four simple steps to transform your billing from a headache into a competitive advantage."
      />

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute top-8 left-[12%] right-[12%] hidden lg:block">
          <svg className="w-full h-8" preserveAspectRatio="none" viewBox="0 0 800 32" fill="none">
            {[0, 200, 400, 600].map((x) => (
              <path
                key={x}
                d={`M${x} 16 Q ${x + 100} 16, ${x + 200} 16`}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="text-border/50"
              />
            ))}
          </svg>
        </div>

        {steps.map((item) => (
          <div key={item.step} className="relative flex flex-col items-center text-center group">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
              <span className="font-serif text-xl font-bold text-primary tracking-tight">
                {item.step}
              </span>
            </div>
            <h3 className="mt-6 font-serif text-lg font-semibold tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[260px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
