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
  "Java nutze ich für robuste, objektorientierte Anwendungen, Haskell für typsichere, deklarative Logik. Dazu kommen praktische Erfahrungen mit SQL und relationalen Datenbanken. Aktuell arbeite ich an Revia mit, einer graphbasierten Sprache für Software, die von KI-Agenten geschrieben und von Menschen geprüft wird.",
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
    items: ["Java", "Haskell", "SQL"],
  },
  {
    title: "Konzepte",
    items: [
      "OOP & Entwurfsmuster",
      "Funktionale Programmierung",
      "Algorithmen & Datenstrukturen",
      "Relationales Datenbankdesign",
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
  title: "Revia",
  kicker: "Aktuelles Projekt · Open Source",
  description:
    "Eine graphbasierte Programmiersprache für KI-native Entwicklung: Agenten schreiben Programme, Menschen prüfen und steuern sie über verifizierbare semantische Graphen. Fähigkeiten, Effekte, Fehler und Ressourcen sind explizit, Serialisierung und Graph-Identität deterministisch.",
  highlights: [
    "Referenz-Toolchain in JavaScript",
    "Nativer Translator & VM in Rust",
    "Konformitäts- und Byte-genaue Golden-Tests",
  ],
  tags: ["Rust", "JavaScript", "Sprachdesign", "AI Agents", "MPL-2.0"],
  links: [{ label: "Repository", href: "https://github.com/regrevia/Revia" }],
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
