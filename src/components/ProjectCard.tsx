import Pill from "./ui/Pill";
import { Project } from "../utils/constants";

export default function ProjectCard(props: Project): React.ReactElement {
  function mapStack(item: string, idx: number): React.ReactElement {
    return <Pill key={idx} label={item} />;
  }

  return (
    <article>
      <img src="https://placehold.co/1000x1300" />
      <h3 className="md:text-lg 2xl:text-xl mt-2 mb-1">{props.title}</h3>
      <p className="text-xs md:text-sm mb-2">{props.description}</p>
      <div className="flex gap-0.5 md:gap-1 xl:gap-2 flex-wrap">
        {props.stack.map(mapStack)}
      </div>
    </article>
  );
}
