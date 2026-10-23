import { Link } from "@tanstack/react-router";
import logo from "@/assets/rmta-logo.png.asset.json";
import { ADDRESS_LINE, COMPANY, REGISTERED_ADDRESS_LINE, SERVICES } from "@/lib/site";
import { serviceWhatsappUrl, whatsappUrl, SERVICE_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { NAV } from "./Header";
import { btn, ExternalLink, WhatsAppIcon } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-ink-foreground">
      <div className="brand-rule" />
      <div className="container-site grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={logo.url} alt="RMTA" className="h-8 w-auto" loading="lazy" width={120} height={32} />
          <p className="mt-6 max-w-sm text-ink-muted">
            RMTA Infrastructure, Krishnanagar. Civil engineering and infrastructure, IT and technology projects, and property dealing.
          </p>
          <ExternalLink href={whatsappUrl(SERVICE_MESSAGES.general)} className={`${btn.whatsapp} mt-8`}>
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </ExternalLink>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-ink-muted">Pages</p>
          <ul className="space-y-3">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-ink-muted">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-ink-muted">Enquire about</p>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.key}><ExternalLink href={serviceWhatsappUrl(s.key)} className="hover:text-ink-muted">{s.title}</ExternalLink></li>
            ))}
          </ul>
        </div>
        <address className="not-italic md:col-span-3">
          <p className="eyebrow mb-5 text-ink-muted">Office</p>
          <p className="text-ink-muted">{ADDRESS_LINE}</p>
          <p className="eyebrow mb-2 mt-5 text-ink-muted">Registered Office</p>
          <p className="text-ink-muted">{REGISTERED_ADDRESS_LINE}</p>
          <p className="mt-4"><ExternalLink href={whatsappUrl()} className="hover:text-ink-muted">{WHATSAPP_DISPLAY}</ExternalLink></p>
          <p className="mt-1"><a href={`mailto:${COMPANY.email}`} className="hover:text-ink-muted">{COMPANY.email}</a></p>
        </address>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-ink-border py-6 text-sm text-ink-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p>Images marked illustrative are not RMTA project photography.</p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <ExternalLink
      href={whatsappUrl(SERVICE_MESSAGES.general)}
      aria-label="Chat with RMTA on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </ExternalLink>
  );
}
