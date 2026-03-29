import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppH1Props = ComponentPropsWithoutRef<"h1">;

export const AppH1 = ({ className, children, ...props }: AppH1Props) => {
  return (
    <h1
      className={cn(
        "font-black text-3xl lg:text-7xl tracking-tighter whitespace-pre-line",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
