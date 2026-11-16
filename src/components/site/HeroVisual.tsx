import { Check, Lock } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";

import logoLg from "@/assets/brand/next-sites-logo-lg.webp";

const b = (s: number) => ({ "--b": `${s}s` }) as CSSProperties;

/**
 * Composição 3D do hero: um site sendo "montado" dentro de um navegador e de um celular.
 * Representa a ideia → experiência digital. Inclina levemente com o mouse (somente desktop).
 */
export function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!fine.matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      stage.style.transform = `rotateX(${8 - cy * 6}deg) rotateY(${-14 + cx * 10}deg)`;
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[1/0.92] w-full max-w-[600px] [perspective:1600px] max-sm:-mx-2 max-sm:w-[calc(100%+1rem)]"
    >
      {/* Luz de fundo */}
      <div className="glow-blue absolute inset-[8%] rounded-full opacity-90" />
      <div className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/10" />
      <div className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div
        ref={stageRef}
        className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(8deg)_rotateY(-14deg)] max-lg:[transform:rotateX(6deg)_rotateY(-10deg)]"
      >
        {/* Navegador */}
        <div className="absolute left-[9%] top-[17%] w-[84%] [transform:translateZ(0px)]">
          <div className="border-glow overflow-hidden rounded-2xl bg-[linear-gradient(160deg,oklch(0.2_0.015_265/0.95),oklch(0.13_0.008_265/0.97))] shadow-[0_40px_120px_-20px_oklch(0_0_0/0.85),0_0_80px_-20px_oklch(0.605_0.216_257.5/0.45)]">
            <div className="flex items-center gap-2 border-b border-line px-3 py-2.5 sm:px-4">
              <span className="size-2 rounded-full bg-white/15" />
              <span className="size-2 rounded-full bg-white/15" />
              <span className="size-2 rounded-full bg-white/15" />
              <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[0.5rem] text-text-3 sm:text-[0.6rem]">
                <Lock className="size-2.5" />
                suaempresa.com.br
              </div>
            </div>
            <div className="space-y-3 p-3.5 sm:space-y-4 sm:p-5">
              {/* nav */}
              <div className="build flex items-center justify-between" style={b(0)}>
                <span className="h-2 w-12 rounded-full bg-white/70 sm:w-14" />
                <div className="hidden gap-2.5 min-[380px]:flex">
                  <span className="h-1.5 w-7 rounded-full bg-white/15" />
                  <span className="h-1.5 w-7 rounded-full bg-white/15" />
                  <span className="h-1.5 w-7 rounded-full bg-white/15" />
                </div>
                <span className="h-4 w-12 rounded-full bg-electric/80 sm:h-5 sm:w-14" />
              </div>
              <div className="grid grid-cols-[1.1fr_1fr] items-center gap-3 sm:gap-4">
                <div className="space-y-2">
                  <span
                    className="build block h-3 w-[92%] rounded bg-white/85 sm:h-4"
                    style={b(0.35)}
                  />
                  <span
                    className="build block h-3 w-[70%] rounded bg-[linear-gradient(90deg,var(--sky),var(--royal))] sm:h-4"
                    style={b(0.55)}
                  />
                  <span
                    className="build block h-1.5 w-full rounded-full bg-white/12"
                    style={b(0.8)}
                  />
                  <span
                    className="build block h-1.5 w-[80%] rounded-full bg-white/12"
                    style={b(0.9)}
                  />
                  <div className="build flex gap-1.5 pt-1.5" style={b(1.1)}>
                    <span className="h-4 w-14 rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))] sm:h-5 sm:w-16" />
                    <span className="h-4 w-11 rounded-full border border-white/20 sm:h-5 sm:w-14" />
                  </div>
                </div>
                <div
                  className="build relative aspect-[4/3.2] overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.605_0.216_257.5/0.55),transparent_60%),linear-gradient(150deg,oklch(0.25_0.06_262),oklch(0.12_0.02_262))]"
                  style={b(0.7)}
                >
                  <img
                    src={logoLg}
                    alt=""
                    width={873}
                    height={581}
                    className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_24px_oklch(0.605_0.216_257.5/0.6)]"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {[1.3, 1.45, 1.6].map((t) => (
                  <div
                    key={t}
                    className="build space-y-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] p-2 sm:p-2.5"
                    style={b(t)}
                  >
                    <span className="block size-3 rounded bg-electric/40 sm:size-4" />
                    <span className="block h-1.5 w-[80%] rounded-full bg-white/30" />
                    <span className="block h-1 w-full rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cartão de código */}
        <div className="absolute -left-[2%] top-[3%] w-[40%] [transform:translateZ(40px)]">
          <div className="animate-float-slow border-glow rounded-xl bg-surface/90 p-3 shadow-[0_30px_60px_-15px_oklch(0_0_0/0.9)] backdrop-blur-md sm:p-4">
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="ml-auto font-mono text-[0.5rem] text-text-3 sm:text-[0.58rem]">
                projeto.tsx
              </span>
            </div>
            <pre className="font-mono text-[0.5rem] leading-[1.7] text-text-2 sm:text-[0.66rem]">
              <span className="text-sky">{"<Site"}</span>
              {"\n  "}
              <span className="text-text-3">marca</span>=
              <span className="text-white">"sua empresa"</span>
              {"\n  "}
              <span className="text-text-3">design</span>=
              <span className="text-white">"sob medida"</span>
              {"\n  "}
              <span className="text-text-3">mobile</span>
              {"\n"}
              <span className="text-sky">{"/>"}</span>
              <span className="ml-0.5 inline-block h-[1.05em] w-[0.45em] translate-y-[0.15em] bg-electric [animation:caret_1s_steps(1)_infinite]" />
            </pre>
          </div>
        </div>

        {/* Celular */}
        <div className="absolute bottom-[1%] right-[1%] w-[30%] [transform:translateZ(80px)]">
          <div className="animate-float rounded-[1.6rem] border border-white/15 bg-[linear-gradient(160deg,#20232c,#0b0c10)] p-[5px] shadow-[0_40px_80px_-20px_oklch(0_0_0/0.9),0_0_50px_-10px_oklch(0.605_0.216_257.5/0.5)]">
            <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.3rem] bg-ink">
              <span className="absolute left-1/2 top-1.5 z-10 h-2.5 w-10 -translate-x-1/2 rounded-full bg-black" />
              <div className="space-y-2 p-2.5 pt-6">
                <div className="build flex items-center justify-between" style={b(0.2)}>
                  <span className="h-1.5 w-8 rounded-full bg-white/70" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-white/25" />
                </div>
                <span className="build block h-2.5 w-[90%] rounded bg-white/85" style={b(0.45)} />
                <span
                  className="build block h-2.5 w-[65%] rounded bg-[linear-gradient(90deg,var(--sky),var(--royal))]"
                  style={b(0.6)}
                />
                <span className="build block h-1 w-full rounded-full bg-white/12" style={b(0.85)} />
                <span
                  className="build block h-1 w-[75%] rounded-full bg-white/12"
                  style={b(0.95)}
                />
                <span
                  className="build block h-4 w-full rounded-full bg-[linear-gradient(135deg,var(--electric),var(--royal))]"
                  style={b(1.15)}
                />
                <div
                  className="build aspect-square rounded-md border border-white/10 bg-[radial-gradient(circle_at_40%_30%,oklch(0.605_0.216_257.5/0.5),transparent_65%),oklch(0.18_0.03_262)]"
                  style={b(1.35)}
                />
                <div className="build grid grid-cols-2 gap-1.5" style={b(1.55)}>
                  <span className="h-6 rounded bg-white/[0.06]" />
                  <span className="h-6 rounded bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selo flutuante */}
        <div className="absolute bottom-[10%] left-[2%] [transform:translateZ(110px)]">
          <div className="animate-float-slow flex items-center gap-2.5 rounded-xl border border-line-strong bg-ink/70 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:px-4 sm:py-3">
            <span className="grid size-6 place-items-center rounded-full bg-electric/20 text-sky sm:size-7">
              <Check className="size-3.5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[0.7rem] font-semibold text-white sm:text-[0.8rem]">
                Ideia → site no ar
              </span>
              <span className="block text-[0.58rem] text-text-3 sm:text-[0.66rem]">
                Do briefing à entrega
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
