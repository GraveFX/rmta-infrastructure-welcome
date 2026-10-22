import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro, Process, Projects } from "@/components/site/Sections";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities & Process | RMTA Infrastructure" },
      { name: "description", content: "How RMTA Infrastructure approaches enquiries, from first message to proposal, plus upcoming project case studies." },
      { property: "og:title", content: "RMTA Capabilities & Process" },
      { property: "og:description", content: "From first message to a clear plan." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Capabilities" title="How a project takes shape." text="A clear path from your first enquiry to an agreed plan." />
      <Process />
      <Projects />
      <CtaBand />
    </>
  ),
});
