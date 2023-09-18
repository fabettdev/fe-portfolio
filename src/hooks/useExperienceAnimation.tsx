import { useEffect } from "react";
import { useInView, useAnimate, AnimationScope } from "framer-motion";

export function useExperienceAnimation(ref: any): AnimationScope {
  const [scope, animate] = useAnimate();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView)
      animate(
        ".experiences-header",
        {
          transform: "translate(0rem, 0rem)",
        },
        {
          duration: 0.75,
        }
      );
  }, [isInView]);

  return scope;
}
