import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Compass,
  HandHeart,
  Sparkles,
  Sun,
  Telescope,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/lal-kitab-hero.jpg";
import { BrandMark } from "@/components/brand-mark";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { houses, planets } from "@/data/lalkitab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LK Tradition" },
      {
        name: "description",
        content:
          "A single-page Lal Kitab companion: explore nine planets, twelve houses, and traditional remedies as practical reflection tools.",
      },
      { property: "og:title", content: "LK Tradition" },
      {
        property: "og:description",
        content:
          "Explore the nine planets, twelve houses, and traditional Lal Kitab practices with LK Tradition.",
      },
      { name: "twitter:title", content: "LK Tradition" },
    ],
  }),
  component: Home,
});

const focusAreas = [
  {
    id: "work",
    title: "Work & livelihood",
    description: "Bring steadiness to effort, learning and professional relationships.",
    planets: ["budh", "shani", "surya"],
    practice: "Choose one small, repeatable practice; pair it with a practical next step.",
  },
  {
    id: "resources",
    title: "Money & resources",
    description: "Reflect on habits around saving, speech, generosity and shared resources.",
    planets: ["budh", "guru", "rahu"],
    practice: "Review one spending or record-keeping habit alongside a traditional upay.",
  },
  {
    id: "relationships",
    title: "Relationships",
    description: "Focus on respect, clear communication and care for family bonds.",
    planets: ["shukra", "chandra", "mangal"],
    practice:
      "Start with one considerate action or honest conversation, without expecting a result.",
  },
  {
    id: "home",
    title: "Home & inner balance",
    description: "Explore themes of emotional steadiness, rest and care for your home.",
    planets: ["chandra", "rahu", "ketu"],
    practice: "Create a calm daily pause and a simple act of care for your living space.",
  },
  {
    id: "confidence",
    title: "Confidence & direction",
    description: "Reflect on courage, purpose, learning and the way you use influence.",
    planets: ["surya", "mangal", "guru"],
    practice: "Choose one useful task and complete it with patience and accountability.",
  },
  {
    id: "resilience",
    title: "Pressure & resilience",
    description: "Turn attention to patience, service and the next manageable step.",
    planets: ["shani", "mangal", "ketu"],
    practice:
      "Offer practical help where appropriate, and break a difficult task into small steps.",
  },
] as const;

const houseFlashcards = [
  {
    id: "pakka-ghar",
    title: "Pakka Ghar",
    subtitle: "A planet’s familiar seat",
    symbol: "⌂",
    icon: BookOpen,
    detail:
      "Each graha is traditionally linked with a fixed house of affinity. The Moon’s Pakka Ghar, for example, is the 4th house of home and inner steadiness.",
    note: "A useful lens—not a promise about results.",
  },
  {
    id: "teva",
    title: "Teva",
    subtitle: "The birth chart",
    symbol: "✳",
    icon: Telescope,
    detail:
      "The Teva maps grahas into the twelve houses. Read a placement in the context of the whole chart rather than as a stand-alone label.",
    note: "Start with where a graha sits.",
  },
  {
    id: "kismat",
    title: "Kismat Ka Hal",
    subtitle: "A reading of fortune",
    symbol: "✦",
    icon: Sun,
    detail:
      "Fortune and dharma are classic 9th-house themes. A Lal Kitab reading also considers the grahas and relationships shaping that house.",
    note: "The 9th house is one part of a wider reading.",
  },
  {
    id: "soya",
    title: "Soya Hua Ghar",
    subtitle: "Soya Hua Graha · sleeping house",
    symbol: "☾",
    icon: WandSparkles,
    detail:
      "A traditional phrase for a quiet or unoccupied house, or a graha whose themes seem dormant. The exact usage can vary by text and chart context.",
    note: "Quiet does not mean powerless or fixed.",
  },
  {
    id: "drishti",
    title: "Dhrishti",
    subtitle: "A planet’s influence",
    symbol: "◎",
    icon: Compass,
    detail:
      "Drishti describes a graha’s influence on another house or graha. Lal Kitab has its own interpretive approach, so read it within that tradition.",
    note: "Look at what else connects to the house.",
  },
] as const;

