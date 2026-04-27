import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Zawiercie City Center" },
      {
        name: "description",
        content:
          "Adres, godziny otwarcia i kontakt do Zawiercie City Center — rondo Jurajskich Rycerzy w Zawierciu.",
      },
      { property: "og:title", content: "Kontakt — Zawiercie City Center" },
      {
        property: "og:description",
        content: "Rondo Jurajskich Rycerzy, 42-400 Zawiercie. Sprawdź godziny i dane kontaktowe.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <SiteHeader />

      <header className="px-6 lg:px-12 pt-16 pb-12 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Kontakt
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] mt-4">
          Spotkajmy się<br />
          <span className="text-ink/40">na rondzie.</span>
        </h1>
      </header>

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-px bg-ink/20 border border-ink/20">
          <InfoBlock label="Adres">
            Zawiercie City Center<br />
            Rondo Jurajskich Rycerzy<br />
            42-400 Zawiercie
          </InfoBlock>
          <InfoBlock label="Godziny otwarcia">
            Poniedziałek – Sobota<br />
            <strong>09:00 — 21:00</strong>
            <br /><br />
            Niedziele handlowe<br />
            <strong>10:00 — 20:00</strong>
          </InfoBlock>
          <InfoBlock label="Biuro centrum">
            tel. <strong>+48 32 000 00 00</strong>
            <br />
            e-mail: <strong>biuro@zcc.pl</strong>
          </InfoBlock>
          <InfoBlock label="Wynajem powierzchni">
            Zainteresowany lokalem? Skontaktuj się z działem komercjalizacji.
            <br /><br />
            <strong>najem@zcc.pl</strong>
          </InfoBlock>
        </div>

        <div className="mt-16 aspect-[16/9] bg-stone overflow-hidden border border-ink/20">
          <iframe
            title="Mapa — rondo Jurajskich Rycerzy, Zawiercie"
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.405%2C50.485%2C19.435%2C50.505&layer=mapnik"
            className="w-full h-full grayscale-[60%]"
            loading="lazy"
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-paper p-8 lg:p-12">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-ink/40 block mb-4">
        {label}
      </span>
      <p className="font-display text-xl lg:text-2xl leading-relaxed">{children}</p>
    </div>
  );
}
