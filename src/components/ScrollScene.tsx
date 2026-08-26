import { TitleInk } from "./TitleInk";
import { WaxSeal } from "./WaxSeal";

export function ScrollScene() {
  return (
    <section id="seal" className="hero-track" aria-label="Spell Breaker">
      <div className="hero-stage">
        <div className="sheet" />
        <WaxSeal />
        <TitleInk />
      </div>
    </section>
  );
}
