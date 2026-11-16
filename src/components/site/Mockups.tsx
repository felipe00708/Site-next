import type { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Mockup de smartphone. A captura é exibida sem nenhuma alteração; ao passar o mouse,
 * a tela "rola" suavemente até o fim da captura para mostrar a página inteira.
 */
export function PhoneMockup({
  image,
  className,
  priority = false,
  scrollOnHover = true,
}: {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
  scrollOnHover?: boolean;
}) {
  return (
    <div className={cn("group/phone relative [container-type:inline-size]", className)}>
      {/* botões laterais */}
      <span
        aria-hidden="true"
        className="absolute -left-[1.2cqw] top-[22%] h-[7%] w-[1.2cqw] rounded-l-sm bg-[#2a2d36]"
      />
      <span
        aria-hidden="true"
        className="absolute -left-[1.2cqw] top-[31%] h-[11%] w-[1.2cqw] rounded-l-sm bg-[#2a2d36]"
      />
      <span
        aria-hidden="true"
        className="absolute -right-[1.2cqw] top-[27%] h-[14%] w-[1.2cqw] rounded-r-sm bg-[#2a2d36]"
      />

      <div className="relative rounded-[14cqw] bg-[linear-gradient(145deg,#3a3e4a,#15171d_40%,#2a2d36)] p-[1.6cqw] shadow-[0_50px_100px_-30px_oklch(0_0_0/0.95),0_0_0_1px_oklch(1_0_0/0.08)]">
        <div className="relative rounded-[12.6cqw] bg-black p-[2.6cqw] pb-[6cqw] pt-[8cqw]">
          {/* Câmera e alto-falante na moldura (fora da tela, para não cobrir o conteúdo do site) */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[3.4cqw] h-[1.3cqw] w-[16%] -translate-x-1/2 rounded-full bg-[#1c1e24]"
          />
          <span
            aria-hidden="true"
            className="absolute left-[64%] top-[3.1cqw] size-[1.9cqw] rounded-full bg-[#15171c] ring-1 ring-white/5"
          />
          <div
            className="relative aspect-[1080/1890] overflow-hidden rounded-[10.4cqw] bg-ink [container-type:size]"
            style={image.background ? { backgroundColor: image.background } : undefined}
          >
            {/* Largura total, sem cortes laterais; se a captura for mais alta que a tela, rola no hover */}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className={cn(
                "absolute inset-x-0 top-0 block h-auto w-full",
                scrollOnHover &&
                  "transition-[translate] duration-[5s] ease-[cubic-bezier(.45,0,.4,1)] group-hover/phone:[translate:0_min(0px,calc(100cqh-100%))]",
              )}
            />
            {/* Reflexo de vidro */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(1_0_0/0.10)_0%,transparent_28%,transparent_70%,oklch(1_0_0/0.04)_100%)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mockup de notebook para capturas da versão desktop (quando disponíveis). */
export function LaptopMockup({ image, className }: { image: ProjectImage; className?: string }) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="relative mx-auto w-[84%] rounded-t-[2.2cqw] bg-[linear-gradient(180deg,#2c2f38,#16181e)] p-[1.6cqw] pb-[2cqw] shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[0.6cqw] size-[0.7cqw] -translate-x-1/2 rounded-full bg-black/80"
        />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.6cqw] bg-ink">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-top"
          />
        </div>
      </div>
      <div className="relative h-[2.4cqw] rounded-b-[1.6cqw] bg-[linear-gradient(180deg,#3b3f4b,#1a1c22)] shadow-[0_40px_80px_-20px_oklch(0_0_0/0.9)]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[0.9cqw] w-[16%] -translate-x-1/2 rounded-b-[0.8cqw] bg-black/40"
        />
      </div>
    </div>
  );
}