const karmicRemedyTerms = [
  {
    term: "Rinn",
    family: "Karmic lens",
    symbol: "ऋ",
    summary: "A debt, duty, or unresolved obligation.",
    detail:
      "Rinn is commonly translated as debt. In Lal Kitab, it can be used as a symbolic lens for obligations and patterns involving family, conduct, or relationships—not just money owed.",
    reflection: "Ask what responsibility can be met with honesty and care.",
  },
  {
    term: "Rinn Mukti",
    family: "Karmic lens",
    symbol: "↗",
    summary: "Working toward release from an obligation.",
    detail:
      "Rinn Mukti describes the idea of easing or settling a debt through appropriate conduct, responsibility, and traditional upay. It should not be read as a guaranteed result.",
    reflection: "Pair reflection with a practical, ethical step you can take.",
  },
  {
    term: "Upay",
    family: "Remedial practice",
    symbol: "✦",
    summary: "A prescribed act or change in conduct.",
    detail:
      "An upay is a traditional remedy or practice associated with a chart reading. Lal Kitab remedies often emphasize simple acts, consistency, and personal conduct.",
    reflection: "Keep a practice safe, affordable, and freely chosen.",
  },
  {
    term: "Totke",
    family: "Remedial practice",
    symbol: "❋",
    summary: "A small, specific folk remedy or observance.",
    detail:
      "Totke are particular traditional acts or observances. Instructions vary between sources and practitioners, so understand the practice before following it.",
    reflection: "Avoid anything unsafe, coercive, or financially burdensome.",
  },
  {
    term: "Daan",
    family: "Remedial practice",
    symbol: "♡",
    summary: "A voluntary, thoughtful act of giving.",
    detail:
      "Daan means giving or charity. In remedial practice it is traditionally offered without expectation; generosity should remain voluntary and within one's means.",
    reflection: "A small, respectful act of help is enough.",
  },
  {
    term: "Seva",
    family: "Remedial practice",
    symbol: "⌂",
    summary: "Service offered with care and humility.",
    detail:
      "Seva is service. Lal Kitab remedies may emphasize respectful care for family, elders, workers, animals, or the community as part of responsible conduct.",
    reflection: "Offer practical help while respecting boundaries and consent.",
  },
] as const;

const planetaryRelationships = [
  {
    term: "Kayam Graha",
    symbol: "●",
    meaning:
      "A graha treated as established or fixed within a particular Lal Kitab reading. Its role is understood through the Teva and surrounding placements.",
  },
  {
    term: "Dharmi Graha",
    symbol: "✧",
    meaning:
      "A term used for a graha read through dharma, responsibility, and conduct. Its interpretation depends on its house and chart relationships.",
  },
  {
    term: "Andha Graha",
    symbol: "◐",
    meaning:
      "Literally, a “blind” graha. The phrase points to a reading where a planet’s influence is obscured or difficult to assess; consult the full chart context.",
  },
  {
    term: "Andhi Kundli",
    symbol: "◌",
    meaning:
      "A “blind chart” expression used in some Lal Kitab discussions. Usage can differ by source, so it is best understood with the specific chart rule being applied.",
  },
  {
    term: "Muqabla Ke Graha",
    symbol: "⇄",
    meaning:
      "Grahas considered in comparison or opposition. Their house placements and effects are weighed together rather than interpreted in isolation.",
  },
  {
    term: "Kritrim Graha",
    symbol: "✳",
    meaning:
      "An artificial or derived graha: a chart relationship assigned by a Lal Kitab rule, not an additional physical planet.",
  },
] as const;

