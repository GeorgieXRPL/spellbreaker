import { AgentMarks } from "@/components/AgentMarks";
import { Chapter } from "@/components/Chapter";
import { OpenCta } from "@/components/OpenCta";
import { ScrollScene } from "@/components/ScrollScene";
import { SiteFooter } from "@/components/SiteFooter";
import { copy } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="page">
      <a className="skip" href="#what">
        Skip to story
      </a>
      <ScrollScene />
      <div className="story">
        <Chapter id="what" heading={copy.whatHeading}>
          <p>{copy.whatBody}</p>
        </Chapter>
        <Chapter id="marks" heading={copy.marksHeading} />
        <AgentMarks />
        <Chapter id="cut" heading={copy.cutHeading}>
          <p>{copy.cutBody}</p>
        </Chapter>
        <OpenCta />
        <SiteFooter />
      </div>
    </main>
  );
}
