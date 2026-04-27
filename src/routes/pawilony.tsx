import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { stores, type Pavilion } from "@/data/stores";
import pavilionFashion from "@/assets/pavilion-fashion.jpg";
import pavilionFood from "@/assets/pavilion-food.jpg";
import pavilionHome from "@/assets/pavilion-home.jpg";
import siteMap from "@/assets/site-map.png";

export const Route = createFileRoute("/pawilony")({
  head: () => ({
    meta: [
      { title: "Pawilony — Zawiercie City Center" },
      {
        name: "description",
        content:
          "Trzy pawilony Zawiercie City Center: Galeria Brama Jury, M Park Zawiercie, Aura Park Zawiercie.",
      },
      { property: "og:title", content: "Pawilony — Zawiercie City Center" },
      {
        property: "og:description",
        content: "Galeria Brama Jury, M Park, Aura Park — trzy pawilony wokół ronda Jurajskich Rycerzy.",
      },
      { property: "og:image", content: pavilionFashion },
    ],
  }),
  component: PawilonyPage,
});

const pavilions: {
  code: string;
  name: string;
  key: Pavilion;
  tagline: string;
  desc: string;
  image: string;
}[] = [
  {
    code: "01",
    name: "Galeria Brama Jury",
    key: "Brama Jury",
    tagline: "Moda, biżuteria i uroda",
    desc: "Główna galeria handlowa kompleksu. Tutaj koncentrują się największe marki modowe, salony jubilerskie i drogerie premium, a także kino, restauracje i punkty usługowe.",
    image: pavilionFashion,
  },
  {
    code: "02",
    name: "Aura Park Zawiercie",
    key: "Aura Park",
    tagline: "Codzienność, smak, multimedia",
    desc: "Strefa codziennych zakupów: supermarket, drogerie, multimedia, sport i szybkie jedzenie. Tu załatwisz wszystko po drodze.",
    image: pavilionFood,
  },
  {
    code: "03",
    name: "M Park Zawiercie",
    key: "M Park",
    tagline: "Wielkopowierzchniowe marki",
    desc: "Park handlowy z największymi sklepami dla domu, modą wartościową i supermarketem. Wygodny dojazd, parking przy wejściu i sklepy o dużych metrażach.",
    image: pavilionHome,
  },
];

function PawilonyPage() {
  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      <header className="px-6 lg:px-12 pt-16 pb-12 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Architektura
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] mt-4 max-w-5xl">
          Trzy bryły.<br />
          Trzy charaktery.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
          Każdy z pawilonów Zawiercie City Center ma własną tożsamość, profil
          najemców i atmosferę. Razem tworzą jedno z najciekawszych centrów
          handlowych regionu.
        </p>
      </header>

      <section className="border-t border-ink/20 bg-stone/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Plan kompleksu
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mt-3">
                Wszystko wokół<br />jednego ronda.
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-ink/70 leading-relaxed">
              Trzy pawilony rozmieszczone wokół ronda Jurajskich Rycerzy.
              Sprawdź, gdzie znajduje się Twoja ulubiona marka.
            </p>
          </div>
          <div className="border border-ink/20 bg-paper overflow-hidden">
            <img
              src={siteMap}
              alt="Plan kompleksu Zawiercie City Center — trzy pawilony wokół ronda Jurajskich Rycerzy"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <main className="flex-1">
        {pavilions.map((p, idx) => (
          <section
            key={p.code}
            className={`border-t border-ink/20 ${idx % 2 === 1 ? "bg-stone/40" : ""}`}
          >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`aspect-[4/5] bg-stone overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-ink/40">
                  Pawilon {p.code}
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                  {p.name}
                </h2>
                <p className="text-accent font-bold uppercase tracking-widest text-sm">
                  {p.tagline}
                </p>
                <p className="text-base lg:text-lg text-ink/70 leading-relaxed max-w-[55ch]">
                  {p.desc}
                </p>
                <div className="border-t border-ink/20 pt-6 mt-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-4 block">
                    Marki w pawilonie
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stores
                      .filter((s) => s.pavilion === p.key)
                      .sort((a, b) => a.name.localeCompare(b.name, "pl"))
                      .map((s) => (
                        <span
                          key={s.name}
                          className="text-xs uppercase tracking-wider font-bold px-3 py-1.5 border border-ink/30 hover:bg-ink hover:text-paper transition-colors"
                        >
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
