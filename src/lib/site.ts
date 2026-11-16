/**
 * Dados centrais da Next Sites: contatos, navegação e utilitários de WhatsApp.
 * Altere aqui para refletir em todo o site.
 */
export const SITE = {
  name: "Next Sites",
  tagline: "Transformando ideias em experiências digitais.",
  description:
    "A Next Sites cria sites institucionais, landing pages, cardápios digitais e soluções sob medida que valorizam sua marca e aproximam sua empresa de novos clientes.",
  whatsappNumber: "5511917525540",
  whatsappDisplay: "(11) 91752-5540",
  instagramUrl: "https://www.instagram.com/nextsites.br?rpxt=MTFwNnBheTBqdHY4dA==",
  instagramHandle: "@nextsites.br",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
] as const;

/** Link oficial de conversa do WhatsApp (wa.me), opcionalmente com mensagem preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Next Sites e gostaria de conversar sobre um projeto.";

export type QuoteRequest = {
  name: string;
  company: string;
  service: string;
  description: string;
  phone?: string;
};

/** Monta a mensagem de orçamento no formato combinado com a Next Sites. */
export function buildQuoteMessage({ name, company, service, description, phone }: QuoteRequest) {
  return [
    "Olá! Vim pelo site da Next Sites e gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${name.trim()}`,
    `*Empresa:* ${company.trim()}`,
    `*Serviço desejado:* ${service.trim()}`,
    `*Descrição do projeto:* ${description.trim()}`,
    `*Contato:* ${phone?.trim() ? phone.trim() : "Não informado"}`,
  ].join("\n");
}
