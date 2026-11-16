import {
  ArrowUpRight,
  Building2,
  Layers3,
  LayoutTemplate,
  Puzzle,
  Rocket,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { handleSpotlight, useReveal } from "./hooks";
import { delay, SectionHeading } from "./ui";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  art: ReactNode;
  className: string;
};

const SERVICES: Service[] = [
  {
    icon: Building2,
    title: "Sites institucionais",
    text: "Um site completo para apresentar sua empresa, seus serviços e sua história com credibilidade.",
    art: <ArtInstitutional />,
    className: "sm:col-span-2 lg:col-span-4",
  },
  {
    icon: LayoutTemplate,
    title: "Páginas digitais para empresas",
    text: "Uma página objetiva com as informações essenciais do seu negócio e seus canais de contato.",
    art: <ArtLinkPage />,
    className: "lg:col-span-2",
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápios digitais",
    text: "Cardápio online com fotos, descrições e preços, fácil de consultar e compartilhar.",
    art: <ArtMenu />,
    className: "lg:col-span-2",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    text: "Páginas focadas em um produto, serviço ou campanha, com uma chamada clara para a ação.",
    art: <ArtLanding />,
    className: "lg:col-span-2",
  },
  {
    icon: Layers3,
    title: "Sites personalizados",
    text: "Projetos com identidade própria, desenhados a partir da personalidade da sua marca.",
    art: <ArtCustom />,
    className: "lg:col-span-2",
  },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="servicos"
      aria-labelledby="servicos-title"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="glow-blue pointer-events-none absolute left-1/2 top-0 h-96 w-[60rem] max-w-full -translate-x-1/2 opacity-30"
      />
      <div className="container-site relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <span id="servicos-title">
                Soluções digitais para <span className="text-gradient">cada momento</span> do seu
                negócio.
              </span>
            }
          />
          <p className="reveal max-w-sm text-text-2 lg:pb-2" style={delay(200)}>
            Do site institucional ao cardápio digital: escolhemos o formato certo para o que sua
            empresa precisa comunicar.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}

          {/* Soluções sob medida — cartão em destaque */}
          <li className="reveal sm:col-span-2 lg:col-span-6" style={delay(120)}>
            <article
              onPointerMove={handleSpotlight}
              className="spotlight border-glow group relative grid h-full overflow-hidden rounded-3xl bg-[linear-gradient(120deg,oklch(0.485_0.249_263.6/0.22),oklch(0.155_0.009_274.3)_45%,oklch(0.155_0.009_274.3))] p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center md:gap-10 lg:p-10"
            >
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-3">
                  <IconChip icon={Puzzle} />
                  <span className="font-mono text-xs text-text-3">06</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[2rem]">
                  Soluções digitais sob medida
                </h3>
                <p className="mt-3 text-text-2">
                  Tem uma necessidade específica? Conte sua ideia e desenvolvemos uma solução
                  pensada exatamente para o seu negócio.
                </p>
                <a
                  href="#contato"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sky transition-colors hover:text-white"
                >
                  Conversar sobre minha ideia
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="relative mt-10 md:mt-0">
                <ArtModules />
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

