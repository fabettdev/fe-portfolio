import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skills(): React.ReactElement {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const leftProgress = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);
  const rightProgress = useTransform(scrollYProgress, [0, 1], ["75%", "-20%"]);

  return (
    <section
      ref={ref}
      className="text-center container lg:px-40 xl:px-52 mx-auto h-[250svh]"
    >
      <div className="overflow-hidden sticky top-0 h-[100svh] flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-20 md:mb-28">
          Competenze
        </h2>

        <motion.div
          className="flex w-[140%] lg:w-[150%] relative h-20 sm:h-28 md:h-32 lg:h-40"
          style={{ left: leftProgress }}
        >
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/html.png"} />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/css.png"} />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/sass.png"} />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img
              className="h-3/5"
              src={"../../../assets/skills/javascript.png"}
            />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img
              className="h-3/5"
              src={"../../../assets/skills/typescript.png"}
            />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/react.png"} />
          </div>
          <div className="aspect-square w-[calc(100%/7)] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/next.png"} />
          </div>
        </motion.div>
        <motion.div
          className="flex w-[160%] lg:w-[150%] relative h-20 sm:h-28 md:h-32 lg:h-40"
          style={{ right: rightProgress }}
        >
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/expo.png"} />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/angular.png"} />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/redux.png"} />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/rxjs.png"} />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-2/5" src={"../../../assets/skills/mysql.png"} />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img
              className="h-2/5"
              src={"../../../assets/skills/tailwind.png"}
            />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img
              className="h-3/5"
              src={"../../../assets/skills/framer-motion.png"}
            />
          </div>
          <div className="aspect-square w-[12.5%] h-full flex justify-center items-center">
            <img className="h-3/5" src={"../../../assets/skills/git.png"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
