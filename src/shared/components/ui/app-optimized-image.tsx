"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

interface AppOptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  wrapperClassName?: string;
  showSpinner?: boolean;
}

const AppOptimizedImage = ({
  wrapperClassName,
  showSpinner = true,
  onLoad,
  alt,
  ...props
}: AppOptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(showSpinner);

  return (
    <div className={cn("relative w-full h-full", wrapperClassName)}>
      {showSpinner && isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface/40">
          <span className="size-7 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        onLoad={(event) => {
          setIsLoading(false);
          onLoad?.(event);
        }}
      />
    </div>
  );
};

export default AppOptimizedImage;
