import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skills(): React.ReactElement {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const leftProgress = useTransform(scrollYProgress, [0, 1], ["10%", "-120%"]);
  const rightProgress = useTransform(scrollYProgress, [0, 1], ["110%", "-20%"]);

  return (
    <section ref={ref} className="text-center container mx-auto h-[300svh]">
      <div className="overflow-hidden sticky top-0 h-[100svh] flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-20 md:mb-28 xl:mb-48">
          Competenze
        </h2>

        <motion.div
          className="flex w-[200%] relative"
          style={{ left: leftProgress }}
        >
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            HTML
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#ff0000]">
            CSS
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Sass
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#ff0000]">
            JavaScript
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            TypeScript
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            React
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Framer Motion
          </div>
        </motion.div>
        <motion.div
          className="flex w-[200%] relative"
          style={{ right: rightProgress }}
        >
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#ff0000]">
            React Native
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Next
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#ff0000]">
            Expo
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Angular
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Git
          </div>
          <div className="w-1/5 h-52 flex justify-center item-center bg-[#000]">
            Tailwind
          </div>
        </motion.div>
      </div>
    </section>
  );
}
