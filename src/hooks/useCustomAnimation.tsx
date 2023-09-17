import { useAnimate, AnimationSequence } from "framer-motion";
import { useEffect } from "react";

export default function useCustomAnimation(sequence: AnimationSequence) {
  const [scope, animate]: any = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return scope;
}
