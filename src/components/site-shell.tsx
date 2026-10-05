import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <BrandMark className="h-10 w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-lg text-foreground">LK Tradition</span>
            <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Planets · Houses · Practice
            </span>
          </span>
        </a>
        <nav className="ml-auto flex flex-wrap items-center gap-1 text-sm">
          <a
            href="#grahas"
            className="rounded-sm px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
          >
            Planets
          </a>
          <a
            href="#houses"
            className="rounded-sm px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
          >
            Houses
          </a>
          <a
            href="#tools"
            className="rounded-sm px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
          >
            Remedy tools
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">LK Tradition</p>
        <p className="mt-2 max-w-2xl">
          Readings and upay here follow the traditional Lal Kitab texts (1939–1952) and are shared
          for study and reflection. They are not medical, legal or financial advice.
        </p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 pb-8">
      <p className="text-foil text-xs font-semibold uppercase tracking-[0.3em]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">{title}</h1>
      {lead ? <p className="mt-4 max-w-2xl text-muted-foreground">{lead}</p> : null}
    </div>
  );
}
