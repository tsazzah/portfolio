import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
function WikiHeader() {
  return /* @__PURE__ */ jsx("header", { className: "bg-wiki-pink px-4 py-3 md:px-6 md:py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-4", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-wiki-pink shadow-sm",
          "aria-hidden": true,
          children: "A"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold leading-tight text-white", children: "Azapedia" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs italic text-white/80", children: "The personal encyclopedia" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto flex w-full max-w-md items-center overflow-hidden rounded-full bg-white shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          placeholder: "Search Azapedia",
          className: "w-full bg-transparent px-4 py-2 text-sm outline-none"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "flex h-9 w-11 items-center justify-center text-wiki-muted hover:text-wiki-text", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
const links = [
  { to: "/", label: "Main page" },
  { to: "/notable-projects", label: "Notable projects" }
];
function WikiSidebar() {
  return /* @__PURE__ */ jsxs("aside", { className: "hidden w-56 shrink-0 self-stretch bg-wiki-sage px-4 py-6 text-sm text-white lg:block", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3 px-3 text-[0.7rem] font-semibold uppercase tracking-widest text-white/70", children: "Navigation" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      Link,
      {
        to: l.to,
        className: "block rounded-full px-3 py-2 font-medium text-white/90 transition-colors hover:bg-white/15",
        activeProps: { className: "block rounded-full px-3 py-2 font-semibold bg-white text-wiki-sage" },
        activeOptions: { exact: true },
        children: l.label
      }
    ) }, l.to)) })
  ] });
}
function PageShell({
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-wiki-sans text-wiki-text", children: [
    /* @__PURE__ */ jsx(WikiHeader, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full", children: [
      /* @__PURE__ */ jsx(WikiSidebar, {}),
      /* @__PURE__ */ jsxs("main", { className: "wiki-prose min-w-0 flex-1 bg-white px-5 py-6 md:px-8 md:py-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "-mx-5 -mt-6 mb-5 bg-wiki-pink-soft px-5 py-6 md:-mx-8 md:-mt-8 md:px-8 md:py-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[2rem] font-bold leading-tight md:text-[2.4rem]", children: title }),
          subtitle ? /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm italic text-wiki-muted", children: subtitle }) : null
        ] }),
        children,
        /* @__PURE__ */ jsx("div", { className: "clear-both" })
      ] })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  const id = `sec-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ jsxs("section", { className: "mt-4", children: [
    /* @__PURE__ */ jsx("h2", { id, className: "overflow-hidden", children: title }),
    children
  ] });
}
function Thumb({
  w = 240,
  h = 160,
  caption,
  side = "right",
  src,
  alt
}) {
  const isBlock = side === "block";
  return /* @__PURE__ */ jsxs(
    "figure",
    {
      className: `my-3 overflow-hidden rounded-[var(--radius-wiki)] bg-wiki-pink-soft p-2 ${isBlock ? "mx-auto w-full" : side === "right" ? "md:float-right md:ml-4 md:w-auto" : "md:float-left md:mr-4 md:w-auto"}`,
      style: { maxWidth: isBlock ? void 0 : w + 16 },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex w-full items-center justify-center overflow-hidden rounded-[calc(var(--radius-wiki)-4px)] bg-white/70 text-xs italic text-wiki-muted",
            style: { height: h },
            children: src ? /* @__PURE__ */ jsx("img", { src, alt: alt ?? caption, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "[ image ",
              w,
              "×",
              h,
              " ]"
            ] })
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { className: "mt-2 px-1 text-[0.75rem] italic text-wiki-muted", children: caption })
      ]
    }
  );
}
export {
  PageShell as P,
  Section as S,
  Thumb as T
};
