import { stagger, AnimationSequence } from "framer-motion";

export const heroSequence: AnimationSequence = [
  [
    ".char",
    { transform: "translate(0%, 0%)" },
    {
      duration: 0.5,
      delay: stagger(0.02, { startDelay: 0.3 }),
    },
  ],
  [
    ".word",
    { transform: "translate(0%, 0%)" },
    {
      duration: 0.25,
      delay: -0.1,
    },
  ],
];
