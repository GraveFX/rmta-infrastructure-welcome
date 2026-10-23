import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rmta-logo.png.asset.json";
import { whatsappUrl, SERVICE_MESSAGES } from "@/lib/whatsapp";
import { btn, ExternalLink } from "./ui";
import { cn } from "@/lib/utils";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero ? "bg-transparent" : "border-b bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" aria-label="RMTA Infrastructure home" className="px-2 py-1 transition-colors">
          <img src={logo.url} alt="RMTA" className="h-10 w-auto" width={150} height={40} />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={cn("rounded-md px-4 py-2 text-sm font-medium transition-colors", overHero ? "text-ink-muted hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground")}
              activeProps={{ className: overHero ? "!text-ink-foreground" : "!text-foreground", "aria-current": "page" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ExternalLink href={whatsappUrl(SERVICE_MESSAGES.general)} className={cn(overHero ? btn.light : btn.primary, "hidden sm:inline-flex")}>
            Discuss Your Project
          </ExternalLink>
          <button
            type="button"
            className={cn("rounded-md p-2 lg:hidden", overHero ? "text-ink-foreground" : "text-foreground")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="container-site border-t pb-6 pt-2 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="block border-b py-4 font-display text-2xl" activeProps={{ "aria-current": "page", className: "text-brand-gradient" }}>
              {n.label}
            </Link>
          ))}
          <ExternalLink href={whatsappUrl(SERVICE_MESSAGES.general)} className={cn(btn.primary, "mt-6 w-full")}>
            Discuss Your Project
          </ExternalLink>
        </nav>
      )}
    </header>
  );
}
