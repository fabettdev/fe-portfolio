export default function Hero(): React.ReactElement {
  return (
    <section className="container mx-auto">
      <div className="pl-[20%] text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none mb-0 md:mb-2">
        FABRIZIO
      </div>
      <div className="md:flex md:justify-between">
        <div className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none">
          ETTORI
        </div>
        <p className="text-lg pl-[35%] pt-8 md:text-xl md:w-5/12 md:pl-0 lg:text-2xl lg:pl-24 lg:pt-16 xl:pt-20 xl:text-4xl">
          Ciao, sono un junior front-end developer che aspira a trasformare in
          (buon) codice interfacce sempre più coinvolgenti e interattive, senza
          perdere di vista prestazioni e SEO.
        </p>
      </div>
    </section>
  );
}
