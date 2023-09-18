import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Icons
import { ImConnection } from "react-icons/im";
import { BsBatteryFull } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
// Utils
import { renderSkills } from "../utils/rendersUtils";
// Assets
import smartphoneBg from "../assets/iphone-bg.jpg";

export default function Smartphone(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      className="border-[0.1rem] border-[#3B3C40] rounded-[3rem] w-[16rem] md:w-[20rem] lg:w-[50rem] xl:w-[52.5rem] xxl:w-[55rem] aspect-[1/2] lg:aspect-[2]"
      style={{
        transformOrigin: "top center",
        rotateX: rotate,
      }}
    >
      <div className="h-full border-[0.15rem] border-[#8D8A8B] rounded-[3rem] w-full bg-[#505050]">
        <div className="h-full border-[0.2rem] border-[#3B3C40] rounded-[3rem] w-full">
          <div className="h-full border-[0.225rem] border-[#A0A0A0] rounded-[3rem] w-full">
            <div className="h-full border-[0.45rem] border-black rounded-[2.75rem] w-full overflow-hidden relative text-[#F9F9FA]">
              <img className="w-full h-full blur-xl" src={smartphoneBg} />
              <div className="absolute top-0 left-0 h-full w-full bg-[#141414] opacity-40"></div>
              <div className="absolute top-0 w-1/2 h-[4%] bg-black left-1/2 -translate-x-1/2 rounded-b-2xl lg:left-0 lg:w-[4%] lg:h-1/2 lg:translate-y-1/2 lg:rounded-r-2xl"></div>
              <div className="absolute top-0 w-1/4 left-0 flex justify-center items-end h-[4%] text-[0.625rem] md:text-xs lg:hidden">
                11:33
              </div>
              <div className="absolute top-0 w-1/4 right-0 flex items-end h-[4%] gap-1 pl-0.5 lg:hidden">
                <MdSignalCellularAlt className="w-[20%]" />
                <ImConnection className="w-[20%]" />
                <BsBatteryFull className="w-[20%]" />
              </div>
              <div className="absolute top-[6%] left-[5%] right-[5%] bottom-[5%] text-[0.625rem] lg:text-sm text-center">
                <div className="w-full h-full">
                  <header className="text-sm md:text-base lg:text-xl xxl:text-2xl mb-5">
                    <h2 className="font-medium">Competenze</h2>
                  </header>
                  <div className="flex flex-wrap gap-y-4">{renderSkills()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
