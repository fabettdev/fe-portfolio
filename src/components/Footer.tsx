export default function Footer(): React.ReactElement {
  return (
    <footer className="h-[30rem] relative">
      <div className="flex bg-black text-white justify-center items-center absolute bottom-0 left-0 right-0 h-full">
        <div className="container">
          <div className="h-0.5 bg-white"></div>
          <div className="flex text-3xl mb-16">
            <div className="w-3/12">
              <a
                href="https://tailwindcss.com/docs/border-color"
                className="block cursor-pointer pt-16 mt-2 pb-2 mr-5  border-r"
              >
                Email
              </a>
            </div>

            <div className="w-3/12">
              <a
                href="#"
                className="block cursor-pointer pt-16 mt-2 pb-2 mr-5  border-r"
              >
                LinkedIn
              </a>
            </div>

            <div className="w-3/12">
              <a
                href="#"
                className="block cursor-pointer pt-16 mt-2 pb-2 mr-5  border-r"
              >
                GitHub
              </a>
            </div>

            <div className="w-3/12">
              <a
                href="#"
                className="block cursor-pointer pt-16 mt-2 pb-2 mr-5 "
              >
                Discord
              </a>
            </div>
          </div>

          <header className="pl-[35%]">
            <div className="h-1 bg-white"></div>
            <h2 className="leading-none mt-3 text-6xl">Contatti</h2>
          </header>
        </div>
      </div>
    </footer>
  );
}
