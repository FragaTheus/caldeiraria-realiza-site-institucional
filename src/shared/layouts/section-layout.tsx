const SectionLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`w-full min-h-min ${className}`}>{children}</section>
  );
};

const ContainerLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
};

export { SectionLayout, ContainerLayout };
