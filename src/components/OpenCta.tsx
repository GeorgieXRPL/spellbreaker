import { copy, studio } from "@/lib/site";

export function OpenCta() {
  return (
    <section id="open" className="verse">
      <h2>{copy.ctaHeading}</h2>
      <div className="cta-row">
        <a className="btn" href={studio.newStory}>
          {copy.ctaPrimary}
        </a>
        <a className="link-quiet" href={studio.connect}>
          {copy.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
