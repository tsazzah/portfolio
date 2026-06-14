import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, S as Section } from "./Section-YD0yvaQN.js";
import "lucide-react";
import "@tanstack/react-router";
function Infobox({
  title,
  imageLabel = "image 300×300",
  imageSrc,
  imageAlt,
  caption,
  rows
}) {
  return /* @__PURE__ */ jsxs("aside", { className: "wiki-prose float-none mb-4 w-full overflow-hidden rounded-[var(--radius-wiki)] bg-wiki-pink-soft p-4 text-[0.82rem] md:float-right md:ml-6 md:w-[300px]", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-lg font-semibold leading-tight text-wiki-text", children: title }),
    imageSrc ? /* @__PURE__ */ jsx("div", { className: "mb-2 h-[260px] w-full overflow-hidden rounded-[calc(var(--radius-wiki)-4px)] bg-white/70", children: /* @__PURE__ */ jsx("img", { src: imageSrc, alt: imageAlt ?? title, className: "h-full w-full object-cover" }) }) : imageLabel ? /* @__PURE__ */ jsxs("div", { className: "mb-2 flex h-[260px] w-full items-center justify-center rounded-[calc(var(--radius-wiki)-4px)] bg-white/70 text-xs italic text-wiki-muted", children: [
      "[ ",
      imageLabel,
      " ]"
    ] }) : null,
    caption ? /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-[0.75rem] italic text-wiki-muted", children: caption }) : null,
    /* @__PURE__ */ jsx("table", { className: "w-full border-collapse", children: /* @__PURE__ */ jsx("tbody", { children: rows.map(([k, v], i) => /* @__PURE__ */ jsxs("tr", { className: "align-top", children: [
      /* @__PURE__ */ jsx("th", { className: "w-1/3 py-1.5 pr-3 text-left font-semibold", children: k }),
      /* @__PURE__ */ jsx("td", { className: "py-1.5 whitespace-pre-line", children: v })
    ] }, i)) }) })
  ] });
}
const url = "/__l5e/assets-v1/33216605-740e-43a4-858f-af737ab0ac40/azza-portrait.png";
const azzaPortrait = {
  url
};
function Index() {
  return /* @__PURE__ */ jsxs(PageShell, { title: "Endda Tsa Azzahra Syaifur", subtitle: "From Azapedia, the personal encyclopedia", children: [
    /* @__PURE__ */ jsx(Infobox, { title: "Endda Tsa Azzahra Syaifur", imageSrc: azzaPortrait.url, imageAlt: "Endda Tsa Azzahra Syaifur", caption: "Endda Tsa Azzahra Syaifur", rows: [["Born", "April 25th, 2007 (age 19)\nBandung, Indonesia"], ["Education", "Institut Teknologi Bandung"], ["Known for", "UI/UX Design, Graphic Design"]] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Endda Tsa Azzahra Syaifur" }),
      " (born April 25th, 2007), best known as Azza, is an undergraduate student from Institut Teknologi Bandung 2024 batch majoring in Information System and Technology."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "She is best recognized for her inclination towards graphic and UI/UX design, though her interests and capabilities extend across multiple fields, reflecting a self-driven approach to broadening her professional and academic scope." }),
    /* @__PURE__ */ jsxs(Section, { title: "Early life and Introduction to Design", children: [
      /* @__PURE__ */ jsx("p", { children: "Azza was born in Bandung, Indonesia, where she would later return to pursue her undergraduate studies at Institut Teknologi Bandung. From an early age, she demonstrated a creative disposition, with interests centered around drawing and the arts. Azza's engagement with design began during high school, where she was frequently entrusted with designing class banners and visual materials. " }),
      /* @__PURE__ */ jsx("p", { children: "A longstanding interest in Mathematics later guided her toward the field of computer science, through which she came to recognize UI/UX design as a significant and integral component of software development. Her formal introduction to design tooling began with Canva, where she engaged in redesigning existing applications and producing interactive prototypes." }),
      /* @__PURE__ */ jsx("p", { children: "Throughout her university years, Azza continued to expand her design experience by participating in multiple UI/UX competitions, while concurrently exploring game design, 3D modelling, and software engineering." })
    ] })
  ] });
}
export {
  Index as component
};
