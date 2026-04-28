type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={["py-24 sm:py-32 scroll-mt-nav", className].join(" ")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
