import { chain, copy } from "@/lib/site";

export function ChainBadge() {
  return (
    <p className="seal-copy">
      <span className="display block text-lg tracking-[0.18em] uppercase">
        {copy.sealLine}
      </span>
      <span className="mt-2 block text-sm text-[color-mix(in_srgb,var(--cream)_80%,#9a9184)]">
        {copy.chainId}
        {" · "}
        <a href={chain.explorer} rel="noreferrer">
          {copy.explorer}
        </a>
      </span>
    </p>
  );
}
