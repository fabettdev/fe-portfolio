export default function Footer(): React.ReactElement {
  return (
    <footer className="h-[24rem] md:h-[30rem] relative">
      <div className="flex bg-black text-white justify-center items-center absolute bottom-0 left-0 right-0 h-full">
        <div className="container">
          <div className="h-1 bg-white"></div>
          <div className="md:flex text-xl md:text-2xl lg:text-3xl mb-16">
            <div className="md:w-3/12 border-b md:border-0">
              <a
                href="https://tailwindcss.com/docs/border-color"
                className="block cursor-pointer py-2 md:py-0 md:pt-16 md:mt-2 md:pb-2 md:mr-5  md:border-r"
              >
                Email
              </a>
            </div>

            <div className="md:w-3/12 border-b md:border-0">
              <a
                href="#"
                className="block cursor-pointer py-2 md:py-0 md:pt-16 md:mt-2 md:pb-2 md:mr-5  md:border-r"
              >
                LinkedIn
              </a>
            </div>

            <div className="md:w-3/12 border-b md:border-0">
              <a
                href="#"
                className="block cursor-pointer py-2 md:py-0 md:pt-16 md:mt-2 md:pb-2 md:mr-5  md:border-r"
              >
                GitHub
              </a>
            </div>

            <div className="md:w-3/12 border-b md:border-0">
              <a
                href="#"
                className="block cursor-pointer py-2 md:py-0 md:pt-16 md:mt-2 md:pb-2 md:mr-5 "
              >
                Discord
              </a>
            </div>
          </div>

          <header className="pl-[20%] md:pl-[35%]">
            <div className="h-1 bg-white"></div>
            <h2 className="leading-none mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Contatti
            </h2>
          </header>
        </div>
      </div>
    </footer>
  );
}
