export const NAME: string = "fabrizio";
export const SURNAME: string = "ettori";
export const HERO_PARAGRAPH: string =
  "Ciao, sono un junior front-end developer che aspira a trasformare in (buon) codice interfacce sempre più coinvolgenti e interattive, senza perdere di vista prestazioni e SEO.";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  href: string;
  src: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personale",
    subtitle: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "TypeScript", "Redux", "Tailwind", "Framer Motion"],
    href: "www.google.it",
    src: "https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png",
  },
  {
    id: 2,
    title: "Clone OCEANSAPART",
    subtitle: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["Next", "TypeScript", "Scss"],
    href: "www.google.it",
    src: "https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png",
  },
  {
    id: 3,
    title: "Yoga With Deep Learning",
    subtitle: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "MediaPipe"],
    href: "www.google.it",
    src: "https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png",
  },
  {
    id: 4,
    title: "Drawing App",
    subtitle: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React Native", "TypeScript", "Expo"],
    href: "www.google.it",
    src: "https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png",
  },
  {
    id: 5,
    title: "SOS App",
    subtitle: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React Native", "Redux", "Expo"],
    href: "www.google.it",
    src: "https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png",
  },
];
