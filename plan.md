# Plano de implementação — MOBO TECH

## Abordagem

Converter a página estática atual em um portal Astro de geração estática. A primeira entrega mantém o deploy desacoplado do servidor doméstico e prepara os artigos em Markdown, sem banco de dados ou integração externa. O Cloudflare Pages será conectado e configurado em uma etapa separada, depois de a URL `.pages.dev` ser confirmada.

## Estrutura

- `src/pages/`: início, artigos dinâmicos, pesquisa, categorias e páginas institucionais.
- `src/content/articles/`: artigos Markdown; apenas entradas com `draft: false` são publicadas.
- `src/content.config.ts`: esquema validado para artigos e categorias.
- `src/components/`: navegação, cabeçalho, rodapé, cartões e metadados.
- `src/layouts/`: estrutura semântica compartilhada.
- `src/data/`: catálogo editorial e textos institucionais.
- `src/styles/global.css`: identidade visual original reaproveitada e aprimorada.
- `public/`: favicon, robots e recursos estáticos.
- `astro.config.mjs`: saída estática, sitemap e URL pública configurável por `SITE_URL`.

## Design

**Movimento:** editorial tecnológico independente com referências a painéis digitais e interfaces de laboratório, sem imitar uma publicação específica.

**Princípios:** priorizar leitura; tornar Maker, DIY e reaproveitamento fáceis de encontrar; usar acentos luminosos com moderação; manter responsividade e baixo peso.

**Cores:** base azul-marinho quase preta para foco e conforto; ciano como assinatura e ação; azul e roxo como profundidade, não como ruído.

**Layout:** hierarquia editorial assimétrica: abertura de marca, trilha de categorias, foco Maker e cartões de conteúdo, com espaçamento generoso e grids que se adaptam ao dispositivo.

**Elementos de assinatura:** órbitas/núcleo MOBO na abertura; marca gráfica de barras; etiquetas técnicas monoespaçadas.

**Interação/animação:** busca e filtros locais acessíveis; menu mobile; transições breves; respeitar `prefers-reduced-motion`.

**Tipografia:** Manrope para títulos e leitura; DM Mono para metadados técnicos. Títulos concisos, subtítulos explicativos e parágrafos confortáveis.

**Essência da marca:** tecnologia prática e acessível para quem quer entender, experimentar e construir; personalidade curiosa, didática e inventiva.

**Voz:** direta, acolhedora e sem promessas exageradas. Exemplos: “O futuro não é assistir. É construir.” e “Antes de descartar, descubra o que esse equipamento ainda pode fazer.”

**Marca:** wordmark MOBO TECH com símbolo de barras inclinadas, retomando a marca existente.

**Cor proprietária:** ciano luminoso `#63e6e2`.

## Limites desta etapa

Não ativar formulários externos, analytics, cookies não essenciais, AdSense, afiliados ou envio de mensagens. Não publicar pautas como se fossem artigos concluídos. Confirmar o domínio pages.dev e revisar páginas legais antes da divulgação pública.
