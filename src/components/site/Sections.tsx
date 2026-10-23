import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { COMPANY, PROCESS, PROJECTS, SERVICES, VALUES } from "@/lib/site";
import { serviceWhatsappUrl, whatsappUrl, SERVICE_MESSAGES } from "@/lib/whatsapp";
import { StructureCanvas } from "./StructureCanvas";
import { btn, ExternalLink, SectionHead, WhatsAppIcon } from "./ui";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-deep text-ink-foreground">
      <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-right opacity-80" />
      <div className="absolute inset-0 bg-hero-scrim" />
      <div className="absolute inset-0 blueprint-grid opacity-40 [mask-image:linear-gradient(90deg,black,transparent_60%)]" />
      <StructureCanvas className="absolute right-0 top-1/2 hidden h-[70vh] w-[45vw] -translate-y-1/2 lg:block" />
      <div className="container-site relative pb-20 pt-40 md:pb-28">
        <p className="eyebrow reveal mb-8 flex items-center gap-3 text-ink-muted">
          <span className="brand-rule inline-block w-10" /> RMTA INFRASTRUCTURE
        </p>
        <h1 className="reveal max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl [animation-delay:120ms]">
          Building the Foundations of <span className="text-brand-gradient">Tomorrow.</span>
        </h1>
        <p className="reveal mt-8 max-w-xl text-lg text-ink-muted [animation-delay:240ms]">
          Engineering, infrastructure, technology, and property solutions built around your project's needs.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3 [animation-delay:360ms]">
          <ExternalLink href={whatsappUrl(SERVICE_MESSAGES.general)} className={btn.light}>
            Discuss Your Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ExternalLink>
          <Link to="/services" className={btn.ghostDark}>Explore Our Capabilities</Link>
        </div>
        <div className="mt-20 grid max-w-3xl grid-cols-3 border-t border-ink-border pt-6">
          {SERVICES.map((s) => (
            <div key={s.key} className="pr-4">
              <p className="eyebrow text-ink-muted">{s.index}</p>
              <p className="mt-2 text-sm font-medium sm:text-base">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ full }: { full?: boolean }) {
  return (
    <section className="py-24 md:py-36">
      <div className="container-site grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHead eyebrow="About RMTA" title="Built Around Real-World Challenges." />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              {COMPANY.name} ({COMPANY.nameBn}) is based in Krishnanagar, Nadia, West Bengal. The company works across three areas: civil engineering and infrastructure, IT and technology projects, and property dealing.
            </p>
            <p>
              Every enquiry begins with a conversation. Rather than offering fixed packages, the team listens to what a project actually needs and responds to the scope, site and constraints in front of it.
            </p>
            {full && (
              <p>
                The fastest way to start is a WhatsApp message describing what you need. The team will follow up to understand your requirements in more detail.
              </p>
            )}
          </div>
        </div>
        <dl className="grid content-start gap-px self-end overflow-hidden rounded-lg border bg-border md:col-span-5">
          {[
            ["Location", "Krishnanagar, Nadia, West Bengal"],
            ["Business areas", "Civil & infrastructure · IT & technology · Property"],
            ["Approach", "Requirement-first conversations"],
            ["Enquiries", "WhatsApp, directly with the team"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <dt className="eyebrow text-muted-foreground">{k}</dt>
              <dd className="mt-2 font-display text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-ink py-24 text-ink-foreground md:py-36">
      <div className="container-site">
        <SectionHead dark eyebrow="Services" title="Three disciplines. One conversation." intro="Service entries below are indicative. Message us to confirm what fits your project." />
        <div className="mt-20 space-y-24 md:space-y-32">
          {SERVICES.map((s, i) => (
            <article key={s.key} id={s.key} className="grid scroll-mt-28 items-center gap-10 md:grid-cols-12">
              <div className={cn("group relative overflow-hidden rounded-lg md:col-span-7", i % 2 && "md:order-2")}>
                <img src={s.image} alt={s.alt} loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                <span className="eyebrow absolute bottom-3 left-3 rounded bg-ink-deep/80 px-2 py-1 text-ink-muted">Illustrative image</span>
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-sm text-ink-muted">{s.index} / 03</p>
                <h3 className="mt-4 text-3xl font-semibold md:text-4xl">{s.title}</h3>
                <p className="mt-5 text-ink-muted">{s.summary}</p>
                <ul className="mt-8 border-t border-ink-border">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center justify-between border-b border-ink-border py-3 text-sm">
                      {it} <span className="h-1.5 w-1.5 rounded-full bg-ink-muted" />
                    </li>
                  ))}
                </ul>
                <ExternalLink href={serviceWhatsappUrl(s.key)} className={`${btn.light} mt-8`}>
                  Enquire about {s.title.split(" ")[0] === "IT" ? "IT projects" : s.title.split(" &")[0]} <ArrowUpRight className="h-4 w-4" />
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-site">
        <SectionHead eyebrow="How we work" title="From first message to a clear plan." intro="A suggested engagement process. Steps may vary depending on the project." />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <div className="brand-rule absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 md:left-0 md:top-[7px] md:h-0.5 md:w-full" />
          {PROCESS.map((p, i) => (
            <li key={p.title} className="relative pl-10 md:pl-0 md:pt-12">
              <span className="absolute left-0 top-0.5 h-4 w-4 rounded-full border-2 border-foreground bg-background md:top-0" />
              <p className="font-mono text-sm text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="border-t py-24 md:py-32">
      <div className="container-site grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <SectionHead eyebrow="Projects" title="Portfolio in preparation." />
        </div>
        <div className="md:col-span-6 md:pt-14">
          {PROJECTS.length === 0 ? (
            <>
              <p className="text-lg text-muted-foreground">
                Verified project case studies will be published here as they are documented. In the meantime, we are happy to talk through relevant experience directly.
              </p>
              <ExternalLink href={whatsappUrl("Hello RMTA Infrastructure, I would like to learn about projects you have worked on that are similar to mine.")} className={`${btn.ghost} mt-8`}>
                Ask about relevant work <ArrowRight className="h-4 w-4" />
              </ExternalLink>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container-site">
        <SectionHead eyebrow="Why RMTA" title="Straightforward, by design." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v.title} className="bg-card p-8 transition-colors hover:bg-background">
              <p className="font-mono text-sm text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-10 text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-24 text-ink-foreground md:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="container-site relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Have a project in mind? <span className="text-ink-muted">Let's talk it through.</span>
        </h2>
        <ExternalLink href={whatsappUrl(SERVICE_MESSAGES.general)} className={btn.whatsapp}>
          <WhatsAppIcon className="h-5 w-5" /> Get in Touch
        </ExternalLink>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-deep pb-20 pt-40 text-ink-foreground">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="container-site relative">
        <p className="eyebrow reveal mb-6 flex items-center gap-3 text-ink-muted"><span className="brand-rule inline-block w-8" />{eyebrow}</p>
        <h1 className="reveal max-w-4xl text-5xl font-semibold leading-none md:text-7xl">{title}</h1>
        <p className="reveal mt-6 max-w-2xl text-lg text-ink-muted">{text}</p>
      </div>
    </section>
  );
}
