import { ImConnection } from "react-icons/im";
import { BsBatteryFull } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";

export default function Smartphone(): React.ReactElement {
  return (
    <div className="border-[0.1rem] border-[#3B3C40] rounded-[3rem] w-[22rem] lg:w-[60rem] aspect-[1/2] lg:aspect-[2]">
      <div className="h-full border-[0.15rem] border-[#8D8A8B] rounded-[3rem] w-full">
        <div className="h-full border-[0.2rem] border-[#3B3C40] rounded-[3rem] w-full">
          <div className="h-full border-[0.225rem] border-[#A0A0A0] rounded-[3rem] w-full">
            <div className="h-full border-[0.45rem] border-[#000] rounded-[2.75rem] w-full overflow-hidden relative text-[#F9F9FA]">
              <img
                className="w-full h-full blur-xl"
                src="../../assets/iphone-bg.jpg"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
              <div className="absolute top-0 w-1/2 h-[4%] bg-[#000] left-1/2 -translate-x-1/2 rounded-b-2xl lg:left-0 lg:w-[4%] lg:h-1/2 lg:translate-y-1/2 lg:rounded-r-2xl"></div>
              <div className="absolute top-0 w-1/4 left-0 flex justify-center items-end h-[4%] text-xs lg:hidden">
                11:33
              </div>
              <div className="absolute top-0 w-1/4 right-0 flex items-end h-[4%] gap-1 pl-0.5 lg:hidden">
                <MdSignalCellularAlt className="w-[20%]" />
                <ImConnection className="w-[20%]" />
                <BsBatteryFull className="w-[20%]" />
              </div>
              <div className="absolute top-[6%] left-[5%] right-[5%] bottom-[5%] text-[0.625rem] lg:text-sm text-center">
                <div className="w-full h-full">
                  <header className="">
                    <h2>Competenze</h2>
                  </header>
                  <div className="flex flex-wrap gap-y-4 lg:gap-y-5">
                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-gradient-to-b to-[#F16529] from-[#E44D26] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/html.png"}
                        />
                      </figure>
                      <h3 className="font-medium">HTML</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-gradient-to-b to-[#35A8DB] from-[#1572B6] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/css.png"}
                        />
                      </figure>
                      <h3 className="font-medium">CSS</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/sass.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Sass</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#F0DB4F] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/javascript.png"}
                        />
                      </figure>
                      <h3 className="font-medium">JavaScript</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#2D79C7] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/typescript.png"}
                        />
                      </figure>
                      <h3 className="font-medium">TypeScript</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/react.png"}
                        />
                      </figure>
                      <h3 className="font-medium">React/Native</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#000] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/next.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Next</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/expo.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Expo</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-gradient-to-b to-[#E23237] from-[#B52E31] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/angular.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Angular</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/redux.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Redux</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-gradient-to-b from-[#EC0A8E]  to-[#652C89] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/rxjs.png"}
                        />
                      </figure>
                      <h3 className="font-medium">RxJs</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/mysql.png"}
                        />
                      </figure>
                      <h3 className="font-medium">MySQL</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/tailwind.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Tailwind</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/framer-motion.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Framer Motion</h3>
                    </article>

                    <article className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center">
                      <figure className="w-[70%] lg:w-2/4 aspect-square bg-[#fff] flex justify-center items-center rounded-xl mb-1">
                        <img
                          className="w-[70%] h-auto"
                          src={"../../../assets/skills/git.png"}
                        />
                      </figure>
                      <h3 className="font-medium">Git</h3>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
