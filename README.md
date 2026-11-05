# MOBO TECH — versão inicial

Portal independente para tecnologia prática: entender, experimentar e construir. O foco editorial está em Maker, DIY e reaproveitamento, além de IA, hardware, Linux, automação, redes e ciência.

## Tecnologias e desenvolvimento

Astro e TypeScript geram páginas estáticas; artigos usam Markdown com esquema validado; o CSS próprio preserva a identidade visual. Requisitos locais: Node.js 20.3.0 ou mais recente e npm.

```bash
npm install
npm run dev
```

Abra a URL local indicada no terminal. Para validar e visualizar a compilação:

```bash
npm run build
npm run preview
```

O site compilado fica em `dist/`.

## Artigos

Crie arquivos `.md` em `src/content/articles/`. Consulte o esquema em `src/content.config.ts`. O campo `draft` é `true` por padrão; somente artigos revisados e explicitamente marcados `draft: false` são publicados. As pautas da homepage são ideias editoriais, não notícias ou artigos já publicados.

## SEO e endereço

O build usa `SITE_URL` para canonical, Open Graph, dados estruturados e sitemap. O fallback `https://mobo-tech.pages.dev` é apenas o endereço planejado; confirme o projeto Cloudflare e configure o endereço real antes do lançamento:

```bash
SITE_URL=https://SEU-PROJETO.pages.dev npm run build
```

## Cloudflare Pages — ainda não conectado

Após criar o projeto Cloudflare, conecte este repositório e configure o preset Astro, comando `npm run build`, diretório `dist` e variável de build `SITE_URL` com o endereço `.pages.dev` efetivo. Defina `main` como branch de produção depois de revisar e integrar a branch de desenvolvimento. O plano gratuito e a disponibilidade do nome dependem da conta e da plataforma; nenhum deploy foi configurado nesta etapa.

## Integrações e servidor doméstico

Busca e filtros são locais. Newsletter, contato, analytics, anúncios e afiliados não enviam dados e ainda não estão conectados. Páginas legais e conteúdo precisam de revisão editorial antes da divulgação pública. O portal destina-se a hospedagem estática no Cloudflare Pages; nenhum container ou serviço do servidor doméstico MOBO é utilizado ou alterado.
