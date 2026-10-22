import { createFileRoute } from "@tanstack/react-router";
import { About, CtaBand, PageIntro, Values } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RMTA Infrastructure | Krishnanagar, Nadia" },
      { name: "description", content: "RMTA Infrastructure is based in Krishnanagar, Nadia, working across civil engineering, IT projects and property dealing." },
      { property: "og:title", content: "About RMTA Infrastructure" },
      { property: "og:description", content: "A requirement-first company in Krishnanagar, West Bengal." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="About" title="A company shaped by the projects it takes on." text="Based in Krishnanagar, working across engineering, technology and property." />
      <About full />
      <Values />
      <CtaBand />
    </>
  ),
});
