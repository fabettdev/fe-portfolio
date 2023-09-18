import { useRef } from "react";
// Utils
import { renderFooterLinks } from "../utils/rendersUtils";
// Hooks
import { useFooterAnimation } from "../hooks/useFooterAnimation";

export default function Footer(): React.ReactElement {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scope = useFooterAnimation(headerRef, contentRef);

  return (
    <footer className="py-14 md:py-24 bg-dark text-light">
      <div
        ref={scope}
        className="container mx-auto flex flex-col justify-center"
      >
        <div ref={contentRef} className="h-40 flex flex-col mb-16">
          <div className="footer-content-rule h-1 bg-light w-0"></div>
          <div className="md:flex text-xl md:text-2xl lg:text-3xl flex-1">
            {renderFooterLinks()}
          </div>
        </div>

        <header ref={headerRef} className="pl-[20%] md:pl-[35%]">
          <div className="footer-header-rule h-1 bg-light w-0"></div>
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
