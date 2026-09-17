# Bíblia Online

Projeto de site estático para leitura e estudo da Bíblia em português, preparado para hospedagem no **Cloudflare Workers/Assets**.

## Leitura bíblica

A versão principal do projeto é a **Almeida 1911**, baseada no texto histórico de João Ferreira de Almeida.

O texto é baixado automaticamente durante o build para `assets/data/almeida-1911.json`. Assim, depois da publicação, o leitor funciona preferencialmente com o arquivo local e mantém um fallback externo caso o arquivo local não esteja disponível.

Fonte técnica do arquivo JSON:
- `barretogustavo/smart-bible-versions`
- `ALM1911 - Almeida 1911.json`

A documentação de procedência e licença está em `LICENSE-BIBLIA.md`.

## Estrutura

- `index.html` — página inicial
- `biblia.html` — leitor dos 66 livros
- `salmos.html` — hub dos 150 Salmos
- `oracoes.html` — orações editoriais
- `versiculos.html` e `temas.html` — organização temática
- `devocionais.html` — reflexões originais
- `versiculo-do-dia.html` — versículo diário usando a Bíblia carregada no navegador
- páginas legais e de acessibilidade
- `robots.txt` e `sitemap.xml`
- `assets/css/style.css` e `assets/js/app.js`
- `scripts/download-bible.mjs` — prepara a Bíblia no build
- `wrangler.jsonc` — configuração do Cloudflare Workers

## SEO e monetização

O projeto possui títulos, descrições, canonicals, robots, sitemap, Schema.org básico, links internos, páginas legais, responsividade e estrutura preparada para futura publicidade.

Não foi criado `ads.txt` com dados fictícios. Ele deve ser adicionado somente quando o identificador real do editor estiver configurado.
