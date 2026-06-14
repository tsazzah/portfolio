import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/wiki/PageShell";
import { Section, Thumb } from "@/components/wiki/Section";
import panenInKeyVisual from "@/assets/panenin-key-visual.png.asset.json";
import trailInKeyVisual from "@/assets/trailin-key-visual.png.asset.json";

export const Route = createFileRoute("/notable-projects")({
  head: () => ({
    meta: [
      { title: "Notable projects — Azapedia" },
      {
        name: "description",
        content:
          "A wiki-style catalogue of formal projects by Endda Tsa Azzahra Syaifur. UI/UX and Graphic Design portfolio.",
      },
      { property: "og:title", content: "Notable projects — Azapedia" },
      {
        property: "og:description",
        content: "Selected formal works by Azza, presented encyclopedia-style.",
      },
    ],
  }),
  component: NotableProjects,
});

function NotableProjects() {
  return (
    <PageShell
      title="Notable projects"
      subtitle="A selection of formal works by Endda Tsa Azzahra Syaifur"
    >
      <Section title="PanenIn&nbsp;">
        <Thumb w={280} h={280} src={panenInKeyVisual.url} alt="PanenIn app screens" caption="PanenIn key visual, 2024." side="right" />
        <p>
          <strong>PanenIn </strong>is a business-to-business farmer's market application developed with the intent of streamlining agricultural commerce. The platform is designed to establish direct connections between farmers and local markets, effectively bypassing traditional and often convoluted distributor chains. In doing so, PanenIn seeks to foster a more efficient and accessible transaction process, with a particular emphasis on improving economic outcomes for farmers at the point of sale.
        </p>
        <p>
          PanenIn was first developed in early 2024 as a UI/UX competition entry for Arkavidia 9.0, an annual event organized by HMIF (Himpunan Mahasiswa Informatika) Institut Teknologi Bandung. The initial design was produced collaboratively by Azza alongside her peers, Amerta and Naomi. Following the competition, the project underwent a comprehensive redesign and refinement process as part of the Introduction to Design and Engineering final project, during which Azza collaborated with two additional contributors, Melvin and Gifta, to further develop and polish the application's design to a higher standard of completion.
        </p>
        <h3>Role</h3>
        <p>UI/UX Designer</p>
      </Section>

      <Section title="TrailIn">
        <Thumb w={280} h={280} src={trailInKeyVisual.url} alt="TrailIn app screens" caption="TrailIn key visual, 2025." side="right" />
        <p>
          <strong>TrailIn </strong>is a mobile hiking trail application conceptualized to advance hiking tourism in Indonesia by providing users with an integrated suite of trail management tools. The application encompasses mountain infographics, itinerary scheduling, and to-do list management features, complemented by an offline GPS system capable of real-time hiking route tracking. An embedded emergency alert function further ensures user safety in remote and low-connectivity environments.
        </p>
        <p>
          The application was developed in 2025 under the UI/UX division of Sevent, an abbreviation for Software Engineering Event, a competition hosted by Telkom University Purwokerto. TrailIn was recognized as the first-place winner of the competition, distinguishing itself among the submitted entries.
        </p>
        <h3>Role</h3>
        <p>UI/UX Designer</p>
      </Section>
    </PageShell>
  );
}
