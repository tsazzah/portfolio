import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/wiki/PageShell";
import { Infobox } from "@/components/wiki/Infobox";
import { Section, Thumb } from "@/components/wiki/Section";
import azzaPortrait from "@/assets/azza-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Endda Tsa Azzahra Syaifur — Azapedia" },
      {
        name: "description",
        content:
          "Endda Tsa Azzahra Syaifur is an undergraduate student from Institut Teknologi Bandung majoring in Information System and Technology.",
      },
      { property: "og:title", content: "Endda Tsa Azzahra Syaifur — Azapedia" },
      {
        property: "og:description",
        content: "Undergraduate student at ITB majoring in Information System and Technology.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell
      title="Endda Tsa Azzahra Syaifur"
      subtitle="From Azapedia, the personal encyclopedia"
    >
      <Infobox
        title="Endda Tsa Azzahra Syaifur"
        imageSrc={azzaPortrait.url}
        imageAlt="Endda Tsa Azzahra Syaifur"
        caption="Endda Tsa Azzahra Syaifur"
        rows={[
          ["Born", "April 25th, 2007 (age 19)\nBandung, Indonesia"],
          ["Education", "Institut Teknologi Bandung"],
          ["Known for", "UI/UX Design, Graphic Design"],
        ]}
      />

      <p>
        <strong>Endda Tsa Azzahra Syaifur</strong> (born April 25th, 2007),
        best known as Azza, is an undergraduate student from Institut
        Teknologi Bandung 2024 batch majoring in Information System and
        Technology.
      </p>
      <p>
        She is best recognized for her inclination towards graphic and UI/UX
        design, though her interests and capabilities extend across multiple
        fields, reflecting a self-driven approach to broadening her
        professional and academic scope.
      </p>

      <Section title="Early life and Introduction to Design">
        <p>
          Azza was born in Bandung, Indonesia, where she would later return to
          pursue her undergraduate studies at Institut Teknologi Bandung. From
          an early age, she demonstrated a creative disposition, with interests
          centered around drawing and the arts. Azza's engagement with design
          began during high school, where she was frequently entrusted with
          designing class banners and visual materials.&nbsp;
        </p>
        <p>
          A longstanding interest in Mathematics later guided her toward the
          field of computer science, through which she came to recognize UI/UX
          design as a significant and integral component of software
          development. Her formal introduction to design tooling began with
          Canva, where she engaged in redesigning existing applications and
          producing interactive prototypes.
        </p>
        <p>
          Throughout her university years, Azza continued to expand her design
          experience by participating in multiple UI/UX competitions, while
          concurrently exploring game design, 3D modelling, and software
          engineering.
        </p>
      </Section>

    </PageShell>
  );
}
