import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slider-gastro.png";
import slide2 from "@/assets/slider-wiosna.png";
import slide3 from "@/assets/slider-niedziele.png";

const slides = [
  { src: slide1, alt: "Otwórz się na więcej smaku — Brama Jury Gastronomia" },
  { src: slide2, alt: "Otwieramy sezon na wiosnę" },
  { src: slide3, alt: "Niedziele handlowe 2026" },
];

const AUTOPLAY_MS = 5000;

export function PromoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-ink/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Aktualne promocje"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.src} className="min-w-full">
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-auto block select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Poprzedni slajd"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-paper/80 hover:bg-paper text-ink p-2 md:p-3 rounded-full shadow-md transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Następny slajd"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-paper/80 hover:bg-paper text-ink p-2 md:p-3 rounded-full shadow-md transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Slajd ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-paper" : "w-2 bg-paper/60 hover:bg-paper/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
