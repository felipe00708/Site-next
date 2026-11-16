import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { NAV_LINKS, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { ButtonLink, Logo } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  // Fundo do header ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector<HTMLElement>(l.href)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menu mobile: trava rolagem e fecha com Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-b border-line bg-ink/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <a
            href="#inicio"
            aria-label="Next Sites — voltar ao início"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-white/[0.025] p-1 backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.href ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-[0.84rem] transition-colors duration-300",
                      active === link.href
                        ? "bg-white/[0.07] text-white shadow-[inset_0_1px_0_oklch(1_0_0/0.08)]"
                        : "text-text-2 hover:text-white",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="#contato" className="hidden sm:inline-flex">
              Solicitar orçamento
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center rounded-full border border-line-strong bg-white/[0.03] text-white transition-colors hover:border-electric/60 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile em tela cheia (fora do header: backdrop-filter quebraria o position: fixed) */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-ink/95 backdrop-blur-2xl transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          aria-hidden="true"
          className="glow-blue pointer-events-none absolute -right-32 top-10 size-96 opacity-60"
        />
        <nav
          aria-label="Navegação mobile"
          className="container-site relative flex min-h-full flex-col pb-10 pt-8"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  "border-b border-line transition-[opacity,transform] duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-[1.7rem] font-medium tracking-[-0.03em] text-white"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-text-3">0{i + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className={cn("size-5", active === link.href ? "text-electric" : "text-text-3")}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              "mt-auto grid gap-3 pt-10 transition-[opacity,transform] duration-500",
              open ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0",
            )}
          >
            <ButtonLink
              href="#contato"
              size="lg"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Solicitar orçamento
              <ArrowUpRight className="size-4" />
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3">
              <ButtonLink
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                external
                variant="ghost"
                size="lg"
                tabIndex={open ? 0 : -1}
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={SITE.instagramUrl}
                external
                variant="ghost"
                size="lg"
                tabIndex={open ? 0 : -1}
              >
                <InstagramIcon className="size-4" />
                Instagram
              </ButtonLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
