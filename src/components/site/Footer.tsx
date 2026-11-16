import { ArrowUp, ArrowUpRight } from "lucide-react";

import logoLg from "@/assets/brand/next-sites-logo-lg.webp";
import { NAV_LINKS, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { ButtonLink, Logo } from "./ui";

const SERVICES = [
  "Sites institucionais",
  "Páginas digitais para empresas",
  "Cardápios digitais",
  "Landing pages",
  "Sites personalizados",
  "Soluções sob medida",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[linear-gradient(180deg,var(--ink),oklch(0.09_0.01_265))]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
      />

      {/* Chamada final */}
      <div className="container-site relative py-16 sm:py-20">
        <div className="border-glow relative overflow-hidden rounded-[2rem] bg-[radial-gradient(ellipse_at_100%_0%,oklch(0.605_0.216_257.5/0.35),transparent_55%),radial-gradient(ellipse_at_0%_100%,oklch(0.485_0.249_263.6/0.3),transparent_50%),var(--surface)] p-8 sm:p-12 lg:p-14">
          <img
            src={logoLg}
            alt=""
            aria-hidden="true"
            width={873}
            height={581}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -bottom-10 -right-10 w-72 opacity-[0.12] sm:w-96"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
                Pronto para o próximo passo?
              </p>
              <p className="mt-3 max-w-lg text-text-2">
                Conte sobre sua empresa e vamos pensar juntos na melhor solução digital para ela.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contato" size="lg">
                Solicitar orçamento
                <ArrowUpRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                external
                size="lg"
                variant="ghost"
              >
                <WhatsAppIcon className="size-4" />
                Conversar no WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site relative grid gap-12 border-t border-line py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <a href="#inicio" aria-label="Next Sites — voltar ao início">
            <Logo />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-2">
            Agência digital especializada em sites e soluções digitais para empresas que desejam
            fortalecer sua presença na internet.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Next Sites"
              className="grid size-11 place-items-center rounded-full border border-line-strong text-text-2 transition-all hover:border-electric/60 hover:bg-electric/15 hover:text-white"
            >
              <InstagramIcon className="size-[18px]" />
            </a>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Next Sites"
              className="grid size-11 place-items-center rounded-full border border-line-strong text-text-2 transition-all hover:border-electric/60 hover:bg-electric/15 hover:text-white"
            >
              <WhatsAppIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-text-3">
            Navegação
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-text-2 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-text-3">
            Serviços
          </p>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  className="text-sm text-text-2 transition-colors hover:text-white"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-text-3">Contato</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-2 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 text-sky" />
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-2 transition-colors hover:text-white"
              >
                <InstagramIcon className="size-4 text-sky" />
                {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-text-2 transition-colors hover:text-white"
              >
                <ArrowUpRight className="size-4 text-sky" />
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site relative flex flex-col gap-4 border-t border-line pb-24 pt-7 text-xs text-text-3 sm:pb-7 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-medium text-white/80">NEXT SITES</span> — Transformando ideias em
          experiências digitais.
        </p>
        <div className="flex items-center gap-5">
          <p>© {year} Next Sites. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong transition-colors hover:border-electric/60 hover:text-white"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
