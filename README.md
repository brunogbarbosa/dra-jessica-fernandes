# Dra. Jéssica Fernandes

Um único site Next.js, personalizado a partir do código retido do template Premium Vendas V4. Hero cinematográfico, narrativa editorial, animações, cinco registros reais com ampliação e comparação, menu mobile e favicon JF.

## Executar

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

## Validar e compilar

```sh
npm run typecheck
npm run build
npm start
```

## Importar na Vercel

Importe este repositório no painel da Vercel. Selecione **Next.js** e mantenha o diretório raiz `./`. Instalação: `npm ci`. Build: `npm run build`. Diretório de saída: padrão do Next.js. Não são necessárias variáveis de ambiente. Nenhum projeto Sites foi criado.

## Conteúdo e identidade

Dados, links e tokens: `data/site.ts`. Estilos específicos: `app/jessica.css`. O restante dos componentes, composição e animações deriva do template V4.

Paleta escolhida pelo solicitante: café, caramelo e marfim. Café profundo `#211813`, café `#30221C`, café médio `#493328`, caramelo `#A77B59`, caramelo claro `#D6B28C`, areia `#E8D9C8`, marfim `#F5EFE6`, marfim claro `#FCF8F2` e texto secundário `#756357`. Todas as superfícies e detalhes usam os tokens compartilhados; o favicon repete as cores principais.

WhatsApp: +55 19 99875-5726. Instagram: @jessicafernandes. Campinas, SP, CRF-SP 101434 e as áreas mencionadas foram transcritos do perfil anexado. Não foram adicionadas formações, depoimentos, endereço completo ou números de experiência.

Os nove arquivos fotográficos recebidos foram convertidos para WebP sem perda, nas dimensões originais. Não houve retoque de rosto, pele ou resultados. Os cinco resultados são comparações lado a lado, mantidas integralmente; o modo de comparação usa as duas partes de cada original, com controle de deslizamento.

A imagem OG fornecida pelo solicitante está em `public/images/og-jessica.jpg`, otimizada em JPEG de 1200 × 630 px, sem cortes na composição. Os metadados Open Graph e Twitter usam esse arquivo. Na Vercel, a URL absoluta é composta automaticamente com `VERCEL_PROJECT_PRODUCTION_URL`; para domínio próprio, também é possível preencher `site.seo.url`. A linha superior de especialidade/localização do hero fica oculta no mobile para deixar o rosto livre.

O favicon fica em `app/icon.svg`. As fontes são locais, sem requisições a serviços externos. Os únicos links externos de contato são WhatsApp e Instagram.
