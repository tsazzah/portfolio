import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = `sec-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section className="mt-4">
      <h2 id={id} className="overflow-hidden">{title}</h2>
      {children}
    </section>
  );
}

export function Thumb({
  w = 240,
  h = 160,
  caption,
  side = "right",
  src,
  alt,
}: {
  w?: number;
  h?: number;
  caption: string;
  side?: "right" | "left" | "block";
  src?: string;
  alt?: string;
}) {
  const isBlock = side === "block";
  return (
    <figure
      className={`my-3 overflow-hidden rounded-[var(--radius-wiki)] bg-wiki-pink-soft p-2 ${
        isBlock
          ? "mx-auto w-full"
          : side === "right"
            ? "md:float-right md:ml-4 md:w-auto"
            : "md:float-left md:mr-4 md:w-auto"
      }`}
      style={{ maxWidth: isBlock ? undefined : w + 16 }}
    >
      <div
        className="flex w-full items-center justify-center overflow-hidden rounded-[calc(var(--radius-wiki)-4px)] bg-white/70 text-xs italic text-wiki-muted"
        style={{ height: h }}
      >
        {src ? (
          <img src={src} alt={alt ?? caption} className="h-full w-full object-cover" />
        ) : (
          <>[ image {w}×{h} ]</>
        )}
      </div>
      <figcaption className="mt-2 px-1 text-[0.75rem] italic text-wiki-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
