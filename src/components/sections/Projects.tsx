import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Components
import ProjectCard from "../ProjectCard";
// Utils
import { projects } from "../../utils/projectsUtils";

export default function Projects(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0vh", "-25svh"]);
  const right = useTransform(scrollYProgress, [0, 1], ["0vh", "25svh"]);

  return (
    <section className="overflow-hidden">
      <h2 className="text-center mb-28 lg:mb-42 text-5xl lg:text-6xl xxl:text-7xl">
        Progetti
      </h2>

      <div className="container sm:w-8/12 lg:w-6/12 xl:w-5/12 xxl:w-4/12 mx-auto">
        <div className="flex justify-between -mx-2 xl:-mx-4" ref={ref}>
          <motion.div
            className="w-6/12 flex flex-col gap-6 px-2 xl:px-4 relative"
            style={{ top: left }}
          >
            <ProjectCard key={projects[0].id} {...projects[0]} />
            <ProjectCard key={projects[2].id} {...projects[2]} />
            <ProjectCard key={projects[4].id} {...projects[4]} />
          </motion.div>

          <motion.div
            className="w-6/12 flex flex-col gap-6 px-2 xl:px-4 relative"
            style={{ top: right }}
          >
            <ProjectCard key={projects[1].id} {...projects[1]} />
            <ProjectCard key={projects[3].id} {...projects[3]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
