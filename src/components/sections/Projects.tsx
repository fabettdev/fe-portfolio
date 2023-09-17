import ProjectCard from "../ProjectCard";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../../utils/constants";

export default function Projects(): React.ReactElement {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0vh", "-22.5svh"]);
  const right = useTransform(scrollYProgress, [0, 1], ["0vh", "22.5svh"]);

  return (
    <section className="overflow-hidden">
      <h2 className="text-center mb-28 lg:mb-42 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Progetti
      </h2>

      <div className="container sm:w-8/12 lg:w-6/12 xl:w-5/12 xxl:w-4/12 mx-auto">
        <motion.div className="flex justify-between -mx-2 xl:-mx-4" ref={ref}>
          <motion.div
            className="w-6/12 flex flex-col gap-6 px-2 xl:px-4 relative"
            style={{ top: left }}
          >
            <ProjectCard {...PROJECTS[0]} />
            <ProjectCard {...PROJECTS[2]} />
            <ProjectCard {...PROJECTS[4]} />
          </motion.div>

          <motion.div
            className="w-6/12 flex flex-col gap-6 px-2 xl:px-4 relative"
            style={{ top: right }}
          >
            <ProjectCard {...PROJECTS[1]} />
            <ProjectCard {...PROJECTS[3]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
