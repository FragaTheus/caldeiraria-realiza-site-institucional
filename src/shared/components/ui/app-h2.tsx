import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppH2Props = ComponentPropsWithoutRef<"h2">;

export const AppH2 = ({ className, children, ...props }: AppH2Props) => {
  return (
    <h2
      className={cn(
        "font-bold text-xl md:text-2xl tracking-tighter whitespace-pre-line",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
