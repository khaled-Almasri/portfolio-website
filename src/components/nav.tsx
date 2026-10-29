import { profile } from "@/content/site";

const links = [
  { href: "#projekte", label: "Projekte" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-muted transition-colors hover:text-fg sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-fg px-4 py-1.5 font-medium text-bg transition-opacity hover:opacity-85"
          >
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
}
