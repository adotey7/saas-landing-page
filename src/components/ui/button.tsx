type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
} & (
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>
);

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all duration-200 font-semibold",
  secondary:
    "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] transition-all duration-200",
  outline:
    "border border-border/60 text-foreground hover:bg-surface hover:border-border active:scale-[0.98] transition-all duration-200",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-surface active:scale-[0.98] transition-all duration-200",
};

const sizeStyles: Record<string, string> = {
  sm: "h-9 px-5 text-sm rounded-lg",
  md: "h-11 px-6 text-sm rounded-xl",
  lg: "h-12 px-8 text-sm rounded-xl",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
