import {
  Compass,
  MessagesSquare,
  Monitor,
  Palette,
  ShieldCheck,
  Smartphone,
  Tablet,
  Target,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { handleSpotlight, useInView, useReveal } from "./hooks";
import { delay, SectionHeading } from "./ui";

type Benefit = { icon: LucideIcon; title: string; text: string };

const LEFT: Benefit[] = [
  {
    icon: Palette,
    title: "Design profissional e personalizado",
    text: "Visual criado para a sua marca, sem cara de modelo pronto.",
  },
  {
    icon: Smartphone,
    title: "Experiência adaptada para celulares",
    text: "Layouts pensados para cada tela, do smartphone ao computador.",
  },
  {
    icon: Compass,
    title: "Facilidade de navegação",
    text: "Informações organizadas para o visitante encontrar o que procura.",
  },
];

const RIGHT: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Presença digital profissional",
    text: "Uma vitrine online que transmite credibilidade para sua empresa.",
  },
  {
    icon: MessagesSquare,
    title: "Contato facilitado com clientes",
    text: "WhatsApp, redes sociais e localização sempre ao alcance de um toque.",
  },
  {
    icon: Target,
    title: "Soluções pensadas para cada negócio",
    text: "Cada projeto parte das necessidades reais da sua empresa.",
  },
];

export function WhyUs() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="relative overflow-hidden border-y border-line bg-[linear-gradient(180deg,oklch(0.13_0.006_268),var(--ink))] py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_50%,#000,transparent_70%)]"
      />
      <div className="container-site relative">
        <SectionHeading
          align="center"
          eyebrow="Por que a Next Sites"
          title={
            <span id="diferenciais-title">
              O que sua empresa ganha com <span className="text-gradient">um site bem feito.</span>
            </span>
          }
          description="Mais do que um site bonito: uma presença digital organizada, profissional e fácil de usar para quem procura sua empresa."
        />

        <div className="mt-16 grid items-center gap-4 lg:mt-20 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-6">
          <ul className="grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {LEFT.map((b, i) => (
              <BenefitCard key={b.title} benefit={b} index={i} side="left" />
            ))}
          </ul>
          <div className="order-first lg:order-2">
            <ResponsiveDemo />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:order-3 lg:grid-cols-1">
            {RIGHT.map((b, i) => (
              <BenefitCard key={b.title} benefit={b} index={i + 3} side="right" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
  side,
}: {
  benefit: Benefit;
  index: number;
  side: "left" | "right";
}) {
  const Icon = benefit.icon;
  return (
    <li className="reveal" style={delay((index % 3) * 100)}>
      <div
        onPointerMove={handleSpotlight}
        className={cn(
          "spotlight group relative flex h-full gap-4 rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors duration-500 hover:border-electric/35 sm:p-6",
          side === "left" && "lg:flex-row-reverse lg:text-right",
        )}
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line-strong bg-ink text-sky transition-all duration-500 group-hover:border-electric/50 group-hover:bg-electric/15 group-hover:shadow-[0_0_28px_-6px_var(--electric)]">
          <Icon className="size-5" strokeWidth={1.6} />
        </span>
        <div>
          <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-white">
            {benefit.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-2">{benefit.text}</p>
        </div>
      </div>
    </li>
  );
}

/** Demonstração viva de responsividade: o mesmo layout se reorganiza em desktop, tablet e celular. */
function ResponsiveDemo() {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: "100px" });
  const devices = [
    { icon: Monitor, label: "Desktop" },
    { icon: Tablet, label: "Tablet" },
    { icon: Smartphone, label: "Celular" },
  ];
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="reveal reveal-scale border-glow relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,oklch(0.605_0.216_257.5/0.22),transparent_65%),var(--surface)]"
    >
      <div className="absolute inset-x-0 top-5 flex justify-center gap-2">
        {devices.map(({ icon: Icon, label }, i) => (
          <span
            key={label}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[0.68rem] text-text-3"
            style={{
              animation: `device-${i} 10s cubic-bezier(.65,0,.35,1) infinite`,
              animationPlayState: inView ? "running" : "paused",
            }}
          >
            <Icon className="size-3" />
            {label}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 top-12 grid place-items-center">
        <div
          className="animate-morph overflow-hidden border border-white/15 bg-ink/90 shadow-[0_30px_60px_-20px_oklch(0_0_0/0.9),0_0_50px_-15px_var(--electric)]"
          style={{ animationPlayState: inView ? "running" : "paused" }}
        >
          <div className="flex h-full flex-col gap-2 p-3">
            <div className="flex items-center justify-between">
              <span className="h-1.5 w-8 rounded-full bg-white/70" />
              <span className="h-1.5 w-5 rounded-full bg-electric/80" />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="min-w-[110px] flex-[1.2] space-y-1.5 py-1">
                <span className="block h-2.5 w-[90%] rounded bg-white/85" />
                <span className="block h-2.5 w-[60%] rounded bg-[linear-gradient(90deg,var(--sky),var(--royal))]" />
                <span className="block h-1 w-full rounded-full bg-white/15" />
                <span className="block h-1 w-[80%] rounded-full bg-white/15" />
                <span className="mt-2 block h-3.5 w-16 rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))]" />
              </div>
              <div className="min-h-[56px] min-w-[110px] flex-1 rounded-md bg-[linear-gradient(140deg,oklch(0.605_0.216_257.5/0.5),oklch(0.2_0.04_262))]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2].map((k) => (
                <span key={k} className="h-9 min-w-[60px] flex-1 rounded-md bg-white/[0.06]" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[0, 1].map((k) => (
                <span key={k} className="h-9 min-w-[90px] flex-1 rounded-md bg-white/[0.04]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
