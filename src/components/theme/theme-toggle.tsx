"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/theme-provider";
import { SunIcon, MoonIcon, MonitorIcon } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const cycle = () => {
    const order: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  if (!mounted) {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground">
        <SunIcon />
      </span>
    );
  }

  const iconClass = (active: boolean, extra: string) =>
    `h-4 w-4 absolute transition-all duration-500 ${active ? "opacity-100 scale-100 rotate-0" : `opacity-0 scale-50 ${extra}`}`;

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${theme}. Click to change.`}
      title={`Theme: ${theme}`}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-surface"
    >
      <span className={iconClass(theme === "light", "rotate-90")}>
        <SunIcon />
      </span>
      <span className={iconClass(theme === "dark", "-rotate-90")}>
        <MoonIcon />
      </span>
      <span className={iconClass(theme === "system", "rotate-90")}>
        <MonitorIcon />
      </span>
    </button>
  );
}
