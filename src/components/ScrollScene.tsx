import { ScrollPicks } from "./ScrollPicks";
import { TitleInk } from "./TitleInk";

export function ScrollScene() {
  return (
    <section id="seal" className="hero-track" aria-label="Spell Breaker">
      <div className="hero-stage">
        <div className="sheet" />
        <ScrollPicks />
        <TitleInk />
      </div>
    </section>
  );
}
