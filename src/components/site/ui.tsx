import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import logo from "@/assets/brand/next-sites-logo.webp";
import { cn } from "@/lib/utils";

/** Atraso escalonado para elementos `.reveal`. */
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Logo({ className, withText = true }: { className?: string; withText?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={logo}
        alt=""
        width={436}
        height={290}
        className="h-7 w-auto drop-shadow-[0_0_14px_oklch(0.605_0.216_257.5/0.35)] sm:h-8"
        decoding="async"
      />
      {withText && (
        <span className="font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.12rem]">
          NEXT<span className="font-light text-text-2"> SITES</span>
        </span>
      )}
    </span>
  );
}

type Variant = "primary" | "ghost" | "outline";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium tracking-[-0.01em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--electric),var(--royal))] text-white shadow-[0_10px_40px_-10px_oklch(0.605_0.216_257.5/0.75),inset_0_1px_0_oklch(1_0_0/0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.605_0.216_257.5/0.9),inset_0_1px_0_oklch(1_0_0/0.3)]",
  ghost:
    "border border-line-strong bg-white/[0.03] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10",
  outline: "border border-line-strong text-white hover:border-white/40 hover:bg-white/[0.04]",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem] sm:h-14 sm:px-8",
} as const;

export function buttonClass(variant: Variant = "primary", size: keyof typeof sizes = "md") {
  return cn(base, variants[variant], sizes[size]);
}

/** Brilho que atravessa o botão no hover. */
export function ButtonShine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-none group-hover:animate-[beam_0.9s_ease-out] group-hover:opacity-100"
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: keyof typeof sizes;
  external?: boolean;
}) {
  return (
    <a
      className={cn(buttonClass(variant, size), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {variant === "primary" && <ButtonShine />}
      {children}
    </a>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sky",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center [&_.eyebrow-wrap]:justify-center",
        className,
      )}
    >
      <div className="eyebrow-wrap reveal flex">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2
        className="reveal mt-5 font-display text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.045em] text-balance text-white sm:text-5xl lg:text-[3.4rem]"
        style={delay(80)}
      >
        {title}
      </h2>
      {description && (
        <p
          className="reveal mt-5 text-base leading-relaxed text-pretty text-text-2 sm:text-lg"
          style={delay(160)}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export { ArrowUpRight };
