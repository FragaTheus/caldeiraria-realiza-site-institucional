import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type AppSmallProps = ComponentPropsWithoutRef<"small">;

export const AppSmall = ({ className, children, ...props }: AppSmallProps) => {
  return (
    <small className={cn("text-sm font-light", className)} {...props}>
      {children}
    </small>
  );
};
