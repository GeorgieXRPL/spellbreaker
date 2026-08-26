import { copy } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="colophon" className="colophon">
      <p>{copy.footer}</p>
    </footer>
  );
}
