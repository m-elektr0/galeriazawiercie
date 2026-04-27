import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/20 bg-paper">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Zawiercie City Center" className="h-14 w-auto" />
          <p className="mt-6 text-sm text-ink/70 max-w-sm leading-relaxed">
            Trzy pawilony, jedno miejsce. Kompleks handlowo-rozrywkowy
            położony wokół ronda Jurajskich Rycerzy w Zawierciu.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-widest">
          <span className="font-bold">Nawigacja</span>
          <Link to="/sklepy" className="text-ink/70 hover:text-ink">Sklepy</Link>
          <Link to="/pawilony" className="text-ink/70 hover:text-ink">Pawilony</Link>
          <Link to="/kontakt" className="text-ink/70 hover:text-ink">Kontakt</Link>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-widest">
          <span className="font-bold">Adres</span>
          <span className="text-ink/70 normal-case tracking-normal">
            Rondo Jurajskich Rycerzy<br />42-400 Zawiercie
          </span>
          <span className="font-bold mt-4">Godziny</span>
          <span className="text-ink/70 normal-case tracking-normal">
            Pon–Sob 09:00–21:00<br />Niedz. handl. 10:00–20:00
          </span>
        </div>
      </div>
      <div className="border-t border-ink/20 px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between text-xs uppercase tracking-widest text-ink/50">
        <span>© {new Date().getFullYear()} Zawiercie City Center</span>
        <span>Wszelkie prawa zastrzeżone</span>
      </div>
    </footer>
  );
}
