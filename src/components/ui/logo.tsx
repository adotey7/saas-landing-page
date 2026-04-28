import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group w-fit">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-base font-bold text-primary-foreground transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
        <span className="relative z-10">I</span>
      </span>
      <span className="font-serif text-xl font-bold tracking-tight">
        InvoiceFlow
      </span>
    </Link>
  );
}
