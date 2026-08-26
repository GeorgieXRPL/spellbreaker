import { HeroScroll } from "./HeroScroll";
import { TitleInk } from "./TitleInk";

export function ScrollScene() {
  return (
    <section id="seal" className="hero-track" aria-label="Spell Breaker">
      <div className="hero-stage">
        <div className="sheet" />
        <HeroScroll />
        <TitleInk />
      </div>
    </section>
  );
}
