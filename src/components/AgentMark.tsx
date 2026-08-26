import type { agents } from "@/lib/site";

type Agent = (typeof agents)[number];

export function AgentMark({ agent }: { agent: Agent }) {
  return (
    <figure className={`mark mark-${agent.id}`}>
      <img
        src={agent.src}
        alt=""
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <strong>{agent.name}</strong>
        <span>{agent.line}</span>
      </figcaption>
    </figure>
  );
}
