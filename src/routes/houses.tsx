import { createFileRoute } from "@tanstack/react-router";

import { Page, PageHeading } from "@/components/site-shell";
import { houses } from "@/data/lalkitab";

export const Route = createFileRoute("/houses")({
  head: () => ({
    meta: [
      { title: "The Twelve Houses (Bhavas) in Lal Kitab" },
      {
        name: "description",
        content:
          "House-by-house meaning in Lal Kitab: Tanu, Dhan, Sahaj, Sukh, Putra, Rog, Kalatra, Ayu, Bhagya, Karma, Labh and Vyaya bhava.",
      },
      { property: "og:title", content: "The Twelve Houses (Bhavas) in Lal Kitab" },
      {
        property: "og:description",
        content: "What each of the 12 bhavas governs and which planets sit well there.",
      },
    ],
  }),
  component: HousesPage,
});

function HousesPage() {
  return (
    <Page>
      <PageHeading
        eyebrow="द्वादश भाव"
        title="The Twelve Houses"
        lead="In Lal Kitab the houses are fixed rooms of a single house — the first is the throne, the sixth the battlefield, the twelfth the door out. A planet's fate depends on the room it wakes up in."
      />
      <div className="mx-auto max-w-6xl px-5 pb-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {houses.map((h) => (
            <article key={h.num} className="leaf flex flex-col rounded-sm p-6">
              <div className="flex items-center gap-3">
                <span className="surface-lac flex h-10 w-10 items-center justify-center rounded-sm border rule-gold font-display text-lg">
                  {h.num}
                </span>
                <div>
                  <h2 className="text-xl text-foreground">{h.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {h.hindi} · lord {h.lord}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {h.theme}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">{h.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/70 pt-4">
                {h.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Page>
  );
}
