import Image from "next/image";
import { Nav } from "@/components/nav";
import { ReviaGraph } from "@/components/revia-graph";
import { ArrowLink, ArrowUpRight, GitHubIcon, Section, Tag } from "@/components/ui";
import {
  about,
  featured,
  interests,
  profile,
  projects,
  skills,
} from "@/content/site";
import portrait from "@/assets/profile.png";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 {profile.name}</p>
          <p>Gebaut mit Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}

function Hero() {
  return (
    <section className="grid items-center gap-12 py-20 sm:py-28 md:grid-cols-[1fr_auto]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {profile.status}
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Hi, ich bin Khaled.
          <span className="block text-muted">
            Ich baue Software, die verständlich bleibt.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projekte"
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Projekte ansehen
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
      <Image
        src={portrait}
        alt={`Porträt von ${profile.name}`}
        priority
        placeholder="blur"
        className="order-first aspect-square w-28 rounded-2xl object-cover grayscale-[15%] sm:w-48 md:order-none md:w-72"
      />
    </section>
  );
}

function Projects() {
  return (
    <Section id="projekte" label="01 — Arbeit" title="Projekte">
      <article className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="border-b border-line bg-accent-soft/60 px-6 pt-6 pb-2 sm:px-8">
          <ReviaGraph />
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {featured.kicker}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {featured.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{featured.description}</p>
          <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
            {featured.highlights.map((h) => (
              <li key={h} className="rounded-lg border border-line px-3 py-2">
                {h}
              </li>
            ))}
          </ul>
          <pre className="mt-5 overflow-x-auto rounded-lg bg-fg px-4 py-3 font-mono text-xs leading-relaxed text-bg">
            <span className="opacity-50">$ </span>npm run re -- check examples/hello.re
            {"\n"}
            <span className="opacity-50">$ </span>npm run re -- run examples/hello.re
          </pre>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="flex gap-4">
              {featured.links.map((l) => (
                <ArrowLink key={l.href} href={l.href}>
                  {l.label}
                </ArrowLink>
              ))}
            </div>
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-muted/50 sm:last:odd:col-span-2"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {p.kicker}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex gap-4">
                {p.links.map((l) => (
                  <ArrowLink key={l.href} href={l.href}>
                    {l.label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function About() {
  const facts = [
    ["Studium", profile.university],
    ["Stand", profile.semester],
    ["Ort", profile.location],
  ];
  return (
    <Section id="ueber-mich" label="02 — Person" title="Über mich">
      <div className="space-y-4 text-lg leading-relaxed text-muted">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
            <dd className="mt-1 font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Abseits vom Code
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="03 — Können" title="Skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((s) => (
                <li key={s} className="border-b border-line pb-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const channels = [
    { label: "E-Mail", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "Telefon",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { label: "GitHub", value: profile.githubHandle, href: profile.github },
  ];
  return (
    <Section id="kontakt" label="04 — Kontakt" title="Lass uns reden">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        Ich bin offen für Werkstudentenstellen, spannende Projekte und
        Erfahrungsaustausch. Schreib mir gern.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {c.label}
              </span>
              <span className="flex min-w-0 items-center gap-2 font-medium">
                <span className="truncate">{c.value}</span>
                <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
