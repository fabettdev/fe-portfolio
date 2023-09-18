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
  colorSingle: string;
  colorFrom: string;
  colorTo: string;
}

export const skillsArray: SkillInt[] = [
  {
    id: 1,
    src: htmlLogo,
    name: "HTML",
    colorSingle: "",
    colorFrom: "E44D26",
    colorTo: "F16529",
  },
  {
    id: 2,
    src: cssLogo,
    name: "CSS",
    colorSingle: "",
    colorFrom: "1572B6",
    colorTo: "35A8DB",
  },
  {
    id: 3,
    src: sassLogo,
    name: "SASS",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 4,
    src: javascriptLogo,
    name: "JavaScript",
    colorSingle: "F0DB4F",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 5,
    src: typescriptLogo,
    name: "TypeScript",
    colorSingle: "2D79C7",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 6,
    src: reactLogo,
    name: "React",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 7,
    src: nextLogo,
    name: "Next",
    colorSingle: "000",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 8,
    src: expoLogo,
    name: "Expo",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 9,
    src: angularLogo,
    name: "Angular",
    colorSingle: "",
    colorFrom: "B52E31",
    colorTo: "E23237",
  },
  {
    id: 10,
    src: reduxLogo,
    name: "Redux",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 11,
    src: rxjsLogo,
    name: "RxJs",
    colorSingle: "",
    colorFrom: "EC0A8E",
    colorTo: "652C89",
  },
  {
    id: 12,
    src: mysqlLogo,
    name: "MySQL",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 13,
    src: tailwindLogo,
    name: "Tailwind",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 14,
    src: framerMotionLogo,
    name: "Framer Motion",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
  {
    id: 15,
    src: gitLogo,
    name: "Git",
    colorSingle: "FFFFFF",
    colorFrom: "",
    colorTo: "",
  },
];
