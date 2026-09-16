import { mkdir, writeFile } from 'node:fs/promises';

const url = 'https://raw.githubusercontent.com/barretogustavo/smart-bible-versions/main/ALM1911%20-%20Almeida%201911.json';
const output = 'assets/data/almeida-1911.json';

console.log('Baixando Almeida 1911...');
const response = await fetch(url);
if (!response.ok) throw new Error(`Falha ao baixar a Bíblia: HTTP ${response.status}`);

const text = await response.text();
const data = JSON.parse(text);
if (!Array.isArray(data) || data.length !== 66) {
  throw new Error(`Arquivo inesperado: esperados 66 livros, recebido ${Array.isArray(data) ? data.length : 'formato inválido'}`);
}

await mkdir('assets/data', { recursive: true });
await writeFile(output, JSON.stringify(data));
console.log(`Almeida 1911 pronta: ${data.length} livros -> ${output}`);
