export default function ExperienceCard(): React.ReactElement {
  return (
    <article className="p-4 flex hover:bg-lightGrey cursor-pointer rounded-md hover:shadow transition-all w-full">
      <section className="w-4/12 text-xs pt-1">
        FEBBRAIO 2023 — PRESENTE
      </section>
      <section className="w-8/12">
        <header>
          <h3 className="text-xl mb-2">
            <div className="-mb-1">Front-end Academy Trainee</div>
            <div className="text-darkGrey text-lg">Beije Consulting</div>
          </h3>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </article>
  );
}
