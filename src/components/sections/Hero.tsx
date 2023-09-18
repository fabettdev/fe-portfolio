import {
  stringToWordsElements,
  stringToLettersElements,
} from "../../utils/animationsUtils";
import { heroSequence } from "../../utils/sequencesUtils";
import { heroParagraph, name, surname } from "../../utils/heroUtils";
import useCustomAnimation from "../../hooks/useCustomAnimation";
import { motion } from "framer-motion";

export default function Hero(): React.ReactElement {
  const scope = useCustomAnimation(heroSequence);

  return (
    <section
      className="container mx-auto xxl:px-48 items-center flex justify-center h-[85svh]"
      ref={scope}
    >
      <motion.div>
        <div className="pl-[20%] text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black mb-0 md:mb-2 w-fit">
          <div className="overflow-hidden">
            {stringToLettersElements(name.toUpperCase(), "char")}
          </div>
        </div>
        <div className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black">
          <div className="overflow-hidden">
            {stringToLettersElements(surname.toUpperCase(), "char")}
          </div>
        </div>
        <p className="text-center pt-8 md:pt-10 lg:pt-12 lg:px-14 text-sm md:text-base lg:text-xl xl:text-2xl font-semibold leading-none">
          {stringToWordsElements(heroParagraph, "word")}
        </p>
      </motion.div>
    </section>
  );
}
