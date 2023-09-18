export interface ExperienceInt {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string;
  stack: string[];
}

export const experiencesArray: ExperienceInt[] = [
  {
    id: 1,
    position: "Front-End Academy Trainee",
    company: "Beije Consulting",
    duration: "Feb 2023 - Presente",
    description:
      "Academy volta alla formazione di junior front-end developer pronti per il mondo del lavoro. Il focus è stato su React, React Native e relative best practices, ma ho avuto modo di approcciarmi nella fase finale anche ad Angular e RxJS. Durante la formazione, abbiamo realizzato in collaborazione con l'academy back-end un e-commerce completo di back-office in 4 settimane utilizzando la metolodia Agile Scrum, alternandoci settimanalmente nel ruolo di Scrum Master.",
    stack: [
      "Sourcetree",
      "React",
      "Redux",
      "React Native",
      "Angular",
      "RxJs",
      "Next",
    ],
  },
  {
    id: 2,
    position: "Jr. Full Stack Web Developer Trainee",
    company: "Boolean Careers",
    duration: "Mag 2022 - Nov 2022",
    description:
      "Percorso formativo full-time della durata di 6 mesi nel quale ho avuto il mio primo vero approccio con il mondo della programmazione full-stack. Ho avuto modo di creare progetti sia in autonomia, come le repliche di siti e web-app reali (Netflix, WhatsApp Web, Digital Ocean, Spotify Web per citarne alcuni), che in gruppo. Nel progetto finale della durata di 3 settimane, in collaborazione con 4 colleghi, abbiamo realizzato il clone funzionante dell'app Deliveroo, completo di back-office e back-end.",
    stack: [
      "Git",
      "HTML",
      "CSS",
      "Javascript",
      "VueJS",
      "MySQL",
      "PHP",
      "Laravel",
    ],
  },
  {
    id: 3,
    position: "Affiliate Marketer/SEO",
    company: "Freelance",
    duration: "Ago 2016 - Apr 2023",
    description:
      "Creazione di siti web multi e monotematici in WordPress. Redazione e gestione del piano editoriale. Posizionamento dei siti web sui motori di ricerca sfruttando le best practice SEO, sfruttando tool professionali quali SemRush, SEOZoom, Ahrefs e Screaming Frog. Monitoraggio dei risultati utilizzando le piattaforme Google Search Console/Analytics.",
    stack: [
      "Wordpress",
      "Google Search Console",
      "Google Analytics",
      "SEOZoom",
      "Semrush",
      "Ahrefs",
      "Screaming Frog",
    ],
  },
];
