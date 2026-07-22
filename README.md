# Site institucional da Zirkoon — atualização de julho de 2026

Site estático, responsivo e pronto para edição no VS Code e publicação no GitHub Pages.

## Atualizações desta versão

- novas artes de abertura, produtos, P&D terceirizado e apresentação institucional;
- card de cadinhos direcionado ao WhatsApp;
- P&D terceirizado direcionado ao WhatsApp;
- Magik Klean direcionado à Amazon;
- AquaSafe direcionado ao Mercado Livre;
- nova seção **Financiamento, apoio e parcerias institucionais**;
- logos e links da Fundação Araucária, CNPq, SEIA, IAT, UTFPR e SprinT;
- imagens otimizadas em WebP;
- navegação responsiva e formulário integrado ao WhatsApp.

## Estrutura

```text
zirkoon-site-2026-07-22/
├── index.html
├── styles.css
├── script.js
├── README.md
├── robots.txt
├── sitemap.xml
├── .gitignore
└── assets/
    └── images/
        ├── logo-zirkoon.webp
        ├── favicon.png
        ├── capa.webp
        ├── analise_termica.webp
        ├── magik_klean.webp
        ├── glazz.webp
        ├── aqua_safe.webp
        ├── p_d_terceirizado.webp
        ├── sobre.webp
        ├── apoio-fundacao-araucaria.webp
        ├── apoio-cnpq.webp
        ├── apoio-seia.webp
        ├── apoio-iat.webp
        ├── apoio-utfpr.webp
        ├── apoio-sprint.webp
        └── og-image.jpg
```

## Links configurados

### Produtos e serviços

- **Magik Klean:** página de busca na Amazon.
- **AquaSafe:** anúncio no Mercado Livre.
- **Cadinhos para análise térmica:** mensagem pronta no WhatsApp.
- **P&D terceirizado:** mensagem pronta no WhatsApp.
- **Glazz:** formulário de contato do site.

### Fomento, apoio e ecossistema

- Fundação Araucária: `https://www.fappr.pr.gov.br/`
- CNPq: `https://www.gov.br/cnpq/pt-br`
- SEIA: `https://www.inova.pr.gov.br/`
- Instituto Água e Terra: `https://www.iat.pr.gov.br/`
- UTFPR: `https://www.utfpr.edu.br/`
- SprinT — Incubadora da UTFPR Londrina: `https://sprint.ld.utfpr.edu.br/`

## Abrir no VS Code

1. Extraia o ZIP.
2. No VS Code, selecione **File > Open Folder**.
3. Abra a pasta do projeto.
4. Abra `index.html` com a extensão **Live Server** ou diretamente no navegador.

## Publicar no GitHub Pages

1. Crie ou abra o repositório destinado ao site.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. Acesse **Settings > Pages**.
4. Em **Build and deployment**, configure:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Clique em **Save**.

## Publicação pelo terminal

```bash
git init
git add .
git commit -m "Atualiza site institucional da Zirkoon"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/zirkoon-site.git
git push -u origin main
```

## WhatsApp

O formulário e os atalhos comerciais utilizam o número:

```text
5543988448864
```

Para alterar o telefone, atualize o número nos links `wa.me` do `index.html` e no arquivo `script.js`.

## Domínio próprio

Teste primeiro a publicação no endereço do GitHub Pages. Depois, configure o domínio personalizado `www.zirkoon.com.br` em **Settings > Pages** e ajuste os registros DNS no provedor do domínio.
