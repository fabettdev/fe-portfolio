import ExperienceCard from "../ExperienceCard";

export default function Experience(): React.ReactElement {
  return (
    <section className="container flex mx-auto justify-between px-28">
      <h2 className="w-4/12">Esperienze</h2>
      <div className="w-6/12 flex flex-col gap-4">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <a href="">Download CV Completo</a>
      </div>
    </section>
  );
}
