# eltonjunior.dev

Portfólio e landing page de **Elton Junior** — T.I. e automação com IA.

Página única, estática, sem dependência de build: um `index.html` com CSS e JS embutidos.
As únicas requisições externas são as fontes do Google Fonts.

## O que a página apresenta

- Os sistemas em produção, com o endereço público de cada um
- Serviços, processo de trabalho e stack
- Os repositórios desta conta, com linguagem e número de commits
- Contato por WhatsApp, e-mail e GitHub

Os números da página (commits, bytes por linguagem, projetos na Vercel, status HTTP dos
endereços) foram lidos da API do GitHub e da Vercel em 20/10/2026. Ao atualizá-los, leia
de novo em vez de estimar.

## Rodar localmente

```bash
python -m http.server 8080
# abra http://localhost:8080
```

## Deploy

Hospedado na Vercel, com deploy automático a cada push na branch `main`.

## Estrutura

```
index.html   a página inteira: <head> com SEO, <style> com os tokens, conteúdo e <script>
```

Os tokens de cor e tipografia ficam no bloco `:root` do topo do `<style>`.
O tema é escuro por decisão de projeto (preto com vermelho `#E11B2C`), em tema único.
