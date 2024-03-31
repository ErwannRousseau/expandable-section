import { cn } from "@/lib/utils";
import React from "react";
import type { ButtonProps } from "./button";
import type { TypographyP } from "./typographies";

interface ExpandableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<ExpandableContentProps>,
    React.ReactElement<ButtonProps> | false,
  ];
}

const Expandable = React.forwardRef<HTMLDivElement, ExpandableProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("px-4", className)} ref={ref} {...props} />
  ),
);
Expandable.displayName = "Expandable";

interface ExpandableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<typeof TypographyP>;
}

const ExpandableContent = React.forwardRef<
  HTMLDivElement,
  ExpandableContentProps
>(({ className, ...props }, ref) => (
  <div
    className={cn("overflow-hidden transition-all", className)}
    {...props}
    ref={ref}
  />
));
ExpandableContent.displayName = "ExpandableContent";

export { Expandable, ExpandableContent };
