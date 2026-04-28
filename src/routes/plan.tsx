import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { stores, categoryEmoji } from "@/data/stores";
import { storeCoords } from "@/data/store-coords";
import siteMap from "@/assets/site-map.png";

export const Route = createFileRoute("/plan")({
  validateSearch: (search: Record<string, unknown>) => ({
    store: typeof search.store === "string" ? search.store : "",
  }),
  head: () => ({
    meta: [
      { title: "Interaktywny plan — Zawiercie City Center" },
      {
        name: "description",
        content:
          "Interaktywna mapa kompleksu Zawiercie City Center. Znajdź sklep w pawilonach Brama Jury, M Park i Aura Park.",
      },
      { property: "og:title", content: "Plan centrum — Zawiercie City Center" },
    ],
  }),
  component: PlanPage,
});

function PlanPage() {
  const { store: storeParam } = Route.useSearch();
  const [active, setActive] = useState<string | null>(storeParam || null);
  const [hover, setHover] = useState<string | null>(null);
  const targetRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setActive(storeParam || null);
  }, [storeParam]);

  // scroll active store into view
  useEffect(() => {
    if (active && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }, [active]);

  const storeMap = useMemo(() => {
    const m = new Map<string, (typeof stores)[number]>();
    stores.forEach((s) => m.set(s.name, s));
    return m;
  }, []);

  const activeStore = active ? storeMap.get(active) : null;
  const activeCoord = active ? storeCoords[active] : null;

  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      <header className="px-6 lg:px-12 pt-16 pb-8 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Plan
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
          Interaktywna<br />
          <span className="text-ink/40">mapa centrum.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-base lg:text-lg text-ink/70">
          Najedź lub kliknij na sklep, aby zobaczyć szczegóły. Możesz też wybrać markę z{" "}
          <Link to="/sklepy" className="underline hover:text-accent">listy sklepów</Link>{" "}
          — przeniesiemy Cię prosto do jej lokalizacji.
        </p>
      </header>

      <main className="px-6 lg:px-12 max-w-[1600px] mx-auto w-full flex-1 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          {/* MAP */}
          <div className="relative bg-stone/30 border border-ink/20 overflow-auto max-h-[80vh]">
            <div className="relative w-full" style={{ minWidth: 800 }}>
              <img
                src={siteMap}
                alt="Plan kompleksu Zawiercie City Center"
                className="w-full h-auto block select-none"
                draggable={false}
              />
              {/* Hotspots */}
              {Object.entries(storeCoords).map(([name, c]) => {
                const isActive = active === name;
                const isHover = hover === name;
                const w = c.w ?? 6;
                const h = c.h ?? 5;
                return (
                  <button
                    key={name}
                    ref={isActive ? targetRef : undefined}
                    onMouseEnter={() => setHover(name)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setActive(name)}
                    aria-label={name}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                      isActive
                        ? "ring-4 ring-accent bg-accent/30 z-30"
                        : isHover
                        ? "ring-2 ring-ink bg-ink/10 z-20"
                        : "bg-transparent hover:bg-ink/5 z-10"
                    }`}
                    style={{
                      left: `${c.x}%`,
                      top: `${c.y}%`,
                      width: `${w}%`,
                      height: `${h}%`,
                      borderRadius: 4,
                    }}
                  >
                    {(isActive || isHover) && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ink text-paper text-[10px] font-bold uppercase tracking-widest px-2 py-1 pointer-events-none">
                        {name}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute inset-0 animate-ping rounded ring-2 ring-accent pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="border border-ink/20 p-6 bg-paper h-fit lg:sticky lg:top-24">
            {activeStore && activeCoord ? (
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                  Wybrany sklep
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
                  {activeStore.name}
                </h2>
                <div className="flex items-center gap-2 text-2xl">
                  {categoryEmoji[activeStore.category]}
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {activeStore.category}
                  </span>
                </div>
                <div className="border-t border-ink/20 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    Pawilon
                  </span>
                  <p className="font-display text-xl font-bold uppercase mt-1">
                    {activeStore.pavilion}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="mt-2 text-xs font-bold uppercase tracking-widest border border-ink/30 px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
                >
                  Wyczyść wybór
                </button>
              </div>
            ) : active && !activeCoord ? (
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                  Brak lokalizacji
                </span>
                <p className="text-sm text-ink/70">
                  Sklep <strong>{active}</strong> nie ma jeszcze przypisanej pozycji na mapie.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                  Legenda
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Kliknij dowolny sklep na mapie, aby poznać jego kategorię i pawilon.
                </p>
                <ul className="flex flex-col gap-2 text-xs uppercase tracking-widest font-bold mt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-accent" /> Brama Jury
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-ink" /> M Park
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border border-ink" /> Aura Park
                  </li>
                </ul>
                <Link
                  to="/sklepy"
                  className="mt-4 text-xs font-bold uppercase tracking-widest border border-ink/30 px-4 py-2 hover:bg-ink hover:text-paper transition-colors text-center"
                >
                  Lista sklepów →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
