import { createFileRoute, Link } from "@tanstack/react-router";

import { Page, PageHeading } from "@/components/site-shell";
import { planets } from "@/data/lalkitab";

export const Route = createFileRoute("/planets/")({
  head: () => ({
    meta: [
      { title: "The Nine Planets in Lal Kitab — Nature & Upay" },
      {
        name: "description",
        content:
          "Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu as Lal Kitab reads them: nature, significations, strong and weak houses, and remedies.",
      },
      { property: "og:title", content: "The Nine Planets in Lal Kitab" },
      {
        property: "og:description",
        content: "Nature, significations, strong and weak houses, and upay for all nine grahas.",
      },
    ],
  }),
  component: PlanetsIndex,
});

const natureLabel: Record<string, string> = {
  benefic: "Shubh · benefic",
  malefic: "Ashubh · malefic",
  mixed: "Mixed nature",
};

function PlanetsIndex() {
  return (
    <Page>
      <PageHeading
        eyebrow="नवग्रह"
        title="The Nine Planets"
        lead="Lal Kitab treats each graha as a resident of a house — helpful in some chairs, restless in others. Open a planet to see its verdict for every house."
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {planets.map((p) => (
          <Link
            key={p.slug}
            to="/planets/$slug"
            params={{ slug: p.slug }}
            className="leaf group flex flex-col rounded-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl text-foreground group-hover:text-primary">{p.name}</h2>
                <p className="text-sm text-muted-foreground">{p.hindi}</p>
              </div>
              <span className="surface-lac flex h-11 w-11 items-center justify-center rounded-full border rule-gold text-xl">
                {p.glyph}
              </span>
            </div>
            <p className="mt-4 text-sm text-foreground/80">{p.karaka}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {natureLabel[p.nature]}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.significations.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-5 border-t border-border/70 pt-4 text-xs text-muted-foreground">
              Strong in houses {p.strongHouses.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </Page>
  );
}
