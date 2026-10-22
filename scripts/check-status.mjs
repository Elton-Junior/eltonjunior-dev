// Checa os enderecos em producao listados no console do hero e grava status.json.
// Roda todo dia no GitHub Actions; o commit resultante dispara o deploy na Vercel.
import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const urls = [...html.matchAll(/<div class="crow"><a href="([^"]+)"/g)].map((m) => m[1]);

const sites = await Promise.all(urls.map(async (url) => {
  const t0 = performance.now();
  try {
    const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
    return { url, status: res.status, ms: Math.round(performance.now() - t0) };
  } catch {
    return { url, status: 0, ms: Math.round(performance.now() - t0) };
  }
}));

writeFileSync('status.json', JSON.stringify({ checked_at: new Date().toISOString(), sites }, null, 2) + '\n');
console.log(sites.map((s) => `${s.status} ${s.ms}ms ${s.url}`).join('\n'));
