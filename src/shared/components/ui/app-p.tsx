import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppPProps = ComponentPropsWithoutRef<"p">;

export const AppP = ({ className, children, ...props }: AppPProps) => {
  return (
    <p className={cn("text-base font-light", className)} {...props}>
      {children}
    </p>
  );
};
