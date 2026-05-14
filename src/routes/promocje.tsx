import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import promoRossmann from "@/assets/promo-rossmann.webp";
import promoHm from "@/assets/promo-hm.webp";
import promoVezzi from "@/assets/promo-vezzi.webp";
import promoDiverse from "@/assets/promo-diverse.webp";

export const Route = createFileRoute("/promocje")({
  head: () => ({
    meta: [
      { title: "Promocje — Zawiercie City Center" },
      {
        name: "description",
        content:
          "Aktualne promocje i nowości w sklepach Zawiercie City Center — Rossmann, H&M, Vezzi, Diverse i więcej.",
      },
      { property: "og:title", content: "Promocje — Zawiercie City Center" },
      {
        property: "og:description",
        content:
          "Sprawdź aktualne oferty i nowości od marek dostępnych w Zawiercie City Center.",
      },
    ],
  }),
  component: PromocjePage,
});

const promos = [
  {
    src: promoRossmann,
    brand: "Rossmann",
    title: "Marielle — pielęgnacja nowej generacji",
    desc: "Maska LED, masażery i szczotki do twarzy w wyjątkowych cenach.",
    pavilion: "Aura Park",
  },
  {
    src: promoHm,
    brand: "H&M",
    title: "Wiosenna kolekcja 2026",
    desc: "Lekkie sukienki, zwiewne tkaniny i miejski klimat — nowości już w sklepie.",
    pavilion: "M-Park",
  },
  {
    src: promoVezzi,
    brand: "Vezzi",
    title: "Wyjątkowa biżuteria dla Mamy",
    desc: "Personalizowane naszyjniki, bransoletki i kolczyki — idealny prezent.",
    pavilion: "Brama Jury",
  },
  {
    src: promoDiverse,
    brand: "Diverse",
    title: "Lato 2026 — kolekcja swimwear",
    desc: "Stroje kąpielowe i casualowe propozycje na nadchodzący sezon.",
    pavilion: "M-Park",
  },
] as const;

function PromocjePage() {
  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      <header className="px-6 lg:px-12 pt-16 pb-12 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Promocje
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
          Aktualne oferty<br />
          <span className="text-ink/40">i nowości.</span>
        </h1>
        <p className="mt-6 max-w-2xl font-display text-lg lg:text-xl text-ink/70">
          Najnowsze kampanie marek dostępnych w Zawiercie City Center.
          Sprawdź, co przygotowały dla Ciebie nasze sklepy.
        </p>
      </header>

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {promos.map((p) => (
            <article
              key={p.brand}
              className="group border border-ink/20 bg-paper overflow-hidden hover:border-ink transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-ink/5">
                <img
                  src={p.src}
                  alt={`${p.brand} — ${p.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-ink/50 mb-3">
                  <span>{p.brand}</span>
                  <span className="text-accent">{p.pavilion}</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                  {p.title}
                </h2>
                <p className="mt-3 text-ink/70 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
