import { useRef, useEffect } from "react";
import {
  stagger,
  useInView,
  useAnimate,
  AnimationSequence,
} from "framer-motion";

export default function Footer(): React.ReactElement {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const [scope, animate] = useAnimate();

  const isHeaderInView = useInView(headerRef, { amount: 0.5, once: true });
  const isContentInView = useInView(contentRef, { amount: 0.75, once: true });

  const footerHeaderSequence: AnimationSequence = [
    [
      ".footer-header-rule",
      {
        width: isHeaderInView ? "100%" : "0%",
      },
      {
        duration: 0.4,
      },
    ],

    [
      ".footer-title",
      {
        transform: isHeaderInView ? "translate(0%, 0%)" : "translate(0%, 100%)",
      },
      {
        duration: 0.6,
        at: 0.25,
      },
    ],
  ];

  const footerContentSequence: AnimationSequence = [
    [
      ".footer-content-rule",
      {
        width: isContentInView ? "100%" : "0%",
      },
      {
        duration: 0.4,
      },
    ],

    [
      ".footer-link",
      {
        transform: isContentInView
          ? "translate(0%, 0%)"
          : "translate(0%, -100%)",
      },
      {
        duration: 0.6,
        delay: stagger(0.1),
        at: 0.25,
      },
    ],
  ];

  useEffect(() => {
    animate(footerHeaderSequence);
    animate(footerContentSequence);
  }, [isHeaderInView, isContentInView]);

  return (
    <footer className="py-14 md:py-24 bg-black text-white">
      <div
        ref={scope}
        className="container mx-auto flex flex-col justify-center"
      >
        <div ref={contentRef} className="h-40 flex flex-col mb-16">
          <div className="footer-content-rule h-1 bg-white w-0"></div>
          <div className="md:flex text-xl md:text-2xl lg:text-3xl flex-1">
            <a
              href="https://tailwindcss.com/docs/border-color"
              className="block h-1/4 md:h-full md:w-3/12 md:pt-2"
            >
              <div className="h-full overflow-hidden">
                <div className="footer-link h-full border-b md:border-b-0 md:border-r flex items-center md:items-end -translate-y-full">
                  <div className="pl-5 md:pb-2 w-full">Email</div>
                </div>
              </div>
            </a>

            <a
              href="https://tailwindcss.com/docs/border-color"
              className="block h-1/4 md:h-full md:w-3/12 md:pt-2"
            >
              <div className="h-full overflow-hidden">
                <div className="footer-link h-full border-b md:border-b-0 md:border-r flex items-center md:items-end -translate-y-full">
                  <div className="pl-5 md:pb-2 w-full">LinkedIn</div>
                </div>
              </div>
            </a>

            <a
              href="https://tailwindcss.com/docs/border-color"
              className="block h-1/4 md:h-full md:w-3/12 md:pt-2"
            >
              <div className="h-full overflow-hidden">
                <div className="footer-link h-full border-b md:border-b-0 md:border-r flex items-center md:items-end -translate-y-full">
                  <div className="pl-5 md:pb-2 w-full">GitHub</div>
                </div>
              </div>
            </a>
            <a
              href="https://tailwindcss.com/docs/border-color"
              className="block h-1/4 md:h-full md:w-3/12 md:pt-2"
            >
              <div className="h-full overflow-hidden">
                <div className="footer-link h-full border-b md:border-b-0 flex items-center md:items-end -translate-y-full">
                  <div className="pl-5 md:pb-2 w-full">Discord</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <header ref={headerRef} className="pl-[20%] md:pl-[35%]">
          <div className="footer-header-rule h-1 bg-white w-0"></div>
          <h2 className="leading-none mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl overflow-hidden">
            <span className="footer-title relative inline-block translate-y-full">
              Contatti
            </span>
          </h2>
        </header>
      </div>
    </footer>
  );
}
