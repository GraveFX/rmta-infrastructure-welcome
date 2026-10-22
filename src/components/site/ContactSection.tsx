import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS_LINE, COMPANY } from "@/lib/site";
import { enquiryMessage, SERVICE_LABELS, whatsappUrl, WHATSAPP_DISPLAY, type ServiceKey } from "@/lib/whatsapp";
import { btn, ExternalLink, SectionHead, WhatsAppIcon } from "./ui";

type Errors = Partial<Record<"name" | "phone" | "email" | "details", string>>;
const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = {
      name: String(f.get("name") ?? "").slice(0, 100),
      phone: String(f.get("phone") ?? "").slice(0, 20),
      email: String(f.get("email") ?? "").slice(0, 120),
      service: (String(f.get("service")) as ServiceKey) || "general",
      details: String(f.get("details") ?? "").slice(0, 1000),
    };
    const err: Errors = {};
    if (v.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{6,18}$/.test(v.phone.trim())) err.phone = "Please enter a valid phone number.";
    if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email.trim())) err.email = "Please enter a valid email or leave it blank.";
    if (v.details.trim().length < 10) err.details = "Please describe your enquiry (at least 10 characters).";
    setErrors(err);
    if (Object.keys(err).length) return;
    window.open(whatsappUrl(enquiryMessage(v)), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const Err = ({ k }: { k: keyof Errors }) => errors[k] ? <p id={`${k}-err`} className="mt-1 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section className="py-24 md:py-32">
      <div className="container-site grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHead eyebrow="Contact" title="Start the conversation." intro="Fill in the form and it opens WhatsApp with your message ready to send." />
          <ul className="mt-12 space-y-6">
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-muted-foreground" /><div><p className="eyebrow text-muted-foreground">Phone / WhatsApp</p><ExternalLink href={whatsappUrl()} className="text-lg hover:underline">{WHATSAPP_DISPLAY}</ExternalLink></div></li>
            <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 text-muted-foreground" /><div><p className="eyebrow text-muted-foreground">Email</p><a href={`mailto:${COMPANY.email}`} className="text-lg hover:underline">{COMPANY.email}</a></div></li>
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 text-muted-foreground" /><div><p className="eyebrow text-muted-foreground">Office</p><p className="text-lg">{ADDRESS_LINE}</p></div></li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="rounded-lg border bg-card p-6 shadow-lift md:col-span-7 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium">Name *
              <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="name-err" />
              <Err k="name" />
            </label>
            <label className="text-sm font-medium">Phone number *
              <input name="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby="phone-err" />
              <Err k="phone" />
            </label>
            <label className="text-sm font-medium">Email (optional)
              <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="email-err" />
              <Err k="email" />
            </label>
            <label className="text-sm font-medium">Service *
              <select name="service" defaultValue="general" className={field}>
                {(Object.keys(SERVICE_LABELS) as ServiceKey[]).map((k) => <option key={k} value={k}>{SERVICE_LABELS[k]}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium sm:col-span-2">Enquiry details *
              <textarea name="details" rows={5} className={field} aria-invalid={!!errors.details} aria-describedby="details-err" />
              <Err k="details" />
            </label>
          </div>
          <button type="submit" className={`${btn.whatsapp} mt-8 w-full sm:w-auto`}>
            <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
          </button>
          <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
            {sent ? "WhatsApp opened in a new tab. Press send there to deliver your message." : "Nothing is stored on this website. Your message is sent through WhatsApp."}
          </p>
        </form>
      </div>
    </section>
  );
}
