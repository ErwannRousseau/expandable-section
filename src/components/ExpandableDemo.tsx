import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Expandable, ExpandableContent } from "./ui/expandable";
import { TypographyP } from "./ui/typographies";

interface Props {
  children: React.ReactNode;
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6 | "none";
}

export default function ExpandableDemo({ children, lineClamp = 2 }: Props) {
  const [isExpanded, setIsExpanded] = React.useState<boolean | null>(null);
  const [showReadMore, setShowReadMore] = React.useState(false);
  const expandableContentEl = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    initHeightsValues();
  }, []);

  function initHeightsValues() {
    const expandableContentRect =
      expandableContentEl.current?.getBoundingClientRect();
    const overflowHeight = expandableContentEl.current?.scrollHeight;

    expandableContentEl.current?.style.setProperty(
      "--expandable-content-height",
      `${overflowHeight}px`,
    );
    expandableContentEl.current?.style.setProperty(
      "--expandable-collapsed-height",
      `${expandableContentRect?.height}px`,
    );

    if ((overflowHeight ?? 0) > (expandableContentRect?.height ?? 0)) {
      setShowReadMore(true);
    }
  }

  return (
    <Expandable>
      <ExpandableContent
        className={cn({
          [`line-clamp-${lineClamp}`]: !isExpanded,
          "animate-expandable-up": isExpanded === false,
          "animate-expandable-down": isExpanded,
        })}
        ref={expandableContentEl}
      >
        <TypographyP>{children}</TypographyP>
      </ExpandableContent>
      {showReadMore && (
        <Button
          variant="link"
          className="p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </Expandable>
  );
}
