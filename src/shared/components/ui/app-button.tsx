const AppButtonSolid = ({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`p-2 rounded-md bg-primary text-white text-p font-medium hover:bg-primary/90 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const AppButtonSoft = ({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`p-2 rounded-md bg-primary/10 text-primary text-p font-medium hover:bg-primary/20 active:bg-primary/30 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const CtaButton = ({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-muted hover:bg-green-500 active:bg-green-500 text-white text-p font-medium p-2 rounded-md cursor-pointer flex items-center justify-center gap-2 ${className} transition-all`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { AppButtonSolid, AppButtonSoft, CtaButton };
