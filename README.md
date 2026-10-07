# VOW — landing page

Versão estática da página VOW, preparada para publicação na Vercel. Não precisa de WordPress, Elementor, build ou dependências Node.

## Rodar localmente

Abra `index.html` no navegador ou execute um servidor local na pasta:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar na Vercel

Importe esta pasta como projeto ou execute `vercel` na raiz. A Vercel servirá `index.html`, `styles.css` e `script.js` como arquivos estáticos.

## Imagens

Para manter a composição visual original nesta primeira versão, as imagens e o logo apontam para os arquivos públicos atualmente hospedados em `bannkers.space`. Para remover essa dependência, baixe os arquivos da biblioteca de mídia do WordPress e atualize as URLs no `index.html` e em `styles.css` para caminhos locais em `/assets`.

## Ajustes incluídos

- Layout responsivo com menu mobile.
- Navegação para modelo, planos e perguntas frequentes.
- Textos corrigidos e conteúdo remanescente do template de estética removido.
- Cards de planos, FAQ acessível com elementos nativos e links de ação.
- Valores mantidos como aparecem hoje na página pública.

Os botões de contratação apontam para a seção de planos até que o destino comercial (WhatsApp, formulário ou checkout) seja definido.
