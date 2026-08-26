import { copy } from "@/lib/site";

export function TitleInk() {
  return (
    <div className="title-wrap">
      <h1 className="visually-hidden">{copy.title}</h1>
      <svg
        className="title-svg"
        viewBox="0 0 1200 420"
        role="presentation"
        aria-hidden="true"
      >
        <text
          className="title-line title-line-1"
          x="50%"
          y="38%"
          textAnchor="middle"
          fontSize="168"
          fontWeight="700"
        >
          SPELL
        </text>
        <text
          className="title-line title-line-2"
          x="50%"
          y="86%"
          textAnchor="middle"
          fontSize="148"
          fontWeight="700"
        >
          BREAKER
        </text>
      </svg>
    </div>
  );
}
