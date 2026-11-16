import { ArrowDown, ArrowUpRight, Layers, MessageCircle, Smartphone } from "lucide-react";
import type { CSSProperties } from "react";

import { HeroVisual } from "./HeroVisual";
import { ButtonLink } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const PILLARS = [
  { icon: Layers, label: "Design sob medida" },
  { icon: Smartphone, label: "Pensado para celular" },
  { icon: MessageCircle, label: "Atendimento direto" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[72px] lg:pt-20"
    >
      <HeroBackdrop />

      <div className="container-site relative grid flex-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="hero-in" style={d(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-[0.78rem] text-text-2 backdrop-blur-md">
              <span className="rounded-full bg-electric/15 px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-sky">
                Agência digital
              </span>
              Sites sob medida para empresas
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.055em] text-balance text-white min-[400px]:text-[3.2rem] sm:text-7xl lg:text-[4.9rem] xl:text-[5.5rem]"
          >
            <span className="hero-in block" style={d(120)}>
              Transformamos
            </span>
            <span className="hero-in block" style={d(200)}>
              ideias em
            </span>
            <span className="hero-in block pb-2" style={d(280)}>
              <span className="text-gradient">experiências digitais.</span>
            </span>
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-[1.05rem] leading-relaxed text-pretty text-text-2 sm:text-lg"
            style={d(420)}
          >
            Criamos experiências digitais que valorizam sua marca, fortalecem sua presença online e
            aproximam sua empresa de novos clientes.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={d(540)}>
            <ButtonLink href="#projetos" size="lg">
              Conheça nossos projetos
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#contato" size="lg" variant="ghost">
              Solicite um orçamento
            </ButtonLink>
          </div>

          <ul className="hero-in mt-10 flex flex-wrap gap-x-6 gap-y-3" style={d(680)}>
            {PILLARS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[0.82rem] text-text-2">
                <Icon className="size-4 text-electric" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-in relative" style={d(360)}>
          <HeroVisual />
        </div>
      </div>

      <div className="container-site relative hidden pb-8 lg:block">
        <a
          href="#sobre"
          className="hero-in group inline-flex items-center gap-3 text-xs text-text-3 transition-colors hover:text-white"
          style={d(900)}
        >
          <span className="grid size-9 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-electric/60">
            <ArrowDown className="size-3.5 animate-float" />
          </span>
          Role para explorar
        </a>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_60%_35%,#000_20%,transparent_75%)]" />
      <div className="glow-blue absolute -right-[10%] -top-[15%] h-[80vh] w-[70vw] max-w-[900px] opacity-80" />
      <div className="glow-blue absolute -bottom-[30%] -left-[20%] h-[60vh] w-[60vw] opacity-40" />

      {/* Faixas diagonais inspiradas no traço da logo */}
      <div className="absolute -right-[20%] top-[8%] h-[140%] w-[160%] origin-top-right rotate-[-38deg] sm:-right-[5%]">
        <div className="absolute left-0 top-[18%] h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-electric/30 to-transparent">
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky to-transparent [animation:beam_7s_ease-in-out_infinite_2s]" />
        </div>
        <div className="absolute left-0 top-[24%] h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-white/10 to-transparent">
          <span className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-electric to-transparent [animation:beam_9s_ease-in-out_infinite_4.5s]" />
        </div>
        <div className="absolute left-[10%] top-[30%] h-24 w-[80%] bg-gradient-to-r from-transparent via-royal/10 to-transparent blur-2xl" />
      </div>

      <div className="bg-noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
