import { cn } from "@/lib/utils";
import React from "react";

const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      {...props}
      ref={ref}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    />
  );
});
TypographyP.displayName = "TypographyP";

export { TypographyP };
