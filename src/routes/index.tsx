import { createFileRoute } from "@tanstack/react-router";
import { About, CtaBand, Hero, Process, Projects, Services, Values } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RMTA Infrastructure | Engineering, Infrastructure, IT & Property — Krishnanagar" },
      { name: "description", content: "RMTA Infrastructure, Krishnanagar, Nadia: civil engineering and infrastructure, IT and technology projects, and property dealing. Enquire on WhatsApp." },
      { property: "og:title", content: "RMTA Infrastructure — Building the Foundations of Tomorrow" },
      { property: "og:description", content: "Engineering, infrastructure, technology and property solutions in Krishnanagar, West Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Values />
      <Projects />
      <ContactSection />
    </>
  );
}

export { CtaBand };
