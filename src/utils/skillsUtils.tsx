import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import sassLogo from "../assets/skills/sass.png";
import javascriptLogo from "../assets/skills/javascript.png";
import typescriptLogo from "../assets/skills/typescript.png";
import reactLogo from "../assets/skills/react.png";
import nextLogo from "../assets/skills/next.png";
import expoLogo from "../assets/skills/expo.png";
import angularLogo from "../assets/skills/angular.png";
import reduxLogo from "../assets/skills/redux.png";
import rxjsLogo from "../assets/skills/rxjs.png";
import mysqlLogo from "../assets/skills/mysql.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import framerMotionLogo from "../assets/skills/framer-motion.png";
import gitLogo from "../assets/skills/git.png";

export interface SkillInt {
  id: number;
  src: string;
  name: string;
  color: string;
}

/* if (item.color) {
  if (item.color === "bg-white" || item.color === "black") {
    color = `bg-${item.color}`;
  } else {
    color = `bg-[${item.color}]`;
  }
} else {
  color = `bg-gradient-to-b from-[${item.colorFrom}] to-[${item.colorTo}]`;
}

return (
  <article
    key={item.id}
    className="w-3/12 lg:w-2/12 lg:text-sm flex flex-col items-center lg:justify-center"
  >
    <figure
      className={
        "w-[70%] lg:w-2/4 aspect-square flex justify-center items-center rounded-xl mb-1 " +
        color
      }
    >
      <img
        className="w-[70%] h-auto"
        src={item.src}
        alt={item.name + " logo"}
      />
    </figure>
    <h3 className="font-medium">{item.name}</h3>
  </article> */

export const skillsArray: SkillInt[] = [
  {
    id: 1,
    src: htmlLogo,
    name: "HTML",
    color: "bg-gradient-to-b from-[#e44d26] to-[#f16529]",
  },
  {
    id: 2,
    src: cssLogo,
    name: "CSS",
    color: "bg-gradient-to-b from-[#1572b6] to-[#35a8db]",
  },
  {
    id: 3,
    src: sassLogo,
    name: "SASS",
    color: "bg-white",
  },
  {
    id: 4,
    src: javascriptLogo,
    name: "JavaScript",
    color: "bg-[#f0db4f]",
  },
  {
    id: 5,
    src: typescriptLogo,
    name: "TypeScript",
    color: "bg-[#2d79c7]",
  },
  {
    id: 6,
    src: reactLogo,
    name: "React",
    color: "bg-white",
  },
  {
    id: 7,
    src: nextLogo,
    name: "Next",
    color: "black",
  },
  {
    id: 8,
    src: expoLogo,
    name: "Expo",
    color: "bg-white",
  },
  {
    id: 9,
    src: angularLogo,
    name: "Angular",
    color: "bg-gradient-to-b from-[#b52e31] to-[#e23237]",
  },
  {
    id: 10,
    src: reduxLogo,
    name: "Redux",
    color: "bg-white",
  },
  {
    id: 11,
    src: rxjsLogo,
    name: "RxJs",
    color: "bg-gradient-to-b from-[#ec0a8e] to-[#652c89]",
  },
  {
    id: 12,
    src: mysqlLogo,
    name: "MySQL",
    color: "bg-white",
  },
  {
    id: 13,
    src: tailwindLogo,
    name: "Tailwind",
    color: "bg-white",
  },
  {
    id: 14,
    src: framerMotionLogo,
    name: "Framer Motion",
    color: "bg-white",
  },
  {
    id: 15,
    src: gitLogo,
    name: "Git",
    color: "bg-white",
  },
];
