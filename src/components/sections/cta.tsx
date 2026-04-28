import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { ArrowRightIcon } from "@/components/icons";

export function CTA() {
  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent to-accent/95 px-8 py-24 text-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/25 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-from)_0%,_transparent_60%)] from-amber-700/20 pointer-events-none" />
        </div>

        <div className="absolute top-12 right-16 w-px h-24 rotate-[30deg] bg-gradient-to-b from-primary/40 to-transparent hidden sm:block" />
        <div className="absolute bottom-12 left-16 w-px h-32 -rotate-[30deg] bg-gradient-to-t from-primary/30 to-transparent hidden sm:block" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl lg:text-6xl leading-[1.08]">
            Ready to get
            <br />
            paid faster?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-accent-foreground/65 max-w-lg mx-auto">
            Join 10,000+ businesses that use InvoiceFlow to create invoices,
            scan receipts, and automate their billing. Free 14-day trial — no
            credit card required.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="!bg-white !text-[#1a1612] hover:!bg-white/95 shadow-xl shadow-black/20 font-semibold group"
              href="/signup"
            >
              Start free trial
              <ArrowRightIcon />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="!text-white/80 hover:!text-white hover:!bg-white/10 font-medium"
              href="#features"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
