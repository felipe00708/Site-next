import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Marquee } from "@/components/site/Marquee";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhyUs } from "@/components/site/WhyUs";
import { SITE } from "@/lib/site";

const TITLE = "Next Sites — Transformamos ideias em experiências digitais";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  slogan: SITE.tagline,
  telephone: `+${SITE.whatsappNumber}`,
  sameAs: [SITE.instagramUrl.split("?")[0]],
  areaServed: "BR",
  knowsAbout: [
    "Sites institucionais",
    "Landing pages",
    "Cardápios digitais",
    "Páginas digitais para empresas",
    "Sites personalizados",
  ],
};

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: SITE.description },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SITE.description },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[70] rounded-full bg-electric px-5 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Intro />
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
