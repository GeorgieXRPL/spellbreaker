import { copy } from "@/lib/site";

export function OpenCta() {
  return (
    <section id="open" className="verse">
      <h2>{copy.ctaHeading}</h2>
      <div className="cta-row">
        <p className="cta-soon">{copy.ctaPrimary}. Opening soon.</p>
        <p className="cta-soon">{copy.ctaSecondary}. Opening soon.</p>
      </div>
    </section>
  );
}
