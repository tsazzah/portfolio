import type { ReactNode } from "react";

export type InfoboxRow = [string, ReactNode];

export function Infobox({
  title,
  imageLabel = "image 300×300",
  imageSrc,
  imageAlt,
  caption,
  rows,
}: {
  title: string;
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  rows: InfoboxRow[];
}) {
  return (
    <aside className="wiki-prose float-none mb-4 w-full overflow-hidden rounded-[var(--radius-wiki)] bg-wiki-pink-soft p-4 text-[0.82rem] md:float-right md:ml-6 md:w-[300px]">
      <div className="mb-3 text-center text-lg font-semibold leading-tight text-wiki-text">
        {title}
      </div>
      {imageSrc ? (
        <div className="mb-2 h-[260px] w-full overflow-hidden rounded-[calc(var(--radius-wiki)-4px)] bg-white/70">
          <img src={imageSrc} alt={imageAlt ?? title} className="h-full w-full object-cover" />
        </div>
      ) : imageLabel ? (
        <div className="mb-2 flex h-[260px] w-full items-center justify-center rounded-[calc(var(--radius-wiki)-4px)] bg-white/70 text-xs italic text-wiki-muted">
          [ {imageLabel} ]
        </div>
      ) : null}
      {caption ? (
        <div className="mb-3 text-center text-[0.75rem] italic text-wiki-muted">
          {caption}
        </div>
      ) : null}
      <table className="w-full border-collapse">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={i} className="align-top">
              <th className="w-1/3 py-1.5 pr-3 text-left font-semibold">{k}</th>
              <td className="py-1.5 whitespace-pre-line">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}
