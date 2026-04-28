import { Logo } from "@/components/ui/logo";
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Smart invoice and receipt management for modern businesses.
              Create, send, and get paid — all in one place.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif text-sm font-semibold tracking-wide text-foreground">
                {category}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground/70 tracking-wide">
            &copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { icon: TwitterIcon, label: "Twitter" },
              { icon: GitHubIcon, label: "GitHub" },
              { icon: LinkedInIcon, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
