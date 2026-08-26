import { createFileRoute } from "@tanstack/react-router";

import { Page, PageHeading } from "@/components/site-shell";
import { remedies, planets } from "@/data/lalkitab";

export const Route = createFileRoute("/remedies")({
  head: () => ({
    meta: [
      { title: "Lal Kitab Upay — Classic Remedies & Daan Guide" },
      {
        name: "description",
        content:
          "Traditional Lal Kitab remedies: water to the Sun, silver for the Moon and Rahu, mustard-oil lamp for Saturn, plus per-planet donation days.",
      },
      { property: "og:title", content: "Lal Kitab Upay — Classic Remedies" },
      {
        property: "og:description",
        content: "Household remedies and weekday daan guidance for all nine planets.",
      },
    ],
  }),
  component: RemediesPage,
});

function RemediesPage() {
  return (
    <Page>
      <PageHeading
        eyebrow="उपाय"
        title="Remedies & Daan"
        lead="Lal Kitab is famous for its upay: cheap, physical, repeatable acts. The rule is consistency — a remedy begun should be carried through, and never announced."
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-2">
          {remedies.map((r) => (
            <article key={r.title} className="leaf rounded-sm p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl text-foreground">{r.title}</h2>
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
                  {r.planet}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {r.when}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{r.text}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <h2 className="text-3xl text-foreground">Daan by planet</h2>
        <div className="leaf mt-6 overflow-hidden rounded-sm">
          <table className="w-full text-left text-sm">
            <thead className="surface-lac">
              <tr>
                <th className="px-5 py-3 font-medium">Planet</th>
                <th className="px-5 py-3 font-medium">What to give, and when</th>
              </tr>
            </thead>
            <tbody>
              {planets.map((p) => (
                <tr key={p.slug} className="border-t border-border/70">
                  <td className="px-5 py-3 whitespace-nowrap text-foreground">
                    <span className="mr-2 text-primary">{p.glyph}</span>
                    {p.name}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{p.donation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Give in person where possible, before noon, and never from borrowed money.
        </p>
      </section>
    </Page>
  );
}
