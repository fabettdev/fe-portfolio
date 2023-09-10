import Pill from "./ui/Pill";

export default function ProjectCard(): React.ReactElement {
  return (
    <article>
      <img src="https://placehold.co/1000x1300" />
      <h3 className="text-xl mt-2 mb-1">Portfolio Personale</h3>
      <p className="text-sm mb-2">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-2 flex-wrap">
        <Pill label="React" />
        <Pill label="TypeScript" />
        <Pill label="Tailwind" />
      </div>
    </article>
  );
}