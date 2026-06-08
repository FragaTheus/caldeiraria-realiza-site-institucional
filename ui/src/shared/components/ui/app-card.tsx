import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppCardProps = ComponentPropsWithoutRef<"article"> & {
  variant?: "default" | "outlined";
};

export const AppCard = ({
  className,
  variant = "default",
  children,
  ...props
}: AppCardProps) => {
  const variantStyles = {
    default: "bg-surface",
    outlined: "bg-transparent border",
  };

  return (
    <article
      className={cn("p-4 lg:p-6", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </article>
  );
};
