import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RMTA Infrastructure | WhatsApp +91 8900060001" },
      { name: "description", content: "Contact RMTA Infrastructure at 56, MM Ghosh St, Krishnanagar. Enquire on WhatsApp at +91 8900060001 or email rmtainfra@gmail.com." },
      { property: "og:title", content: "Contact RMTA Infrastructure" },
      { property: "og:description", content: "Start a WhatsApp conversation with the RMTA team." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Contact" title="Let's discuss your project." text="WhatsApp is the fastest way to reach the team." />
      <ContactSection />
    </>
  ),
});
