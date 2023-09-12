import { useAnimate, AnimationSequence } from "framer-motion";
import { useEffect } from "react";

export default function useCustomAnimation(sequence: AnimationSequence) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return scope;
}
