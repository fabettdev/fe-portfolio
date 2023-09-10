import ExperienceCard from "../ExperienceCard";

export default function Experience(): React.ReactElement {
  return (
    <section className="container lg:flex mx-auto justify-between lg:px-16 xl:px-20">
      <h2 className="w-4/12 text-4xl md:text-5xl xl:text-6xl mb-16 lg:mb-0">
        Esperienze
      </h2>
      <div className="lg:w-8/12 xl:w-7/12 flex flex-col gap-12 lg:gap-4">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <a className="lg:pl-4" href="">
          Download CV Completo
        </a>
      </div>
    </section>
  );
}
