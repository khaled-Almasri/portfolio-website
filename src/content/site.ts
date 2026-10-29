// All texts of the portfolio live here – edit this file to update the site.

export const profile = {
  name: "Khaled Almasri",
  role: "Informatik-Student · Backend & funktionale Programmierung",
  location: "Bremen",
  university: "Universität Bremen",
  semester: "6. Semester, B.Sc. Informatik",
  status: "Offen für Werkstudentenstellen",
  intro:
    "Ich studiere Informatik an der Universität Bremen und baue am liebsten Backend-Systeme mit klarer Architektur – objektorientiert in Java, funktional in Haskell.",
  email: "khaled11.masri12@gmail.com",
  phone: "+49 176 76496689",
  github: "https://github.com/khaled-Almasri",
  githubHandle: "khaled-Almasri",
};

export const about = [
  "Im Studium habe ich ein solides Fundament in Algorithmen, Datenstrukturen und moderner Softwareentwicklung aufgebaut. Mich reizt vor allem die Frage, wie man Systeme so strukturiert, dass sie auch mit wachsender Komplexität verständlich bleiben.",
  "Java nutze ich für robuste, objektorientierte Anwendungen, Haskell für typsichere, deklarative Logik. Dazu kommen praktische Erfahrungen mit SQL und relationalen Datenbanken. Im Bachelorprojekt ReVia habe ich im Team die Flutter-Oberfläche einer Reha-App mitentwickelt, die ihre Inhalte aus einem Knowledge Graph bezieht.",
];

export const interests = [
  "Schach & Strategie",
  "Hackathons & Prototyping",
  "Agiles Arbeiten im Team",
  "Fitness",
];

export const skills = [
  {
    title: "Sprachen",
    items: ["Java", "Haskell", "Dart / Flutter", "SQL", "SPARQL"],
  },
  {
    title: "Konzepte",
    items: [
      "OOP & Entwurfsmuster",
      "Funktionale Programmierung",
      "Algorithmen & Datenstrukturen",
      "Relationales Datenbankdesign",
      "Knowledge Graphs",
    ],
  },
  {
    title: "Werkzeuge",
    items: ["Git & GitHub", "GitLab CI", "Vercel"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const featured = {
  title: "ReVia – Reha-App",
  kicker: "Bachelorprojekt · Teamprojekt · SoSe 2026",
  description:
    "Prototyp einer App, die Patient:innen bei der selbstständigen Rehabilitation zwischen Physiotherapie-Terminen unterstützt. Ein Knowledge Graph verknüpft Übungen, Körperregionen, Kontraindikationen und Trainingseffekte – daraus entstehen personalisierte Trainingspläne, Fortschritts- und Schmerzverläufe sowie ein Profil mit interaktiver Körperkarte.",
  role: "Architektur und Implementierung der Flutter-Oberfläche im UI-Team, Qualitätssicherung mit realen Graph- und Isar-Daten sowie Analyse und Behebung von Integrationsfehlern zwischen App, API und Wissensbasis.",
  highlights: [
    "Mobile App mit Flutter & Dart",
    "OWL-Ontologie, abgefragt per SPARQL (Apache Jena Fuseki)",
    "Lokale Nutzerdaten mit Isar",
  ],
  tags: ["Flutter", "Dart", "Knowledge Graph", "SPARQL", "Isar", "Teamarbeit"],
  note: "Repository privat (Universität Bremen)",
  links: [] as { label: string; href: string }[],
};

export const projects: Project[] = [
  {
    title: "AlFa – Asset Management",
    kicker: "Java Backend",
    description:
      "Asset-Management-System (Bokerfi), das Ressourcen und betriebswirtschaftliche Assets strukturiert verwaltet. Schwerpunkt auf sauberer OOP-Architektur, Skalierbarkeit und CI über GitLab.",
    tags: ["Java", "OOP", "Backend"],
    links: [{ label: "Code", href: "https://github.com/khaled-Almasri/AlFa" }],
  },
  {
    title: "Roboter-Simulation",
    kicker: "Java · v1 → v2",
    description:
      "Objektorientierte Simulation eines autonomen Roboters mit Ultraschall-, Infrarot- und Distanzsensoren, Batteriemanagement und zentraler ControlUnit. Version 2 ergänzt dynamische Collections, die Schnittstelle DataSample und eine realistischere Verbrauchslogik.",
    tags: ["Java", "Interfaces", "Collections"],
    links: [
      { label: "v1", href: "https://github.com/khaled-Almasri/Java-Robot" },
      { label: "v2", href: "https://github.com/khaled-Almasri/Erweitere-Robot-Java" },
    ],
  },
  {
    title: "Graph-Haskel",
    kicker: "Funktionale Graphentheorie",
    description:
      "Typsichere Implementierung gerichteter Graphen in Haskell – mit Functor-Instanzen, rekursivem Folding (foldG, foldPath), Pfadsuche und Nachbarschaftsanalyse im rein funktionalen Stil.",
    tags: ["Haskell", "Functors", "Rekursion"],
    links: [{ label: "Code", href: "https://github.com/khaled-Almasri/Graph-Haskel" }],
  },
];
