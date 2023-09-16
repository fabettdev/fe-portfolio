import {
  stringToWordsElements,
  stringToLettersElements,
} from "../../../utils/animationUtils";
import { heroSequence } from "../../../utils/animationSequences";
import { HERO_PARAGRAPH, NAME, SURNAME } from "../../../utils/constants";
import useCustomAnimation from "../../../hooks/useCustomAnimation";

export default function Hero(): React.ReactElement {
  const scope = useCustomAnimation(heroSequence);

  return (
    <section
      className="container mx-auto items-center flex justify-center h-[100svh]"
      ref={scope}
    >
      <div>
        <div className="pl-[20%] text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black mb-0 md:mb-2 w-fit">
          <div className="overflow-hidden">
            {stringToLettersElements(NAME.toUpperCase(), "char")}
          </div>
        </div>
        <div className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black">
          <div className="overflow-hidden">
            {stringToLettersElements(SURNAME.toUpperCase(), "char")}
          </div>
        </div>
        <p className="text-center pt-8 md:pt-10 lg:pt-12 lg:px-14 text-sm md:text-base lg:text-xl xl:text-2xl xxl:text-3xl uppercase font-semibold leading-none">
          {stringToWordsElements(HERO_PARAGRAPH, "word")}
        </p>
      </div>
    </section>
  );
}
