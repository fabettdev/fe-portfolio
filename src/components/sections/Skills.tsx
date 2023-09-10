export default function Skills(): React.ReactElement {
  return (
    <section className="text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-20 md:mb-28 xl:mb-48">
        Competenze
      </h2>

      <div className="flex flex-col font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl gap-10 md:gap-12 lg:gap-16  xl:gap-20">
        <div>HTML</div>
        <div>CSS / Sass</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React</div>
        <div>React Native</div>
        <div>Next.js</div>
        <div>Expo</div>
        <div>Angular</div>
        <div>SQL</div>
        <div>Git</div>
      </div>
    </section>
  );
}
