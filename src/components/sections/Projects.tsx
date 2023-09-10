import ProjectCard from "../ProjectCard";

export default function Projects(): React.ReactElement {
  return (
    <section>
      <h2 className="text-center mb-48">Progetti</h2>

      <div className="w-4/12 mx-auto ">
        <div className="flex justify-between -mx-8">
          <div className="w-6/12 flex flex-col gap-6 px-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="w-6/12 flex flex-col gap-6 px-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
