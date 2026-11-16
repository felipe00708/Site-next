import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Expand, X } from "lucide-react";
import { useState } from "react";

import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useReveal } from "./hooks";
import { LaptopMockup, PhoneMockup } from "./Mockups";
import { buttonClass, ButtonLink, ButtonShine, delay, SectionHeading } from "./ui";

export function Portfolio() {
  const ref = useReveal<HTMLElement>();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = PROJECTS.find((p) => p.slug === openSlug) ?? null;

  return (
    <section
      ref={ref}
      id="projetos"
      aria-labelledby="projetos-title"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent"
      />
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <span id="projetos-title">
                Projetos reais, <span className="text-gradient">feitos pela Next Sites.</span>
              </span>
            }
            description="Uma seleção de sites desenvolvidos para empresas de diferentes segmentos. As telas são apresentadas exatamente como foram entregues."
          />
          <div className="reveal flex items-center gap-4 lg:pb-3" style={delay(200)}>
            <span className="font-display text-6xl font-semibold leading-none tracking-[-0.06em] text-gradient-soft sm:text-7xl">
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <span className="max-w-[9rem] text-sm leading-snug text-text-2">
              projetos em destaque no portfólio
            </span>
          </div>
        </div>

        <ol className="mt-16 space-y-6 sm:mt-20 sm:space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCase
              key={project.slug}
              project={project}
              index={i}
              total={PROJECTS.length}
              onOpen={() => setOpenSlug(project.slug)}
            />
          ))}
        </ol>

        <div className="reveal mt-14 flex flex-col items-center gap-5 text-center">
          <p className="max-w-md text-text-2">
            O próximo projeto do portfólio pode ser o da sua empresa.
          </p>
          <ButtonLink href="#contato" size="lg">
            Quero um projeto assim
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>
      </div>

      <ProjectViewer project={openProject} onClose={() => setOpenSlug(null)} />
    </section>
  );
}

function ProjectCase({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const reversed = index % 2 === 1;
  const [first, second] = project.mobile;

  return (
    <li className="reveal" style={delay(60)}>
      <article
        aria-labelledby={`proj-${project.slug}`}
        className="border-glow group relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,oklch(0.16_0.01_268),oklch(0.11_0.004_268))] sm:rounded-[2.5rem]"
      >
        <div className="grid items-center lg:grid-cols-2">
          {/* Informações */}
          <div
            className={cn("relative z-10 p-7 sm:p-10 lg:p-14 xl:p-16", reversed && "lg:order-2")}
          >
            <div className="flex items-center gap-3 font-mono text-xs text-text-3">
              <span className="text-sky">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-8 bg-line-strong" />
              <span>{String(total).padStart(2, "0")}</span>
            </div>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sky">
              {project.segment}
            </p>
            <h3
              id={`proj-${project.slug}`}
              className="mt-3 font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl"
            >
              {project.name}
            </h3>
            <p className="mt-5 max-w-md leading-relaxed text-text-2">{project.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-text-2"
                >
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={onOpen} className={buttonClass("primary", "md")}>
                <ButtonShine />
                <Expand className="size-4" />
                Ver telas do projeto
              </button>
              {project.url && (
                <ButtonLink href={project.url} external variant="ghost">
                  Visitar site
                  <ArrowUpRight className="size-4" />
                </ButtonLink>
              )}
            </div>
          </div>

          {/* Palco com mockups */}
          <div
            className={cn(
              "relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 pb-12 pt-4 sm:min-h-[560px] lg:min-h-[640px] lg:py-16",
              reversed && "lg:order-1",
            )}
          >
            <div aria-hidden="true" className="absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_50%_50%,#000_10%,transparent_65%)]" />
              <div className="glow-blue absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute left-1/2 top-1/2 size-[70%] max-h-[480px] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/15" />
              {/* Base de luz */}
              <div className="absolute bottom-[8%] left-1/2 h-10 w-[60%] -translate-x-1/2 rounded-[100%] bg-electric/30 blur-2xl" />
            </div>

            <button
              type="button"
              onClick={onOpen}
              aria-label={`Ampliar as telas do projeto ${project.name}`}
              className="relative block w-full cursor-zoom-in rounded-3xl [perspective:1800px]"
            >
              {project.desktop ? (
                <div className="relative mx-auto max-w-xl">
                  <LaptopMockup image={project.desktop} className="w-full" />
                  {first && (
                    <PhoneMockup
                      image={first}
                      className="absolute -bottom-6 -right-2 w-[26%] sm:right-2"
                    />
                  )}
                </div>
              ) : second && first ? (
                <div className="relative mx-auto flex h-full max-w-[460px] items-center justify-center">
                  <PhoneMockup
                    image={second}
                    className="relative z-0 w-[52%] max-w-[240px] sm:w-[46%] translate-x-[18%] translate-y-[6%] [transform:rotateY(-14deg)_rotateZ(4deg)] transition-transform duration-700 ease-out group-hover:translate-x-[24%] sm:max-w-[260px]"
                  />
                  <PhoneMockup
                    image={first}
                    className="relative z-10 -ml-[6%] w-[56%] max-w-[260px] sm:w-[50%] -translate-x-[18%] -translate-y-[4%] transition-transform duration-700 ease-out group-hover:-translate-x-[24%] sm:max-w-[280px]"
                  />
                </div>
              ) : first ? (
                <div className="relative mx-auto w-[66%] max-w-[290px] transition-transform duration-700 ease-out [transform:rotateY(-12deg)_rotateX(4deg)] group-hover:[transform:rotateY(-4deg)_rotateX(2deg)] sm:w-[48%] lg:w-[52%]">
                  <PhoneMockup image={first} />
                </div>
              ) : null}
            </button>

            <span className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-ink/70 px-3.5 py-1.5 text-[0.72rem] text-text-2 backdrop-blur-md transition-all duration-500 [@media(pointer:fine)]:translate-y-2 [@media(pointer:fine)]:opacity-0 [@media(pointer:fine)]:group-hover:translate-y-0 [@media(pointer:fine)]:group-hover:opacity-100">
              <Expand className="size-3" />
              Ampliar telas
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}

/** Visualizador em tela cheia com todas as capturas do projeto, sem cortes. */
function ProjectViewer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const images = project ? [...(project.desktop ? [project.desktop] : []), ...project.mobile] : [];
  return (
    <DialogPrimitive.Root open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-xl data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-0 z-[61] flex flex-col outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98]">
          {project && (
            <>
              <div className="container-site flex items-start justify-between gap-6 pb-4 pt-6 sm:pt-8">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-sky">
                    {project.segment}
                  </p>
                  <DialogPrimitive.Title className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    {project.name}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="sr-only">
                    Capturas de tela do projeto {project.name}, exibidas sem cortes.
                  </DialogPrimitive.Description>
                </div>
                <DialogPrimitive.Close
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong bg-white/[0.04] text-white transition-colors hover:border-electric/60 hover:bg-electric/15"
                  aria-label="Fechar visualização"
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>
              </div>
              <div className="flex-1 overflow-y-auto overscroll-contain pb-10">
                <div className="container-site flex flex-wrap items-start justify-center gap-8 pt-2">
                  {images.map((img) => (
                    <figure key={img.src} className="w-full max-w-[380px]">
                      <div className="overflow-hidden rounded-3xl border border-line-strong bg-surface shadow-2xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          decoding="async"
                          className="block h-auto w-full"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="mt-3 text-center text-sm text-text-3">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
