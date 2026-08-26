const picks = [
  { id: "1", name: "Upright", src: "/scrolls/upright.webp" },
  { id: "2", name: "Open", src: "/scrolls/open.webp" },
  { id: "3", name: "Split", src: "/scrolls/split.webp" },
  { id: "4", name: "Burnt", src: "/scrolls/burnt.webp" },
] as const;

export function ScrollPicks() {
  return (
    <div className="scroll-picks" aria-label="Scroll mark options">
      {picks.map((pick) => (
        <figure key={pick.id} className="scroll-pick">
          <img
            src={pick.src}
            alt=""
            width={160}
            height={160}
            decoding="async"
            {...(pick.id === "1" ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
          <figcaption>
            {pick.id}. {pick.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
