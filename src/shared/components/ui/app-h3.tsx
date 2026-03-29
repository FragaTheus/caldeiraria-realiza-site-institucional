import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppH3Props = ComponentPropsWithoutRef<"h3">;

export const AppH3 = ({ className, children, ...props }: AppH3Props) => {
  return (
    <h3
      className={cn(
        "font-semibold text-xl whitespace-pre-line tracking-tighter",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
