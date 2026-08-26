import { agents } from "@/lib/site";
import { AgentMark } from "./AgentMark";

export function AgentMarks() {
  return (
    <>
      {agents.map((agent) => (
        <AgentMark key={agent.id} agent={agent} />
      ))}
    </>
  );
}
