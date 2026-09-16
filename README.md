# Bíblia Online

Projeto de site estático para leitura e estudo da Bíblia em português, preparado para hospedagem no Netlify.

## Leitura bíblica

A versão principal do projeto é a **Almeida 1911**, baseada no texto histórico de João Ferreira de Almeida.

O texto é baixado automaticamente durante o build do Netlify para `assets/data/almeida-1911.json`. Assim, depois da publicação, o leitor funciona com o arquivo local e não depende de uma API externa para cada capítulo.

Fonte técnica do arquivo JSON:
- `barretogustavo/smart-bible-versions`
- `ALM1911 - Almeida 1911.json`

A documentação de procedência e licença está em `LICENSE-BIBLIA.md`.

## Estrutura

- `index.html` — página inicial
- `biblia.html` — leitor dos 66 livros
- `salmos.html` — hub dos Salmos
- `oracoes.html` — orações editoriais
- `versiculos.html` e `temas.html` — organização temática
- `devocionais.html` — reflexões originais
- `versiculo-do-dia.html` — versículo aleatório usando a Bíblia local
- páginas legais e de acessibilidade
- `robots.txt` e `sitemap.xml`
- `assets/css/style.css` e `assets/js/app.js`
- `scripts/download-bible.mjs` — prepara a Bíblia no build
- `netlify.toml` — configuração do build

## SEO e monetização

O projeto possui títulos, descrições, canonicals, robots, sitemap, Schema.org básico, links internos, páginas legais, responsividade e espaços estruturais para futura publicidade.

Não foi criado `ads.txt` com dados fictícios. Ele deve ser adicionado somente quando o identificador real do editor estiver configurado.
