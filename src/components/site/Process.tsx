import {
  ClipboardList,
  Code,
  MessageSquareText,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useReveal } from "./hooks";
import { ButtonLink, delay, SectionHeading } from "./ui";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageSquareText,
    title: "Primeiro contato",
    text: "Você apresenta sua empresa e explica o que precisa.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    text: "Entendemos as necessidades e definimos a melhor solução.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    text: "Criamos um projeto personalizado para a sua empresa.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    text: "O projeto é apresentado e finalizado após os ajustes necessários.",
  },
];

export function Process() {
  const ref = useReveal<HTMLElement>();
  const trackRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  // Linha de progresso ligada à rolagem (rAF + passive: leve)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.72 - r.top) / (r.height + vh * 0.1)));
      track.style.setProperty("--p", p.toFixed(3));
      setActive(Math.min(STEPS.length, Math.floor(p * STEPS.length + 0.35)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="processo"
      aria-labelledby="processo-title"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <span id="processo-title">
                Do primeiro contato à entrega,{" "}
                <span className="text-gradient">um processo claro.</span>
              </span>
            }
          />
          <p className="reveal max-w-sm text-text-2 lg:pb-2" style={delay(200)}>
            Você acompanha cada etapa e sabe exatamente o que acontece com o seu projeto.
          </p>
        </div>

        <ol
          ref={trackRef}
          className="relative mt-16 grid gap-0 [--p:0] lg:mt-24 lg:grid-cols-4 lg:gap-6"
        >
          {/* Linha (desktop: horizontal / mobile: vertical) */}
          <span
            aria-hidden="true"
            className="absolute left-[23px] top-2 bottom-2 w-px bg-line-strong lg:left-0 lg:right-0 lg:top-[23px] lg:bottom-auto lg:h-px lg:w-auto"
          />
          <span
            aria-hidden="true"
            className="absolute left-[23px] top-2 bottom-2 w-px origin-top scale-y-[var(--p)] bg-gradient-to-b from-sky via-electric to-royal shadow-[0_0_12px_var(--electric)] lg:left-0 lg:right-0 lg:top-[23px] lg:bottom-auto lg:h-px lg:w-auto lg:origin-left lg:scale-x-[var(--p)] lg:scale-y-100 lg:bg-gradient-to-r"
          />

          {STEPS.map(({ icon: Icon, title, text }, i) => {
            const on = i < active;
            return (
              <li
                key={title}
                className="reveal relative grid grid-cols-[48px_1fr] gap-x-5 pb-12 last:pb-0 lg:block lg:pb-0"
                style={delay(i * 110)}
              >
                <span
                  className={cn(
                    "relative z-10 grid size-12 place-items-center rounded-full border font-mono text-sm transition-all duration-500",
                    on
                      ? "border-electric bg-[linear-gradient(135deg,var(--electric),var(--royal))] text-white shadow-[0_0_0_6px_oklch(0.605_0.216_257.5/0.12),0_0_30px_-4px_var(--electric)]"
                      : "border-line-strong bg-ink text-text-3",
                  )}
                >
                  0{i + 1}
                </span>
                <div
                  className={cn(
                    "rounded-2xl border p-6 transition-all duration-500 lg:mt-8 lg:p-7",
                    on ? "border-electric/30 bg-electric/[0.06]" : "border-line bg-white/[0.015]",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-6 transition-colors duration-500",
                      on ? "text-sky" : "text-text-3",
                    )}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-2">{text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-14 flex justify-center lg:mt-20">
          <ButtonLink href="#contato" size="lg" variant="ghost">
            Começar pelo primeiro contato
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