function Home() {
  const [selectedPlanetSlug, setSelectedPlanetSlug] = useState<string | null>(null);
  const [selectedHouseNumber, setSelectedHouseNumber] = useState(1);
  const [selectedFocus, setSelectedFocus] = useState<(typeof focusAreas)[number]["id"]>("work");
  const [houseGuideOpen, setHouseGuideOpen] = useState(false);
  const [flippedHouseCards, setFlippedHouseCards] = useState<string[]>([]);

  const selectedPlanet = planets.find((planet) => planet.slug === selectedPlanetSlug);
  const focus = focusAreas.find((area) => area.id === selectedFocus) ?? focusAreas[0];
  const focusedPlanets = focus.planets
    .map((slug) => planets.find((planet) => planet.slug === slug))
    .filter((planet) => planet !== undefined);
  const houseIndex = selectedHouseNumber - 1;
  const house = houses[houseIndex];

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <BrandMark className="h-11 w-11 shrink-0 drop-shadow-sm" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-lg font-semibold tracking-wide text-foreground">
                LK Tradition
              </span>
              <span className="block text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
                Planets · Houses · Practice
              </span>
            </span>
          </a>
          <nav
            aria-label="Page sections"
            className="flex items-center gap-1 overflow-x-auto text-sm"
          >
            {[
              ["grahas", "Planets"],
              ["houses", "Houses"],
              ["tradition-terms", "Terms"],
              ["planetary-relationships", "Graha ties"],
              ["tools", "Remedy tools"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="scroll-mt-20 border-b border-border/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.88fr] lg:gap-14 lg:py-24">
          <div className="animate-rise">
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.32em]">
              लाल किताब · A living tradition
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.7rem,8vw,5.8rem)] leading-[0.98] text-foreground">
              Ancient insight.
              <span className="block text-primary">Everyday action.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore the nine grahas, their house readings and traditional upay in one flowing
              guide. Choose a theme to find reflective practices you can pair with thoughtful,
              real-world action.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#grahas"
                className="surface-lac inline-flex min-h-12 items-center gap-2 rounded-full border rule-gold px-6 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Explore the planets <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#tools"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Find a remedy tool <Compass className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border/70 pt-6">
              {[
                { value: "09", label: "Grahas" },
                { value: "12", label: "Houses" },
                { value: "01", label: "Connected guide" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-primary">{stat.value}</p>
                  <p className="text-[0.68rem] uppercase tracking-[0.17em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-float relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-gold/25 blur-2xl" />
            <div className="leaf relative rotate-1 overflow-hidden rounded-[1.6rem] p-2">
              <img
                src={heroImg}
                alt="An open red astrology book with a gold zodiac wheel"
                width={1600}
                height={1104}
                className="aspect-[1.25] w-full rounded-[1.2rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-black/55 p-4 text-white backdrop-blur-md">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/70">
                    A guide for reflection
                  </p>
                  <p className="mt-1 font-display text-lg">Small steps. Steady practice.</p>
                </div>
                <Sparkles className="h-5 w-5 shrink-0 text-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="grahas" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">नवग्रह</p>
              <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Meet the nine grahas</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Tap any card to open its animated field note: significations, house-by-house
                reading, and traditional practices.
              </p>
            </div>
            <span className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Tap a card to explore
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planets.map((planet, index) => (
              <button
                key={planet.slug}
                type="button"
                onClick={() => {
                  setSelectedHouseNumber(1);
                  setSelectedPlanetSlug(planet.slug);
                }}
                className="planet-card leaf group relative min-h-52 overflow-hidden rounded-2xl p-5 text-left transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ animationDelay: `${index * 55}ms` }}
                aria-label={`Open ${planet.name} details`}
              >
                <span className="planet-glow absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {planet.hindi}
                    </p>
                    <h3 className="mt-2 text-2xl text-foreground">{planet.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{planet.karaka}</p>
                  </div>
                  <span className="planet-glyph surface-lac flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border rule-gold font-display text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {planet.glyph}
                  </span>
                </div>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {planet.significations.slice(0, 3).map((meaning) => (
                    <span
                      key={meaning}
                      className="rounded-full bg-secondary/80 px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
                <div className="relative mt-5 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
                  <span>
                    {planet.nature === "benefic"
                      ? "Shubh · benefic"
                      : planet.nature === "malefic"
                        ? "Ashubh · malefic"
                        : "Mixed nature"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-primary">
                    Open field note <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/35 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">
              The red book lens
            </p>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">
              A chart is a conversation.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Explore a reading as a prompt for reflection, not a fixed prediction. In this
              tradition, the same graha can express differently from one house to another.
            </p>
            <button
              type="button"
              onClick={() => setHouseGuideOpen(true)}
              aria-haspopup="dialog"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/50 bg-card px-4 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See the twelve houses <ArrowDown className="h-4 w-4" />
            </button>
          </div>
          <div id="houses" className="scroll-mt-24 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {houses.map((item) => (
              <article key={item.num} className="leaf rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="surface-lac flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border rule-gold font-display">
                    {item.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.theme}
                  </span>
                </div>
                <h3 className="mt-3 text-lg leading-tight text-foreground">{item.name}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tradition-terms"
        className="scroll-mt-20 border-b border-border/70 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">
              ऋण · उपाय · सेवा
            </p>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Karmic & remedial terms</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tap a card to unfold a plain-language note. Lal Kitab vocabulary can vary across
              editions and teachers; use these as introductory study notes.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {karmicRemedyTerms.map((item, index) => (
              <details
                key={item.term}
                className="term-accordion leaf group rounded-2xl"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <summary className="flex min-h-28 cursor-pointer list-none items-center gap-4 rounded-2xl p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  <span className="surface-lac flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border rule-gold font-display text-2xl">
                    {item.symbol}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {item.family}
                    </span>
                    <span className="mt-1 block font-display text-xl text-foreground">
                      {item.term}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </span>
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="animate-rise border-t border-border/70 px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-foreground/85">{item.detail}</p>
                  <p className="mt-3 flex gap-2 rounded-xl bg-secondary/65 p-3 text-xs leading-relaxed text-muted-foreground">
                    <HandHeart className="h-4 w-4 shrink-0 text-primary" />
                    {item.reflection}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="planetary-relationships"
        className="scroll-mt-20 overflow-hidden border-b border-border/70 bg-secondary/35 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">ग्रह संबंध</p>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Planetary relationships</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Follow the moving ribbon for a quick introduction. Pause it with a hover, touch, or
              keyboard focus; swipe horizontally to explore at your own pace.
            </p>
          </div>
        </div>
        <div
          className="relationship-marquee mt-8"
          role="region"
          aria-roledescription="auto-scrolling glossary"
          aria-label="Lal Kitab planetary relationship terms"
          tabIndex={0}
          onTouchStart={(event) => {
            event.currentTarget.classList.add("is-paused");
          }}
          onTouchEnd={(event) => {
            const marquee = event.currentTarget;
            window.setTimeout(() => marquee.classList.remove("is-paused"), 1200);
          }}
        >
          <div className="relationship-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="relationship-group" aria-hidden={copy === 1}>
                {planetaryRelationships.map((item) => (
                  <article key={item.term} className="relationship-card leaf">
                    <div className="flex items-center gap-3">
                      <span className="surface-lac flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border rule-gold font-display text-xl">
                        {item.symbol}
                      </span>
                      <h3 className="font-display text-lg text-foreground">{item.term}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.meaning}
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-7xl px-4 text-xs leading-relaxed text-muted-foreground sm:px-6">
          Traditional terms are presented as a general glossary, not as a chart-specific reading.
          Exact usage may vary by Lal Kitab edition and practitioner.
        </p>
      </section>

      <section id="tools" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">
              उपाय · practice
            </p>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">
              Turn a concern into a useful next step
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Choose a life theme to explore grahas traditionally associated with it. Treat each
              upay as a cultural or reflective practice—not a promise or substitute for practical
              support.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-3" aria-label="Choose an area to reflect on">
              {focusAreas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedFocus(area.id)}
                  aria-pressed={selectedFocus === area.id}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    selectedFocus === area.id
                      ? "surface-lac border-gold/60 shadow-lg"
                      : "leaf hover:-translate-y-0.5 hover:border-gold/50"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-xl">{area.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70" />
                  </span>
                  <span
                    className={`mt-1 block text-sm leading-relaxed ${
                      selectedFocus === area.id ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {area.description}
                  </span>
                </button>
              ))}
            </div>
            <div className="leaf min-h-96 rounded-3xl p-5 sm:p-8">
              <div className="flex items-start gap-4 border-b border-border/70 pb-5">
                <span className="surface-lac flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border rule-gold">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Your reflection path
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-foreground">{focus.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {focus.practice}
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {focusedPlanets.map((planet, index) => (
                  <article
                    key={planet.slug}
                    className="animate-rise rounded-2xl border border-border/80 bg-background/65 p-4 sm:p-5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl text-primary">{planet.glyph}</span>
                        <div>
                          <h4 className="font-display text-lg text-foreground">{planet.name}</h4>
                          <p className="text-xs text-muted-foreground">{planet.karaka}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedHouseNumber(1);
                          setSelectedPlanetSlug(planet.slug);
                        }}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        Open planet note
                      </button>
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Traditional practices to explore
                    </p>
                    <ul className="mt-2 space-y-2">
                      {planet.remedies.slice(0, 2).map((remedy) => (
                        <li
                          key={remedy}
                          className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                        >
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {remedy}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="mt-5 rounded-xl bg-secondary/65 p-4 text-xs leading-relaxed text-muted-foreground">
                Start with one safe, affordable practice that feels meaningful to you. Pair it with
                an actionable step—such as a conversation, a budget review, or asking a qualified
                professional for support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 bg-secondary/30 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10 shrink-0" />
              <p className="font-display text-xl text-foreground">LK Tradition</p>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              These readings describe a traditional astrological system and are offered for study
              and reflection. Remedies are not guaranteed outcomes or medical, legal, financial or
              mental-health advice.
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Back to top <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </footer>

      <Dialog
        open={selectedPlanet !== undefined}
        onOpenChange={(open) => {
          if (!open) setSelectedPlanetSlug(null);
        }}
      >
        {selectedPlanet ? (
          <DialogContent className="planet-dialog max-h-[90dvh] w-[calc(100%-1.25rem)] max-w-2xl overflow-y-auto rounded-3xl border-gold/40 p-0 sm:w-[calc(100%-2rem)]">
            <div className="surface-lac relative overflow-hidden p-6 pb-7 text-primary-foreground sm:p-8">
              <span className="absolute -right-8 -top-14 font-display text-[13rem] leading-none opacity-[0.08]">
                {selectedPlanet.glyph}
              </span>
              <DialogHeader className="relative pr-10 text-left">
                <p className="text-xs uppercase tracking-[0.25em] opacity-70">
                  {selectedPlanet.hindi}
                </p>
                <DialogTitle className="mt-2 font-display text-4xl text-primary-foreground sm:text-5xl">
                  {selectedPlanet.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-primary-foreground/75">
                  {selectedPlanet.karaka}
                </DialogDescription>
              </DialogHeader>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {selectedPlanet.significations.map((meaning) => (
                  <span
                    key={meaning}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs"
                  >
                    {meaning}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6 p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary/70 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Traditionally favourable
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Houses {selectedPlanet.strongHouses.join(", ")}
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/70 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Traditionally challenging
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Houses {selectedPlanet.weakHouses.join(", ")}
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="house-picker"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  Explore a house
                </label>
                <select
                  id="house-picker"
                  value={selectedHouseNumber}
                  onChange={(event) => setSelectedHouseNumber(Number(event.target.value))}
                  className="mt-2 min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {houses.map((item) => (
                    <option key={item.num} value={item.num}>
                      House {item.num} · {item.theme}
                    </option>
                  ))}
                </select>
                {house ? (
                  <article className="animate-rise mt-3 rounded-2xl border border-border bg-background/65 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-xl text-foreground">
                        House {house.num} · {house.name}
                      </h3>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                        {selectedPlanet.strongHouses.includes(house.num)
                          ? "Traditionally favourable"
                          : selectedPlanet.weakHouses.includes(house.num)
                            ? "Traditionally challenging"
                            : "Explore with context"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {house.theme}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                      {selectedPlanet.houses[houseIndex]}
                    </p>
                  </article>
                ) : null}
              </div>
              <div className="rounded-2xl border border-gold/40 bg-accent/35 p-5">
                <h3 className="font-display text-xl text-foreground">Traditional practices</h3>
                <ul className="mt-3 space-y-3">
                  {selectedPlanet.remedies.map((remedy) => (
                    <li
                      key={remedy}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {remedy}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground">
                  Suggested donation in this tradition: {selectedPlanet.donation}
                </p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Traditional interpretation for reflection only; not a guaranteed outcome or
                professional advice.
              </p>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>

      <Dialog
        open={houseGuideOpen}
        onOpenChange={(open) => {
          setHouseGuideOpen(open);
          if (!open) setFlippedHouseCards([]);
        }}
      >
        <DialogContent className="planet-dialog max-h-[90dvh] w-[calc(100%-1.25rem)] max-w-4xl overflow-y-auto rounded-3xl border-gold/40 p-5 sm:w-[calc(100%-2rem)] sm:p-8">
          <DialogHeader className="pr-9 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              A little Lal Kitab lexicon
            </p>
            <DialogTitle className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
              The twelve houses, at a glance
            </DialogTitle>
            <DialogDescription className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Tap a keepsake card to turn it over. Each one opens a short note on a familiar chart
              concept and the way it can frame a house reading.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {houseFlashcards.map((card, index) => {
              const Icon = card.icon;
              const isFlipped = flippedHouseCards.includes(card.id);
              return (
                <button
                  key={card.id}
                  type="button"
                  aria-pressed={isFlipped}
                  aria-label={`${card.title}: ${isFlipped ? "show the front" : "tap to read the meaning"}`}
                  onClick={() =>
                    setFlippedHouseCards((current) =>
                      isFlipped ? current.filter((id) => id !== card.id) : [...current, card.id],
                    )
                  }
                  className="house-flash-card group h-52 w-full rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{ animationDelay: `${index * 65}ms` }}
                  data-flipped={isFlipped}
                >
                  <span className="house-flash-inner">
                    <span className="house-flash-face house-flash-front leaf">
                      <span className="flex items-start justify-between gap-2">
                        <span className="surface-lac flex h-10 w-10 items-center justify-center rounded-xl border rule-gold font-display text-xl">
                          {card.symbol}
                        </span>
                        <Icon className="h-4 w-4 text-gold" />
                      </span>
                      <span className="mt-5 block font-display text-2xl text-foreground">
                        {card.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {card.subtitle}
                      </span>
                      <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-primary">
                        Tap to turn <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                    <span className="house-flash-face house-flash-back">
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/75">
                        <Icon className="h-4 w-4" />
                        {card.title}
                      </span>
                      <span className="mt-3 block text-sm leading-relaxed text-primary-foreground">
                        {card.detail}
                      </span>
                      <span className="mt-auto block border-t border-white/20 pt-3 text-xs leading-relaxed text-primary-foreground/75">
                        {card.note}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            These are traditional concepts for learning and reflection. Texts and interpretations
            may differ; use a full chart context rather than treating a card as a prediction.
          </p>
        </DialogContent>
      </Dialog>
    </main>
  );
}
