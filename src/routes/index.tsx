import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { stores, categories, categoryEmoji } from "@/data/stores";
import pavilionFashion from "@/assets/pavilion-fashion.jpg";
import pavilionFood from "@/assets/pavilion-food.jpg";
import pavilionHome from "@/assets/pavilion-home.jpg";
import aerial from "@/assets/aerial-complex.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zawiercie City Center — Trzy pawilony, jedno miejsce" },
      {
        name: "description",
        content:
          "Zawiercie City Center — kompleks Galerii Brama Jury, M Park i Aura Park wokół ronda Jurajskich Rycerzy. Ponad 60 sklepów i restauracji.",
      },
      { property: "og:title", content: "Zawiercie City Center" },
      {
        property: "og:description",
        content: "Trzy pawilony handlowe w jednym miejscu — moda, smak, dom, rozrywka.",
      },
      { property: "og:image", content: aerial },
      { property: "twitter:image", content: aerial },
    ],
  }),
  component: Index,
});

const pavilions = [
  {
    code: "01",
    name: "Galeria Brama Jury",
    title: "MODA &\nROZRYWKA",
    image: pavilionFashion,
    desc: "Selekcja marek modowych, biżuterii i kosmetyków. Surowa estetyka spotyka rzemiosło.",
    cta: "Eksploruj sklepy",
  },
  {
    code: "02",
    name: "AURA PARK ZAWIERCIE",
    title: "Smak &\nCodzienność",
    image: pavilionFood,
    desc: "Strefa gastronomiczna, supermarkety, multimedia. Tutaj zaczyna się każdy tydzień.",
    cta: "Odkryj smaki",
  },
  {
    code: "03",
    name: "M PARK ZAWIERCIE",
    title: "DOM &\nŻYCIE",
    image: pavilionHome,
    desc: "Wyposażenie wnętrz, sport, rozrywka. Wszystko, co tworzy przestrzeń do życia.",
    cta: "Zaplanuj wizytę",
  },
];

function Index() {
  const fashionCount = stores.filter((s) => s.category === "Moda").length;

  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <header className="px-6 lg:px-12 pt-12 lg:pt-20 pb-16 lg:pb-24 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <h1 className="font-display font-extrabold text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-balance text-left mx-0">
            TRZY MIEJSCA.<br />
            JEDNO<br />
            <span className="text-accent">RONDO.</span>
          </h1>
          <div className="max-w-[36ch] text-base md:text-lg text-ink/80 leading-relaxed font-medium pb-2">
            Zawiercie City Center to kompleks trzech pawilonów położonych
            wokół ronda Jurajskich Rycerzy: <strong>Galeria Brama Jury</strong>,{" "}
            <strong>M Park</strong> i <strong>Aura Park</strong>. Bezkompromisowy
            kurator codziennego stylu życia.
          </div>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-y border-ink/20 py-6 text-xs uppercase tracking-[0.2em]">
          <div>
            <span className="font-bold">{stores.length}+</span>{" "}
            <span className="text-ink/60">Sklepów i punktów</span>
          </div>
          <div>
            <span className="font-bold">{fashionCount}</span>{" "}
            <span className="text-ink/60">Marek modowych</span>
          </div>
          <div>
            <span className="font-bold">3</span>{" "}
            <span className="text-ink/60">Pawilony</span>
          </div>
          <div>
            <span className="font-bold">1</span>{" "}
            <span className="text-ink/60">Rondo Jurajskich Rycerzy</span>
          </div>
        </div>
      </header>

      {/* TRIPTYCH */}
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/20 border-y border-ink/20">
          {pavilions.map((p) => (
            <article
              key={p.code}
              className="bg-paper flex flex-col group cursor-pointer transition-colors hover:bg-stone/50"
            >
              <div className="p-6 flex justify-between items-start border-b border-ink/10">
                <div className="text-xs font-bold uppercase tracking-widest">
                  {p.name}
                </div>
                <div className="text-xs font-medium text-ink/50 uppercase tracking-widest">
                  {p.code}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-6">
                <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight whitespace-pre-line">
                  {p.title}
                </h2>
                <div className="w-full aspect-[4/5] bg-stone relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[60%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>
                <p className="text-sm text-ink/70 leading-relaxed max-w-[40ch]">
                  {p.desc}
                </p>
                <div className="mt-auto text-xs font-bold uppercase tracking-widest border-b border-ink/30 self-start pb-1 group-hover:border-ink transition-colors">
                  {p.cta} →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AERIAL / ARCHITECTURE */}
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/3] bg-stone overflow-hidden">
            <img
              src={aerial}
              alt="Widok z lotu ptaka — kompleks Zawiercie City Center"
              width={1600}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover grayscale-[40%]"
            />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Jeden adres
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
              Trzy pawilony.<br />Wokół jednego ronda.
            </h2>
            <p className="text-base lg:text-lg text-ink/70 leading-relaxed max-w-[50ch]">
              Wyjątkowa koncepcja urbanistyczna. Wszystkie trzy obiekty
              położone są wokół ronda Jurajskich Rycerzy w Zawierciu —
              dojedziesz do każdego z nich w mniej niż minutę.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-4 border-t border-ink/20 pt-6">
              {pavilions.map((p) => (
                <div key={p.code} className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink/40">{p.code}</span>
                  <span className="text-sm font-bold uppercase tracking-wider leading-tight">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="border-y border-ink/20 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
              Wszystko,<br />czego szukasz.
            </h2>
            <p className="max-w-md text-paper/70 text-base leading-relaxed">
              Dziewięć kategorii. Ponad sześćdziesiąt marek. Jeden adres,
              w którym znajdziesz dokładnie to, po co przyszedłeś — i jeszcze więcej.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-paper/20 border border-paper/20">
            {categories.map((cat) => {
              const count = stores.filter((s) => s.category === cat).length;
              return (
                <div
                  key={cat}
                  className="bg-ink p-6 flex flex-col gap-3 hover:bg-paper hover:text-ink transition-colors group cursor-pointer"
                >
                  <span className="text-3xl">{categoryEmoji[cat]}</span>
                  <span className="font-display text-xl font-bold uppercase tracking-tight">
                    {cat}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-paper/50 group-hover:text-ink/50">
                    {count} {count === 1 ? "marka" : "marek"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
