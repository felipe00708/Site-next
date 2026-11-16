# Next Sites — Site institucional

Site oficial da agência **Next Sites**: *Transformando ideias em experiências digitais.*

Feito com React, TanStack Start, Tailwind CSS v4 e Vite.

## Rodar localmente

```sh
bun install   # ou npm install
bun run dev   # ou npm run dev
```

Build de produção: `bun run build`.

## Onde editar

- **Contatos (WhatsApp, Instagram) e textos gerais:** `src/lib/site.ts`
- **Portfólio:** `src/data/projects.ts`. Coloque as capturas em `src/assets/portfolio/` e adicione um item ao array `PROJECTS`. O campo `desktop` (opcional) mostra o projeto em um notebook; `url` (opcional) mostra o botão "Visitar site".
- **Seções da página:** `src/components/site/`
- **Cores, fontes e animações:** `src/styles.css`
