import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, S as Section, T as Thumb } from "./Section-YD0yvaQN.js";
import "lucide-react";
import "@tanstack/react-router";
const url$1 = "/__l5e/assets-v1/61705430-f4a4-4f0b-bc78-fb7eb49bad39/panenin-key-visual.png";
const panenInKeyVisual = {
  url: url$1
};
const url = "/__l5e/assets-v1/23b516d3-46c1-4fd4-acf8-7857d573245b/trailin-key-visual.png";
const trailInKeyVisual = {
  url
};
function NotableProjects() {
  return /* @__PURE__ */ jsxs(PageShell, { title: "Notable projects", subtitle: "A selection of formal works by Endda Tsa Azzahra Syaifur", children: [
    /* @__PURE__ */ jsxs(Section, { title: "PanenIn ", children: [
      /* @__PURE__ */ jsx(Thumb, { w: 280, h: 280, src: panenInKeyVisual.url, alt: "PanenIn app screens", caption: "PanenIn key visual, 2024.", side: "right" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "PanenIn " }),
        "is a business-to-business farmer's market application developed with the intent of streamlining agricultural commerce. The platform is designed to establish direct connections between farmers and local markets, effectively bypassing traditional and often convoluted distributor chains. In doing so, PanenIn seeks to foster a more efficient and accessible transaction process, with a particular emphasis on improving economic outcomes for farmers at the point of sale."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "PanenIn was first developed in early 2024 as a UI/UX competition entry for Arkavidia 9.0, an annual event organized by HMIF (Himpunan Mahasiswa Informatika) Institut Teknologi Bandung. The initial design was produced collaboratively by Azza alongside her peers, Amerta and Naomi. Following the competition, the project underwent a comprehensive redesign and refinement process as part of the Introduction to Design and Engineering final project, during which Azza collaborated with two additional contributors, Melvin and Gifta, to further develop and polish the application's design to a higher standard of completion." }),
      /* @__PURE__ */ jsx("h3", { children: "Role" }),
      /* @__PURE__ */ jsx("p", { children: "UI/UX Designer" })
    ] }),
    /* @__PURE__ */ jsxs(Section, { title: "TrailIn", children: [
      /* @__PURE__ */ jsx(Thumb, { w: 280, h: 280, src: trailInKeyVisual.url, alt: "TrailIn app screens", caption: "TrailIn key visual, 2025.", side: "right" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "TrailIn " }),
        "is a mobile hiking trail application conceptualized to advance hiking tourism in Indonesia by providing users with an integrated suite of trail management tools. The application encompasses mountain infographics, itinerary scheduling, and to-do list management features, complemented by an offline GPS system capable of real-time hiking route tracking. An embedded emergency alert function further ensures user safety in remote and low-connectivity environments."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "The application was developed in 2025 under the UI/UX division of Sevent, an abbreviation for Software Engineering Event, a competition hosted by Telkom University Purwokerto. TrailIn was recognized as the first-place winner of the competition, distinguishing itself among the submitted entries." }),
      /* @__PURE__ */ jsx("h3", { children: "Role" }),
      /* @__PURE__ */ jsx("p", { children: "UI/UX Designer" })
    ] })
  ] });
}
export {
  NotableProjects as component
};
