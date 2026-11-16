import { Code2, Gem, Lightbulb, MousePointerClick, PenTool } from "lucide-react";

import logoLg from "@/assets/brand/next-sites-logo-lg.webp";
import { useReveal } from "./hooks";
import { delay, SectionHeading } from "./ui";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Criatividade",
    text: "Ideias próprias para cada marca, sem modelos prontos ou soluções repetidas.",
  },
  {
    icon: Code2,
    title: "Tecnologia",
    text: "Ferramentas modernas para sites rápidos, estáveis e fáceis de manter.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Composição, tipografia e cores trabalhadas para transmitir a identidade do negócio.",
  },
  {
    icon: MousePointerClick,
    title: "Experiência do usuário",
    text: "Navegação clara e intuitiva, para o visitante encontrar o que procura sem esforço.",
  },
  {
    icon: Gem,
    title: "Compromisso com a qualidade",
    text: "Atenção a cada detalhe, do primeiro contato à entrega final do projeto.",
  },
];

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Sobre a Next Sites"
            title={
              <span id="sobre-title">
                Presença digital feita com{" "}
                <span className="text-gradient">cuidado e intenção.</span>
              </span>
            }
            description="A Next Sites desenvolve soluções digitais para empresas que desejam fortalecer sua presença na internet. Cada projeto nasce do entendimento do negócio e ganha forma com design cuidadoso e tecnologia moderna."
          />

          {/* Emblema */}
          <div
            className="reveal reveal-scale border-glow relative mt-12 overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.605_0.216_257.5/0.22),transparent_65%),linear-gradient(180deg,var(--surface),oklch(0.12_0.005_265))] p-8 sm:p-10 lg:mt-auto"
            style={delay(200)}
          >
            <div
              aria-hidden="true"
              className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_70%)]"
            />
            <div className="relative flex flex-col items-center text-center">
              <div className="relative grid size-40 place-items-center sm:size-48">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-electric/25"
                />
                <span
                  aria-hidden="true"
                  className="animate-pulse-ring absolute inset-0 rounded-full border border-electric/30"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-5 rounded-full bg-electric/10 blur-2xl"
                />
                <img
                  src={logoLg}
                  alt="Logo da Next Sites"
                  width={873}
                  height={581}
                  loading="lazy"
                  decoding="async"
                  className="relative w-[64%] drop-shadow-[0_0_30px_oklch(0.605_0.216_257.5/0.55)]"
                />
              </div>
              <p className="mt-8 max-w-sm font-display text-xl font-medium leading-snug tracking-[-0.03em] text-white sm:text-2xl">
                “Cada site é a vitrine de uma empresa. Por isso, cada detalhe importa.”
              </p>
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-text-3">
                Next Sites
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="reveal mb-6 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-text-3">
            Nossos valores
          </p>
          <ol className="border-t border-line">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="reveal group relative border-b border-line"
                style={delay(i * 90)}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-electric/10 to-transparent transition-[width] duration-700 ease-out group-hover:w-full"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-electric to-transparent transition-[width] duration-700 ease-out group-hover:w-full"
                />
                <div className="relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-x-6 sm:py-8">
                  <span className="font-mono text-xs text-text-3 transition-colors group-hover:text-sky sm:row-span-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-text-2">
                      {text}
                    </p>
                  </div>
                  <span className="hidden size-12 place-items-center rounded-2xl border border-line-strong bg-white/[0.03] text-text-2 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-electric/50 group-hover:bg-electric/15 group-hover:text-sky group-hover:shadow-[0_0_30px_-5px_var(--electric)] sm:grid">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
