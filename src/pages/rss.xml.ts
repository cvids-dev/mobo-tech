import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);

export const GET: APIRoute = async ({ site }) => {
  const entries = (await getCollection('articles', ({ data }) => data.draft === false && Boolean(data.pubDate)))
    .sort((a, b) => b.data.pubDate!.valueOf() - a.data.pubDate!.valueOf());
  const base = site?.toString() ?? 'https://mobo-tech.pages.dev';
  const items = entries.map((entry) => `
    <item>
      <title>${escapeXml(entry.data.title)}</title>
      <link>${base}/artigos/${encodeURIComponent(entry.id)}/</link>
      <guid>${base}/artigos/${encodeURIComponent(entry.id)}/</guid>
      <description>${escapeXml(entry.data.description)}</description>
      <pubDate>${entry.data.pubDate!.toUTCString()}</pubDate>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel><title>MOBO TECH</title><link>${base}</link><description>Tecnologia para entender, experimentar e construir.</description><language>pt-BR</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
