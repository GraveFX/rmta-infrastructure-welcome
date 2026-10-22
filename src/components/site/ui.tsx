import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
export const btn = {
  primary: cn(base, "bg-primary text-primary-foreground hover:shadow-lift"),
  light: cn(base, "bg-ink-foreground text-ink hover:shadow-lift"),
  ghostDark: cn(base, "border border-ink-border text-ink-foreground hover:bg-ink-foreground/10"),
  ghost: cn(base, "border border-border text-foreground hover:bg-secondary"),
  whatsapp: cn(base, "bg-whatsapp text-whatsapp-foreground hover:shadow-lift"),
};

export function ExternalLink({ children, ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...p}>
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title, intro, dark }: { eyebrow: string; title: ReactNode; intro?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={cn("eyebrow mb-5 flex items-center gap-3", dark ? "text-ink-muted" : "text-muted-foreground")}>
        <span className="brand-rule inline-block w-8" /> {eyebrow}
      </p>
      <h2 className={cn("text-4xl font-semibold leading-[1.05] md:text-6xl", dark && "text-ink-foreground")}>{title}</h2>
      {intro && <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", dark ? "text-ink-muted" : "text-muted-foreground")}>{intro}</p>}
    </div>
  );
}
