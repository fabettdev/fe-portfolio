import { useAnimate, AnimationSequence, AnimationScope } from "framer-motion";
import { useEffect } from "react";

export default function useCustomAnimation(
  sequence: AnimationSequence
): AnimationScope {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return scope;
}
