import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Main page" },
  { to: "/notable-projects", label: "Notable projects" },
] as const;

export function WikiSidebar() {
  return (
    <aside className="hidden w-56 shrink-0 self-stretch bg-wiki-sage px-4 py-6 text-sm text-white lg:block">
      <div className="mb-3 px-3 text-[0.7rem] font-semibold uppercase tracking-widest text-white/70">
        Navigation
      </div>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="block rounded-full px-3 py-2 font-medium text-white/90 transition-colors hover:bg-white/15"
              activeProps={{ className: "block rounded-full px-3 py-2 font-semibold bg-white text-wiki-sage" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
