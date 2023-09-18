import portfolioImg from "../assets/projects/portfolio.png";
import oceansImg from "../assets/projects/oceans.png";
import yogaImg from "../assets/projects/yoga.png";
import sosImg from "../assets/projects/sos.png";
import drawingImg from "../assets/projects/drawing.png";

export interface ProjectInt {
  id: number;
  title: string;
  description: string;
  stack: string[];
  href: string;
  src: string;
  done: boolean;
}

export const projects: ProjectInt[] = [
  {
    id: 1,
    title: "Portfolio Personale",
    description:
      "Breve presentazione delle mie competenze e dei principali progetti realizzati, con relativi link di contatto e approfondimento.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://github.com/fabettdev/fe-portfolio",
    src: portfolioImg,
    done: false,
  },
  {
    id: 2,
    title: "Clone OCEANSAPART",
    description:
      "Clone del noto e-commerce OCEANSAPART. Lo scopo del progetto è quello di testare alcune novità CSS (scroll-driven animations in primis), ma anche per avere un primo approccio con tecnologie back-end quali PostgreSQL e Supabase - una volta terminato il front-end.",
    stack: ["Next", "TypeScript", "Scss"],
    href: "https://github.com/fabettdev/oceansapart-clone",
    src: oceansImg,
    done: false,
  },
  {
    id: 3,
    title: "Yoga With Deep Learning",
    description:
      "Progetto che sfrutta la libreria di deep learning MediaPipe di Google per la realizzazione di una web-app che consenta di tracciare i movimenti dell'utente e allertarlo nel caso di posizioni yoga mal eseguite.",
    stack: ["React", "MediaPipe"],
    href: "https://github.com/fabettdev/yoga-with-deep-learning",
    src: yogaImg,
    done: true,
  },
  {
    id: 4,
    title: "Drawing App",
    description:
      "Applicazione per smartphone che consente di disegnare su una tavolozza vuota, così come su una immagine caricata dalla libreria del dispositivo. È possibile cambiare il colore, scegliendo tra quelli definitivi o usando il color picker integrato, così come lo spessore del tratto.",
    stack: ["React Native", "TypeScript", "Expo"],
    href: "https://github.com/fabettdev/drawing-app",
    src: drawingImg,
    done: true,
  },
  {
    id: 5,
    title: "SOS App",
    description:
      "SOS app che tiene traccia dell'ultima posizione del dispositivo, così da poterla condividere in pochi secondi in caso di emergenza. È possibile personalizzare il messaggio da inviare e aggiungere fino a 5 contatti riceventi.",
    stack: ["React Native", "Redux", "Expo"],
    href: "",
    src: sosImg,
    done: true,
  },
];
