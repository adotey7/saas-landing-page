"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-2xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" href="/login">
            Sign in
          </Button>
          <Button size="sm" href="/signup">
            Get started
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            className="relative flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-accent/10"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={[
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-2xl lg:hidden transition-all duration-300",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent",
        ].join(" ")}
      >
        <div className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-base font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-accent/5"
              style={{ animationDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <hr className="my-4 border-border" />
          <Button variant="outline" size="lg" href="/login" className="w-full">
            Sign in
          </Button>
          <Button size="lg" href="/signup" className="w-full">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
