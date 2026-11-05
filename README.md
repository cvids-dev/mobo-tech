# MOBO TECH — versão inicial

Portal estático responsivo com identidade visual futurista escura.

## Arquivos
- `index.html`: estrutura, metadados SEO, Open Graph e dados estruturados iniciais.
- `styles.css`: identidade visual e layout responsivo.
- `app.js`: menu mobile, filtros de categoria e busca local.
- `assets/favicon.svg`: ícone vetorial.

## Antes de publicar
1. Registrar um domínio.
2. Substituir `SEU-DOMINIO-AQUI` no `index.html` pela URL real (sem barra final nos metadados).
3. Atualizar o endereço de contato no rodapé.
4. Criar páginas reais para cada artigo e páginas institucionais: Sobre, Contato, Política de Privacidade, Política de Cookies e divulgação de afiliados.
5. Remover o formulário demonstrativo ou conectá-lo a um serviço de newsletter com consentimento.
6. Substituir as pautas marcadas como "EM BREVE" por artigos completos e revisados antes de anunciar o portal como publicação ativa.

## Publicação recomendada
Usar Cloudflare Pages para servir o site estático. Não é necessário executar outro container no servidor Mobo. O Mobo pode apoiar o fluxo editorial e automações via n8n, preservando os containers já existentes.

Para teste local, basta abrir `index.html` no navegador. Para publicar, enviar o conteúdo desta pasta a um repositório Git e conectar o repositório ao Cloudflare Pages (framework preset: None; build command vazio; output directory `/` se a raiz do repositório for o site).

## SEO — próxima etapa
- Definir domínio e canonical definitivo.
- Criar `robots.txt` e `sitemap.xml` com URLs reais.
- Criar páginas individuais com título, descrição, autor, data de publicação/atualização, fontes e links internos.
- Gerar JSON-LD `Article` por artigo e `BreadcrumbList` nas páginas internas.
- Configurar Google Search Console e Analytics/alternativa de privacidade.
- Otimizar imagens em WebP/AVIF, com dimensões definidas e texto alternativo.
