import { useEffect, useState } from "react";

import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante de WhatsApp: aparece após o hero e se recolhe na seção de contato. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contato");
    let pastHero = false;
    let inContact = false;
    const sync = () => setVisible(pastHero && !inContact);
    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.6;
      sync();
    };
    const io = contact
      ? new IntersectionObserver(
          ([e]) => {
            inContact = !!e?.isIntersecting;
            sync();
          },
          { threshold: 0.25 },
        )
      : null;
    if (contact && io) io.observe(contact);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Next Sites pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7",
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap rounded-full border border-line-strong bg-ink/85 px-4 py-2 text-sm text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Fale com a gente
      </span>
      <span className="relative grid size-14 place-items-center rounded-full">
        <span
          aria-hidden="true"
          className="animate-pulse-ring absolute inset-0 rounded-full border border-electric/60"
        />
        <span className="relative grid size-14 place-items-center rounded-full border border-white/15 bg-[linear-gradient(135deg,var(--electric),var(--royal))] text-white shadow-[0_12px_40px_-8px_oklch(0.605_0.216_257.5/0.8)] transition-transform duration-300 group-hover:scale-105">
          <WhatsAppIcon className="size-6" />
        </span>
      </span>
    </a>
  );
}
