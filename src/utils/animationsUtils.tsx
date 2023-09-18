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

export const footerHeaderSequence: AnimationSequence = [
  [
    ".footer-header-rule",
    {
      width: "100%",
    },
    {
      duration: 0.4,
    },
  ],

  [
    ".footer-title",
    {
      transform: "translate(0%, 0%)",
    },
    {
      duration: 0.6,
      at: 0.25,
    },
  ],
];

export const footerContentSequence: AnimationSequence = [
  [
    ".footer-content-rule",
    {
      width: "100%",
    },
    {
      duration: 0.4,
    },
  ],

  [
    ".footer-link",
    {
      transform: "translate(0%, 0%)",
    },
    {
      duration: 0.6,
      delay: stagger(0.1),
      at: 0.25,
    },
  ],
];
