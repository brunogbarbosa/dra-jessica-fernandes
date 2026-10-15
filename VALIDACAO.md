# Validação da entrega

Verificação em navegador Chromium/Edge, usando o build de produção local.

- Hero e retratos conferidos visualmente em 1440 × 900, 1920 × 1080 e 390 × 844.
- Nav com fundo totalmente transparente, sem gradiente, borda, sombra ou backdrop-filter. Foto em y = 0, camada 0; nav na camada 30.
- Cores compartilhadas em `data/site.ts`; nenhuma cor hexadecimal local herdada nos estilos ou componentes.
- Sem rolagem horizontal em 320, 360, 390, 430, 768, 1024, 1440 e 1920 px.
- Menu mobile: abrir, fechar, selecionar âncora, Escape e retorno do foco.
- Galeria: cinco registros originais completos; cinco comparações lado a lado, controle deslizante, próximo/anterior, teclado, fechamento e retorno do foco.
- WhatsApp: todos os botões apontam para `5519998755726`. Instagram: todos os links apontam para `jessicafernandes`.
- Favicon personalizado JF: resposta HTTP 200 e referência correta no HTML.
- Imagem OG fornecida pelo solicitante otimizada em JPEG de 1200 × 630 px e configurada nos metadados Open Graph e Twitter.
- Linha superior “Harmonização facial • Campinas, SP” oculta no hero mobile e preservada no desktop.
- Preferência por movimento reduzido respeitada.
- Sem erros de JavaScript ou respostas HTTP de erro durante a navegação verificada.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.
- `npm audit --omit=dev`: zero vulnerabilidades na entrega.

Os contatos foram conferidos pelos endereços dos links; nenhuma mensagem foi enviada. As fotografias foram convertidas para WebP sem perda, sem retoque e sem alteração das dimensões originais.
