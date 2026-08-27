import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, Sparkles, ScrollText } from "lucide-react";

import heroImg from "@/assets/lal-kitab-hero.jpg";
import { Page } from "@/components/site-shell";
import { planets, houses, remedies } from "@/data/lalkitab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lal Kitab — Planets, Houses & Upay Explorer" },
      {
        name: "description",
        content:
          "Explore Lal Kitab astrology: all 9 planets across the 12 houses, house meanings, and classic upay (remedies) in a clean, searchable red-book companion.",
      },
      { property: "og:title", content: "Lal Kitab — Planets, Houses & Upay Explorer" },
      {
        property: "og:description",
        content:
          "Readings for 9 planets in 12 houses, house-by-house meanings and traditional Lal Kitab remedies.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Sparkles,
    title: "Nine Planets",
    body: "Sun to Ketu — nature, significations, and a one-line Lal Kitab verdict for each of the 12 houses.",
    to: "/planets" as const,
  },
  {
    icon: BookOpen,
    title: "Twelve Houses",
    body: "The bhavas as the red book reads them: throne, treasury, battlefield, mirror and the house of loss.",
    to: "/houses" as const,
  },
  {
    icon: ScrollText,
    title: "Upay (Remedies)",
    body: "Simple, household remedies — water to the Sun, silver in the pocket, a lamp under the peepal.",
    to: "/remedies" as const,
  },
];

function Home() {
  return (
    <Page>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.32em]">
              लाल किताब · Est. 1939
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              The red book, read plainly.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Lal Kitab judges a chart by where a planet sits, not by long calculation — and answers
              every affliction with a small, doable upay. This is that knowledge, organised.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/planets"
                className="surface-lac inline-flex items-center gap-2 rounded-sm border rule-gold px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Browse the planets
              </Link>
            </div>
            <dl className="mt-10 flex gap-8 border-t border-border/70 pt-6">
              {[
                { k: planets.length, v: "Planets" },
                { k: houses.length, v: "Houses" },
                { k: planets.length * houses.length, v: "Readings" },
                { k: remedies.length, v: "Core upay" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl text-primary">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="leaf overflow-hidden rounded-sm p-2">
            <img
              src={heroImg}
              alt="An open antique red astrology book showing a gold zodiac wheel and a Vedic kundli chart"
              width={1600}
              height={1104}
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl text-foreground">Three ways in</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.title} to={p.to} className="leaf group rounded-sm p-6">
              <p.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-xl text-foreground group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="surface-lac rounded-sm border rule-gold p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">
            The first principle
          </p>
          <blockquote className="mt-4 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">
            “No planet is wholly cruel. A planet is only sitting in the wrong chair — move the chair
            with an upay, and the fate moves with it.”
          </blockquote>
          <p className="mt-5 text-sm opacity-80">
            Lal Kitab’s remedies are deliberately ordinary: water, jaggery, silver, a lamp, a dog
            fed at the door. Consistency matters more than cost.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl text-foreground">Start with a planet</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {planets.map((p) => (
            <Link
              key={p.slug}
              to="/planets/$slug"
              params={{ slug: p.slug }}
              className="leaf flex items-center gap-4 rounded-sm px-5 py-4 transition-colors hover:bg-secondary/60"
            >
              <span className="font-display text-2xl text-primary">{p.glyph}</span>
              <span>
                <span className="block text-lg text-foreground">{p.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {p.hindi} · {p.karaka}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  );
}
