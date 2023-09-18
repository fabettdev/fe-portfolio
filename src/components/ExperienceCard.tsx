import { motion } from "framer-motion";
// Components
import Pill from "./ui/Pill";
// Utils
import { ExperienceInt } from "../utils/experiencesUtils";

export default function ExperienceCard(
  props: ExperienceInt
): React.ReactElement {
  function renderStack(): React.ReactNode {
    return props.stack.map(function (item: string, idx: number) {
      return (
        <li key={idx}>
          <Pill
            label={item}
            className="text-xs bg-light text-dark font-medium"
          />
        </li>
      );
    });
  }

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border-2 border-dark w-full bg-light text-dark"
    >
      <header className="p-4 border-b-2 border-dark">
        <h3 className="text-xl lg:text-2xl font-medium">{props.position}</h3>
        <div className="lg:flex lg:justify-between ext-darkGrey text-base lg:text-lg">
          <div>{props.company}</div>
          <div>{props.duration}</div>
        </div>
      </header>
      <section className="p-4">
        <p>{props.description}</p>
      </section>
      <section className="p-4">
        <ul className="flex gap-2 flex-wrap">{renderStack()}</ul>
      </section>
    </motion.article>
  );
}
