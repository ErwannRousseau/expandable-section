import { cn } from "@/lib/utils";
import React from "react";
import type { ButtonProps } from "./button";
import type { TypographyP } from "./typographies";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<CollapsibleContainerProps>,
    React.ReactElement<ButtonProps>,
  ];
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />,
);
Collapsible.displayName = "Collapsible";

interface CollapsibleContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<typeof TypographyP>;
}

const CollapsibleContainer = React.forwardRef<
  HTMLDivElement,
  CollapsibleContainerProps
>(({ className, ...props }, ref) => (
  <div
    className={cn("max-w-screen-md overflow-hidden transition-all", className)}
    {...props}
    ref={ref}
  />
));
CollapsibleContainer.displayName = "CollapsibleContainer";

export { Collapsible, CollapsibleContainer };
