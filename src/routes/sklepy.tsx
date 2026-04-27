import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { stores, categories, categoryEmoji, pavilions, type StoreCategory, type Pavilion } from "@/data/stores";

export const Route = createFileRoute("/sklepy")({
  head: () => ({
    meta: [
      { title: "Sklepy — Zawiercie City Center" },
      {
        name: "description",
        content:
          "Pełna lista sklepów i punktów usługowych w Zawiercie City Center. Moda, jedzenie, dom, sport i więcej.",
      },
      { property: "og:title", content: "Sklepy — Zawiercie City Center" },
      {
        property: "og:description",
        content: "Ponad 60 marek w jednym miejscu. Przeglądaj wszystkie sklepy.",
      },
    ],
  }),
  component: SklepyPage,
});

function SklepyPage() {
  const [active, setActive] = useState<StoreCategory | "Wszystkie">("Wszystkie");
  const [pav, setPav] = useState<Pavilion | "Wszystkie">("Wszystkie");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return stores
      .filter((s) => active === "Wszystkie" || s.category === active)
      .filter((s) => pav === "Wszystkie" || s.pavilion === pav)
      .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name, "pl"));
  }, [active, pav, query]);

  const grouped = useMemo(() => {
    const map = new Map<StoreCategory, typeof stores>();
    for (const s of filtered) {
      const arr = map.get(s.category) ?? [];
      arr.push(s);
      map.set(s.category, arr);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      <header className="px-6 lg:px-12 pt-16 pb-12 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Katalog
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
          {stores.length} marek.<br />
          <span className="text-ink/40">Jedno centrum.</span>
        </h1>
      </header>

      {/* FILTERS */}
      <div className="sticky top-[73px] z-40 bg-paper/95 backdrop-blur-md border-y border-ink/20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mr-2">Pawilon</span>
            <CategoryChip
              active={pav === "Wszystkie"}
              onClick={() => setPav("Wszystkie")}
              label="Wszystkie"
              count={stores.length}
            />
            {pavilions.map((p) => (
              <CategoryChip
                key={p}
                active={pav === p}
                onClick={() => setPav(p)}
                label={p}
                count={stores.filter((s) => s.pavilion === p).length}
              />
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mr-2">Kategoria</span>
              <CategoryChip
                active={active === "Wszystkie"}
                onClick={() => setActive("Wszystkie")}
                label="Wszystkie"
                count={stores.length}
              />
              {categories.map((c) => (
                <CategoryChip
                  key={c}
                  active={active === c}
                  onClick={() => setActive(c)}
                  label={c}
                  emoji={categoryEmoji[c]}
                  count={stores.filter((s) => s.category === c).length}
                />
              ))}
            </div>
            <input
              type="search"
              placeholder="Szukaj marki..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full lg:w-64 bg-transparent border border-ink/30 px-4 py-2 text-sm uppercase tracking-widest placeholder:text-ink/40 focus:outline-none focus:border-ink"
            />
          </div>
        </div>
      </div>

      {/* LIST */}
      <main className="px-6 lg:px-12 py-16 max-w-[1600px] mx-auto w-full flex-1">
        {grouped.length === 0 && (
          <p className="text-ink/50 text-lg">Brak wyników dla podanego zapytania.</p>
        )}
        <div className="flex flex-col gap-16">
          {grouped.map(([cat, list]) => (
            <section key={cat}>
              <div className="flex items-baseline justify-between border-b border-ink/20 pb-4 mb-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight flex items-center gap-3">
                  <span className="text-2xl">{categoryEmoji[cat]}</span>
                  {cat}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-ink/40">
                  {list.length} {list.length === 1 ? "marka" : "marek"}
                </span>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/20 border border-ink/20">
                {list.map((s) => (
                  <li
                    key={s.name}
                    className="bg-paper p-5 hover:bg-ink hover:text-paper transition-colors cursor-default flex items-center justify-between gap-4"
                  >
                    <span className="font-display font-bold text-base uppercase tracking-tight">
                      {s.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                      {s.pavilion}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function CategoryChip({
  active,
  onClick,
  label,
  emoji,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  emoji?: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest border transition-colors ${
        active
          ? "bg-ink text-paper border-ink"
          : "bg-transparent border-ink/30 text-ink/70 hover:border-ink hover:text-ink"
      }`}
    >
      {emoji && <span className="mr-1.5">{emoji}</span>}
      {label}
      <span className={`ml-2 ${active ? "text-paper/60" : "text-ink/40"}`}>
        {count}
      </span>
    </button>
  );
}