function IconChip({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-11 place-items-center rounded-xl border border-electric/30 bg-[linear-gradient(140deg,oklch(0.605_0.216_257.5/0.25),oklch(0.485_0.249_263.6/0.08))] text-sky shadow-[inset_0_1px_0_oklch(1_0_0/0.12),0_0_24px_-8px_var(--electric)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
      <Icon className="size-5" strokeWidth={1.6} />
    </span>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <li className={cn("reveal", service.className)} style={delay((index % 3) * 90)}>
      <article
        onPointerMove={handleSpotlight}
        className="spotlight border-glow group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[linear-gradient(180deg,oklch(0.17_0.01_268),oklch(0.13_0.006_268))] transition-transform duration-500 ease-out hover:-translate-y-1"
      >
        <div className="relative h-48 overflow-hidden border-b border-line sm:h-52">
          <div
            aria-hidden="true"
            className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(#000,transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-electric/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          />
          <div aria-hidden="true" className="relative h-full">
            {service.art}
          </div>
        </div>
        <div className="relative z-10 flex flex-1 flex-col p-7">
          <div className="flex items-center justify-between">
            <IconChip icon={service.icon} />
            <span className="font-mono text-xs text-text-3">0{index + 1}</span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-[1.4rem]">
            {service.title}
          </h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-text-2">{service.text}</p>
        </div>
      </article>
    </li>
  );
}

/* ───────── Ilustrações (puramente decorativas, em CSS) ───────── */

const ease = "transition-transform duration-700 ease-[cubic-bezier(.2,.7,.1,1)]";

function ArtInstitutional() {
  return (
    <div className="absolute inset-x-6 top-7 sm:inset-x-10">
      <div
        className={cn(
          "mx-auto max-w-lg rounded-t-xl border border-b-0 border-white/10 bg-ink/80 shadow-2xl",
          ease,
          "group-hover:-translate-y-2",
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="ml-3 h-2 w-28 rounded bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-4 p-4">
          <div className="space-y-2">
            <span className="block h-1.5 w-10 rounded-full bg-electric/70" />
            <span className="block h-3 w-[90%] rounded bg-white/80" />
            <span className="block h-3 w-[60%] rounded bg-white/80" />
            <span className="block h-1.5 w-full rounded-full bg-white/10" />
            <span className="block h-1.5 w-[85%] rounded-full bg-white/10" />
            <span className="mt-3 block h-5 w-20 rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="col-span-2 h-14 rounded-md bg-[linear-gradient(140deg,oklch(0.605_0.216_257.5/0.5),oklch(0.2_0.04_262))]" />
            <span className="h-10 rounded-md bg-white/[0.06]" />
            <span className="h-10 rounded-md bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtLinkPage() {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-6 w-40 -translate-x-1/2",
        ease,
        "group-hover:-translate-y-2",
      )}
    >
      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-2xl">
        <span className="size-9 rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))] ring-4 ring-electric/15" />
        <span className="mt-2.5 h-2 w-20 rounded bg-white/70" />
        <span className="mt-1.5 h-1 w-14 rounded bg-white/15" />
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "mt-2 block h-5 w-full rounded-md border border-white/10 bg-white/[0.04] transition-colors duration-500",
              i === 0 && "group-hover:border-electric/60 group-hover:bg-electric/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ArtMenu() {
  const items = [
    ["w-16", "w-10"],
    ["w-20", "w-8"],
    ["w-14", "w-12"],
  ];
  return (
    <div className="absolute left-1/2 top-6 w-48 -translate-x-1/2">
      <div className="space-y-2 rounded-2xl border border-white/10 bg-ink/80 p-3 shadow-2xl">
        {items.map(([a, b], i) => (
          <div
            key={i}
            className={cn("flex items-center gap-2.5 rounded-lg bg-white/[0.04] p-2", ease)}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="size-8 shrink-0 rounded-md bg-[linear-gradient(140deg,oklch(0.605_0.216_257.5/0.45),oklch(0.22_0.03_262))]" />
            <span className="flex-1 space-y-1">
              <span className={cn("block h-1.5 rounded bg-white/70", a)} />
              <span className={cn("block h-1 rounded bg-white/15", b)} />
            </span>
            <span className="grid size-5 place-items-center rounded-full bg-electric text-[0.6rem] font-bold leading-none text-white transition-transform duration-500 group-hover:scale-110">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtLanding() {
  return (
    <div className="absolute left-1/2 top-5 w-40 -translate-x-1/2">
      <div
        className={cn(
          "space-y-2 rounded-xl border border-white/10 bg-ink/80 p-3 shadow-2xl",
          ease,
          "group-hover:-translate-y-6",
        )}
      >
        <span className="block h-2.5 w-[85%] rounded bg-white/80" />
        <span className="block h-1.5 w-full rounded-full bg-white/10" />
        <span className="block h-12 rounded-md bg-white/[0.05]" />
        <span className="block h-1.5 w-[70%] rounded-full bg-white/10" />
        <span className="block h-1.5 w-[90%] rounded-full bg-white/10" />
        <span className="block h-6 rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))] shadow-[0_0_24px_-4px_var(--electric)]" />
        <span className="block h-10 rounded-md bg-white/[0.05]" />
      </div>
    </div>
  );
}

function ArtCustom() {
  return (
    <div className="absolute inset-x-8 top-8 flex items-center justify-center gap-4">
      <div
        className={cn(
          "rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-2xl",
          ease,
          "group-hover:-rotate-3",
        )}
      >
        <span className="block font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-white">
          Aa
        </span>
        <div className="mt-3 flex gap-1.5">
          <span className="size-4 rounded-full bg-electric" />
          <span className="size-4 rounded-full bg-royal" />
          <span className="size-4 rounded-full bg-white" />
          <span className="size-4 rounded-full border border-white/20 bg-ink" />
        </div>
      </div>
      <div
        className={cn(
          "w-28 space-y-3 rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-2xl",
          ease,
          "group-hover:rotate-3",
        )}
      >
        {["w-[70%]", "w-[40%]", "w-[85%]"].map((w, i) => (
          <span key={i} className="relative block h-1 rounded-full bg-white/10">
            <span
              className={cn(
                "absolute inset-y-0 left-0 rounded-full bg-electric transition-[width] duration-700",
                w,
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function ArtModules() {
  return (
    <div aria-hidden="true" className="relative mx-auto grid w-64 grid-cols-3 gap-2.5 sm:w-72">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "aspect-square rounded-xl border transition-all duration-700",
            [0, 4, 8].includes(i)
              ? "border-electric/40 bg-[linear-gradient(140deg,oklch(0.605_0.216_257.5/0.45),oklch(0.485_0.249_263.6/0.15))] shadow-[0_0_30px_-8px_var(--electric)]"
              : "border-white/10 bg-white/[0.03]",
            i === 2 && "group-hover:border-electric/40 group-hover:bg-electric/20",
            i === 6 && "group-hover:border-electric/40 group-hover:bg-electric/20",
          )}
          style={{ transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  );
}
