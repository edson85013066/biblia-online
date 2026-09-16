# Bíblia Online

Projeto de site estático para leitura e estudo da Bíblia em português, preparado para hospedagem no Netlify.

## Estrutura

- `index.html` — página inicial
- `biblia.html` — leitor de capítulos
- `salmos.html` — hub dos 150 Salmos
- `oracoes.html` — orações editoriais
- `versiculos.html` e `temas.html` — organização temática
- `devocionais.html` — reflexões originais
- `versiculo-do-dia.html` — versículo aleatório
- páginas legais e de acessibilidade
- `robots.txt` e `sitemap.xml`
- `assets/css/style.css` e `assets/js/app.js`

## Fonte bíblica

A primeira versão técnica usa a API Bolls para demonstrar a leitura dinâmica. A documentação da API orienta que quem precisa do texto completo use os arquivos de tradução disponibilizados pelo próprio serviço, em vez de fazer scraping de capítulos. Antes de colocar o projeto em produção e monetização, a licença da tradução escolhida deve ser confirmada e documentada. Para conteúdo em domínio público, a Almeida 1911 é uma alternativa identificada em fontes públicas, mas a implementação precisa usar uma fonte/distribuição compatível com essa licença.

## SEO e monetização

O projeto já possui títulos, descrições, canonicals, robots, sitemap, Schema.org básico, links internos, páginas legais, responsividade e espaços estruturais para futura publicidade.

Não foi criado um `ads.txt` com dados fictícios. Ele deve ser adicionado somente com o identificador real do editor quando o AdSense estiver efetivamente configurado.
