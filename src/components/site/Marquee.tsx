import logo from "@/assets/brand/next-sites-logo.webp";

const ITEMS = [
  "Sites institucionais",
  "Landing pages",
  "Cardápios digitais",
  "Páginas para empresas",
  "Sites personalizados",
  "Soluções sob medida",
];

/** Faixa contínua com os serviços — decorativa (os serviços também estão listados na seção própria). */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-xl font-medium tracking-[-0.03em] text-white/80 sm:px-10 sm:text-3xl">
            {item}
          </span>
          <img
            src={logo}
            alt=""
            width={436}
            height={290}
            loading="lazy"
            decoding="async"
            className="h-3.5 w-auto opacity-70 sm:h-4"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative border-y border-line bg-white/[0.015] py-6 sm:py-8">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
