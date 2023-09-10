import ProjectCard from "../ProjectCard";

export default function Projects(): React.ReactElement {
  return (
    <section>
      <h2 className="text-center mb-28 lg:mb-42 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Progetti
      </h2>

      <div className="container sm:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
        <div className="flex justify-between -mx-2 xl:-mx-4">
          <div className="w-6/12 flex flex-col gap-6 px-2 xl:px-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="w-6/12 flex flex-col gap-6 px-2 xl:px-4">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
