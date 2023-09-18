import { motion } from "framer-motion";
// Components
import Pill from "./ui/Pill";
// Icons
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
// Utils
import { ProjectInt } from "../utils/projectsUtils";

export default function ProjectCard(props: ProjectInt): React.ReactElement {
  function renderStack(): React.ReactNode {
    return props.stack.map(function (item: string, idx: number) {
      return (
        <Pill
          className="text-xs bg-light text-dark font-medium"
          key={idx}
          label={item}
        />
      );
    });
  }

  return (
    <article id={"article" + props.id} className="group cursor-pointer">
      <a href={props.href} target="__blank">
        <div className="relative overflow-hidden">
          <img
            className="w-full aspect-[3/4] object-cover object-top"
            src={props.src}
            alt={props.title}
          />
          <div className="absolute w-full h-full top-0 left-0 bg-dark opacity-5 group-hover:opacity-10"></div>
        </div>
        <h3 className="md:text-lg 2xl:text-xl mt-2 mb-1 flex items-center gap-1">
          <div>{props.title}</div>
          <div className="h-[1rem] aspect-square overflow-hidden relative">
            <BsArrowUpRight className="absolute top-0 left-0 group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-500" />
            <BsArrowUpRight className="absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full h-full w-full transition-all duration-500" />
          </div>
        </h3>
        {!props.done && (
          <section className="text-xs md:text-sm flex items-center gap-1 text-brown">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 2,
                repeatDelay: 0,
              }}
            >
              <IoMdSettings />
            </motion.div>
            <p>Work in progress</p>
          </section>
        )}
        <section className="text-xs md:text-sm mb-2">
          <p>{props.description}</p>
        </section>
        <section className="flex gap-0.5 md:gap-1 xl:gap-2 flex-wrap">
          {renderStack()}
        </section>
      </a>
    </article>
  );
}
