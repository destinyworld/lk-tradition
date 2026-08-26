import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Page } from "@/components/site-shell";
import { planets, houses } from "@/data/lalkitab";

export const Route = createFileRoute("/planets/$slug")({
  loader: ({ params }) => {
    const planet = planets.find((p) => p.slug === params.slug);
    if (!planet) throw notFound();
    return { planet };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Planet not found — Lal Kitab" }, { name: "robots", content: "noindex" }],
      };
    }
    const { planet } = loaderData;
    const title = `${planet.name} (${planet.hindi}) in Lal Kitab — House Readings & Upay`;
    const description = `${planet.name} in all 12 houses as Lal Kitab reads it, plus traditional remedies and donation guidance. ${planet.karaka}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PlanetDetail,
  notFoundComponent: PlanetNotFound,
});

function PlanetNotFound() {
  return (
    <Page>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <h1 className="text-4xl text-foreground">No such planet</h1>
        <p className="mt-3 text-muted-foreground">
          Lal Kitab works with nine grahas only. Return to the list to pick one.
        </p>
        <Link to="/planets" className="mt-6 inline-block text-primary underline">
          All planets
        </Link>
      </div>
    </Page>
  );
}

function PlanetDetail() {
  const { planet } = Route.useLoaderData();

  return (
    <Page>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Link to="/planets" className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            ← Navagraha
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <span className="surface-lac flex h-16 w-16 items-center justify-center rounded-full border rule-gold text-3xl">
              {planet.glyph}
            </span>
            <div>
              <h1 className="text-4xl text-foreground sm:text-5xl">{planet.name}</h1>
              <p className="mt-1 text-muted-foreground">
                {planet.hindi} · {planet.karaka}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Fact label="Significations" value={planet.significations.join(", ")} />
            <Fact label="Strong in houses" value={planet.strongHouses.join(", ")} />
            <Fact label="Weak in houses" value={planet.weakHouses.join(", ")} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-3xl text-foreground">{planet.name} through the twelve houses</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {planet.houses.map((reading, i) => {
            const h = houses[i]!;
            const strong = planet.strongHouses.includes(h.num);
            return (
              <article key={h.num} className="leaf rounded-sm p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg text-foreground">
                    House {h.num} · {h.name}
                  </h3>
                  <span
                    className={
                      strong
                        ? "rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground"
                        : "rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    }
                  >
                    {strong ? "Favourable" : "Needs upay"}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {h.theme}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{reading}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="leaf rounded-sm p-7">
            <h2 className="text-2xl text-foreground">Upay for {planet.name}</h2>
            <ul className="mt-5 space-y-3">
              {planet.remedies.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-lac rounded-sm border rule-gold p-7">
            <h2 className="text-2xl">Daan (donation)</h2>
            <p className="mt-4 text-sm leading-relaxed opacity-90">{planet.donation}</p>
            <p className="mt-6 text-xs opacity-75">
              Lal Kitab asks that daan be given quietly and without expecting return; a remedy done
              for show is counted as not done.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="leaf rounded-sm p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm text-foreground">{value}</p>
    </div>
  );
}
