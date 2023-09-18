import { useEffect } from "react";
import { useInView, useAnimate, AnimationScope } from "framer-motion";
// Animations
import {
  footerContentSequence,
  footerHeaderSequence,
} from "../utils/sequencesUtils";

export function useFooterAnimation(
  headerRef: React.RefObject<HTMLHeadingElement>,
  contentRef: React.RefObject<HTMLDivElement>
): AnimationScope {
  const [scope, animate] = useAnimate();

  const isHeaderInView = useInView(headerRef, { amount: 0.5, once: true });
  const isContentInView = useInView(contentRef, { amount: 1, once: true });

  useEffect(() => {
    if (isHeaderInView) animate(footerHeaderSequence);
    if (isContentInView) animate(footerContentSequence);
  }, [isHeaderInView, isContentInView]);

  return scope;
}
