import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro, Services } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Civil, IT & Property — RMTA Infrastructure" },
      { name: "description", content: "Civil engineering and infrastructure, IT and technology projects, and property dealing from RMTA Infrastructure, Krishnanagar." },
      { property: "og:title", content: "RMTA Infrastructure Services" },
      { property: "og:description", content: "Civil engineering, IT projects and property dealing — enquire on WhatsApp." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Services" title="Engineering, technology and property." text="Choose an area to start a WhatsApp conversation about your requirements." />
      <Services />
      <CtaBand />
    </>
  ),
});
