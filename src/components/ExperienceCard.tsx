export default function ExperienceCard(): React.ReactElement {
  return (
    <article className="lg:p-4 md:flex md:hover:bg-lightGrey cursor-pointer rounded-md md:hover:shadow transition-all w-full">
      <section className="md:w-3/12 lg:w-4/12 text-xs pt-1 text-darkGrey">
        FEBBRAIO 2023 — PRESENTE
      </section>
      <section className="md:w-9/12 lg:w-8/12">
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
