import { useRef } from "react";
// Hooks
import { useExperienceAnimation } from "../../hooks/useExperienceAnimation";
// Components
import Button from "../ui/Button";
import ExperienceCard from "../ExperienceCard";
// Utils
import { experiencesArray, ExperienceInt } from "../../utils/experiencesUtils";

export default function Experience(): React.ReactElement {
  const scrollRef = useRef<HTMLElement>(null);
  const scope = useExperienceAnimation(scrollRef);

  function renderCards(): React.ReactNode {
    return experiencesArray.map(function (item: ExperienceInt) {
      return <ExperienceCard key={item.id} {...item} />;
    });
  }

  return (
    <section ref={scope} className="container mx-auto my-44 flex flex-col">
      <header className="experiences-header text-center mb-24 translate-y-[-25rem]">
        <h2 className="text-5xl lg:text-6xl xxl:text-7xl">Esperienze</h2>
      </header>
      <section className="lg:w-5/12 mx-auto flex" ref={scrollRef}>
        {/* <div className="w-[0.25rem] bg-darkGrey rounded-xl mr-11 relative">
          <div
            className={`absolute top-0 left-0 w-full rounded-xl bg-[#a594fd]`}
            style={{ height: index + "%" }}
          ></div>
          <div className="rounded-full bg-dark border-white border-8 box p-1.5 absolute top-[10%] left-1/2 -translate-x-1/2"></div>
          <div className="rounded-full bg-darkGrey border-white border-8 box p-1.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          <div className="rounded-full bg-darkGrey border-white border-8 box p-1.5 absolute bottom-[10%] left-1/2 -translate-x-1/2"></div>
        </div> */}
        <div className="flex-1 flex flex-col gap-20">{renderCards()}</div>
      </section>
      <section className="relative w-fit mx-auto mt-10">
        <Button className="bg-brown hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center">
          <>
            <svg
              className="fill-white w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV Completo</span>
          </>
        </Button>
      </section>
    </section>
  );
}
