import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ExperienceCard from "../ExperienceCard";

export default function Experience(): React.ReactElement {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    y.on("change", (latest) => setIndex(latest));
  }, []);

  return (
    <section className="h-[600svh] snap-y snap-mandatory" ref={ref}>
      <div className="container h-[100svh] top-0 sticky lg:flex mx-auto justify-between">
        <header className="h-full pt-[20%]">
          <h2 className="w-4/12 text-4xl md:text-5xl xl:text-6xl mb-16 lg:mb-0">
            Esperienze
          </h2>
          <a className="lg:pl-4" href="">
            Download CV Completo
          </a>
        </header>
        <div className="h-full lg:w-8/12 xl:w-4/12 relative flex items-center">
          {/* <div className="h-3/5 w-[0.25rem] bg-darkGrey rounded-xl mr-11 relative">
            <div
              className={`absolute top-0 left-0 w-full rounded-xl bg-[#a594fd]`}
              style={{ height: index + 15 + "%" }}
            ></div>
            <div className="rounded-full bg-black border-white border-8 box p-1.5 absolute top-[10%] left-1/2 -translate-x-1/2"></div>
            <div className="rounded-full bg-darkGrey border-white border-8 box p-1.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            <div className="rounded-full bg-darkGrey border-white border-8 box p-1.5 absolute bottom-[10%] left-1/2 -translate-x-1/2"></div>
          </div> */}
          <div className="h-3/5 flex-1 relative">
            <AnimatePresence>
              {index < 100 / 3 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    position: "absolute",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    top: "0%",
                    position: "relative",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    zIndex: -10,
                    position: "absolute",
                  }}
                  transition={{ duration: 0.6 }}
                  className="h-full left-0 w-full top-0 flex items-center snap-center"
                >
                  <ExperienceCard />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {index >= 100 / 3 && index < (100 / 3) * 2 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    position: "absolute",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    top: "0%",
                    position: "relative",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    zIndex: -10,
                    position: "absolute",
                  }}
                  transition={{ duration: 0.6 }}
                  className="h-full left-0 w-full top-0 flex items-center snap-center"
                >
                  <ExperienceCard />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {index >= (100 / 3) * 2 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    position: "absolute",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    top: "0%",
                    position: "relative",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    top: "20%",
                    zIndex: -10,
                    position: "absolute",
                  }}
                  transition={{ duration: 0.6 }}
                  className="h-full left-0 w-full top-0 flex items-center snap-center"
                >
                  <ExperienceCard />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
