import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContainer } from "./ui/collapsible";
import { TypographyP } from "./ui/typographies";

const ExpandableSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean | null>(null);
  const root = document.documentElement;
  const clampElement = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    initHeightsValues();
  }, []);

  function initHeightsValues() {
    const clampRect = clampElement.current?.getBoundingClientRect();
    const overflowHeight = clampElement.current?.scrollHeight;

    root.style.setProperty(
      "--collapsible-collapsed-height",
      `${clampRect?.height}px`,
    );
    root.style.setProperty(
      "--collapsible-content-height",
      `${overflowHeight}px`,
    );
  }

  return (
    <Collapsible>
      <CollapsibleContainer
        className={cn({
          "line-clamp-2": !isExpanded,
          "animate-collapsible-up": isExpanded === false,
          "animate-collapsible-down": isExpanded,
        })}
        ref={clampElement}
      >
        <TypographyP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          magna tellus. Curabitur sed faucibus leo. Vivamus id elit nec nisi
          ultrices rutrum. Sed ornare metus sit amet arcu pulvinar feugiat.
          Phasellus eleifend, dolor vitae malesuada dignissim, diam ligula
          semper purus, id pulvinar magna nibh nec neque. Ut auctor sodales
          dictum. Cras erat tortor, vestibulum et porttitor vitae, consequat et
          erat. Nullam ullamcorper tempor leo in fermentum. Curabitur ultrices
          tempus pulvinar. Proin a finibus odio. Pellentesque nec urna id ex
          facilisis dictum. Proin elementum cursus dolor, in molestie sem
          fermentum eget.
        </TypographyP>
      </CollapsibleContainer>
      <Button
        variant="link"
        className="pl-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </Collapsible>
  );
};

export default ExpandableSection;
