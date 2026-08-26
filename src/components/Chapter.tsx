import type { ReactNode } from "react";

export function Chapter({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="verse">
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
