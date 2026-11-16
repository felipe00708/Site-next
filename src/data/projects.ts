/**
 * PORTFÓLIO — para adicionar um novo projeto:
 * 1. Salve as capturas em `src/assets/portfolio/` (de preferência .webp).
 * 2. Importe as imagens abaixo.
 * 3. Adicione um objeto ao array `PROJECTS`.
 *
 * - `mobile`: capturas da versão celular (exibidas em mockups de smartphone).
 * - `desktop` (opcional): captura da versão para computador (exibida em mockup de notebook).
 * - `url` (opcional): endereço público do site, exibe o botão "Visitar site".
 *
 * As imagens são exibidas exatamente como foram enviadas: nenhum corte lateral, filtro ou alteração.
 * Capturas mais altas que a tela do mockup rolam suavemente quando o mouse passa sobre o celular.
 */
import brasaHome from "@/assets/portfolio/brasa-burger-home.webp";
import brasaCardapio from "@/assets/portfolio/brasa-burger-cardapio.webp";
import casaSmartphones from "@/assets/portfolio/casa-dos-smartphones.webp";
import draSuzana from "@/assets/portfolio/dra-suzana-maia.webp";
import estiloBoss from "@/assets/portfolio/estilo-boss-barbearia.webp";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Cor que completa a tela do mockup quando a captura é mais curta que a tela do celular. */
  background?: string;
};

export type Project = {
  slug: string;
  name: string;
  segment: string;
  summary: string;
  highlights: string[];
  mobile: ProjectImage[];
  desktop?: ProjectImage;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "brasa-burger",
    name: "Brasa Burger",
    segment: "Hamburgueria artesanal",
    summary:
      "Site com cardápio digital para uma hamburgueria artesanal: apresentação de impacto, produtos com foto, descrição e preço, e acesso rápido ao pedido.",
    highlights: ["Cardápio digital", "Botão de pedido", "Mobile first"],
    mobile: [
      {
        src: brasaHome,
        alt: "Página inicial do site Brasa Burger com a chamada “Acenda seu apetite.”",
        width: 1080,
        height: 1651,
        caption: "Página inicial",
        background: "#211615",
      },
      {
        src: brasaCardapio,
        alt: "Cardápio digital do Brasa Burger com o lanche Brasa Classic, preço e botão adicionar",
        width: 1080,
        height: 1882,
        caption: "Cardápio digital",
      },
    ],
  },
  {
    slug: "casa-dos-smartphones",
    name: "Casa dos Smartphones",
    segment: "Assistência técnica de celulares",
    summary:
      "Página para uma assistência técnica em Curitiba, com os serviços em destaque e caminhos diretos para o WhatsApp e para a localização da loja.",
    highlights: ["Contato via WhatsApp", "Como chegar", "Serviços"],
    mobile: [
      {
        src: casaSmartphones,
        alt: "Site da Casa dos Smartphones, assistência técnica de celulares em Curitiba",
        width: 1080,
        height: 1891,
        caption: "Página inicial",
      },
    ],
  },
  {
    slug: "dra-suzana-maia",
    name: "Dra. Suzana Maia",
    segment: "Odontologia & estética",
    summary:
      "Site para consultório odontológico com identidade elegante e delicada, apresentando os tratamentos de forma clara e organizada.",
    highlights: ["Identidade elegante", "Tratamentos", "Contato rápido"],
    mobile: [
      {
        src: draSuzana,
        alt: "Seção “Nossos tratamentos” do site da Dra. Suzana Maia, odontologia e estética",
        width: 1080,
        height: 1898,
        caption: "Tratamentos",
      },
    ],
  },
  {
    slug: "estilo-boss-barbearia",
    name: "Estilo Boss Barbearia",
    segment: "Barbearia",
    summary:
      "Site para barbearia que valoriza o ambiente do espaço com fotos em destaque e uma navegação simples para o cliente.",
    highlights: ["Galeria de fotos", "Navegação simples", "Contato rápido"],
    mobile: [
      {
        src: estiloBoss,
        alt: "Site da Estilo Boss Barbearia exibindo a foto da fachada à noite",
        width: 1080,
        height: 1897,
        caption: "Galeria",
      },
    ],
  },
];
