import logoLg from "@/assets/brand/next-sites-logo-lg.webp";

/**
 * Abertura com a logo. 100% CSS (não depende de JS para sumir) e exibida uma vez por sessão:
 * o script no <head> marca `data-intro-seen` nas visitas seguintes. Desativada com movimento reduzido.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <img
        src={logoLg}
        alt=""
        width={873}
        height={581}
        className="intro__logo"
        fetchPriority="high"
      />
      <span className="intro__line" />
    </div>
  );
}
