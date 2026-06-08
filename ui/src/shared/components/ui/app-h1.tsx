import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppH1Props = ComponentPropsWithoutRef<"h1">;

export const AppH1 = ({ className, children, ...props }: AppH1Props) => {
  return (
    <h1
      className={cn(
        "font-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter whitespace-pre-line",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
