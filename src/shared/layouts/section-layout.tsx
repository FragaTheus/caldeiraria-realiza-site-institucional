interface SectionLayoutProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionLayout = ({ id, children, className }: SectionLayoutProps) => {
  return (
    <section id={id} className={`w-full min-h-min ${className}`}>
      {children}
    </section>
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
