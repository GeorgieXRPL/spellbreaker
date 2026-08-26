import { chain, copy } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="colophon" className="colophon">
      <p>
        {copy.footer}{" "}
        <a href={chain.explorer} rel="noreferrer">
          {copy.explorer}
        </a>
        .
      </p>
    </footer>
  );
}
