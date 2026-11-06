# LP Print Master — Impressoras e codificadoras industriais Markem-Imaje

Landing page de campanha da Print Master (distribuidor Markem-Imaje, Goiânia/GO), no padrão B2 v2.8.0: Astro 7 + Tailwind 4, uma rota, publicada no WordPress pela branch `wp-build`.

- No ar: <https://printmaster.net.br/lp-impressoras-industriais-markem-imaje/>
- Palavra-chave principal da campanha: `codificadora industrial` (H1 e title)
- Decisões, origem de cada texto e desvios do padrão: [`docs/BRIEFING.md`](docs/BRIEFING.md)

## Rodar

```bash
npm install
npm run dev        # http://127.0.0.1:4321 (na VPS: https://4321.code.b2hub.cloud)
```

Abra com `?grid=1` para ver as colunas do hero. Fora do WordPress os shortcodes do chat e do formulário aparecem como espaços vazios; em `npm run dev` o texto do shortcode fica visível.

## Página

Ordem fixa em [`src/pages/index.astro`](src/pages/index.astro) (gerado por `npm run compose`; ao recompor, reaplique as variantes locais marcadas no topo de cada componente):

| Seção                  | Componente                                          | Texto                               |
| ---------------------- | --------------------------------------------------- | ----------------------------------- |
| Cabeçalho              | `src/components/Header.astro`                       | `src/data/content.ts`               |
| Hero (+ chat)          | `src/components/Hero.astro`                         | `src/data/content.ts`               |
| Soluções               | `src/components/sections/Solutions.astro`           | `src/data/sections/solucoes.ts`     |
| Vitrine (12 modelos)   | `src/components/sections/ProductShowcase.astro`     | `src/data/sections/vitrine.ts`      |
| Como funciona          | `src/components/sections/ProcessSteps.astro`        | `src/data/sections/processo.ts`     |
| Aplicações (esteira)   | `src/components/sections/ApplicationsGallery.astro` | `src/data/sections/aplicacoes.ts`   |
| Perguntas frequentes   | `src/components/sections/Faq.astro`                 | `src/data/sections/faq.ts`          |
| Por que a Print Master | `src/components/sections/WhyBrand.astro`            | `src/data/sections/diferenciais.ts` |
| Cotação (+ formulário) | `src/components/QuoteForm.astro`                    | `src/data/content.ts`               |
| Rodapé                 | `src/components/Footer.astro`                       | `src/data/site.ts`                  |

Marca, URL, endereço, title, description, palavra-chave e shortcodes: `src/data/site.ts`. Cores e fonte: `src/styles/global.css` (`@theme`; "navy" é o verde profundo e "orange" o verde de ação). Ícones: `src/data/icons.ts`. Imagens: `src/assets/`.

## CTAs e atendimento

Todo CTA é `<button class="btn-slave-whats" data-cta="secao-elemento">`: o plugin de atendimento do WordPress captura o clique e o `data-cta` identifica a origem no GTM/GA4. O chat (hero) e o formulário (cotação) são os shortcodes de `site.ts`; o aviso de LGPD fica no formulário do plugin. Não há número de WhatsApp na página: os botões "Chamar no WhatsApp" abrem o atendimento do plugin.

## Verificar e publicar

| Comando                                 | Faz                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| `npm run check:lp`                      | regras do padrão (CTAs, palavra-chave no H1 e no title, imagens, quantidades) |
| `npm run check`                         | `astro check` (tipos)                                                         |
| `npm run lint` / `npm run format:check` | ESLint e Prettier                                                             |
| `npm run build`                         | gera `dist/`                                                                  |

Push em `main` → GitHub Actions roda `check:lp`, lint, Prettier, build e Lighthouse (limites em `lighthouserc.json`) → `dist/` vai para a branch órfã `wp-build` → o plugin B2 LP Publisher lê de lá. Se o CI falhar, a página no ar continua na última versão publicada.

`npm run verify` também roda `npm run ficha -- --check`, que precisa da biblioteca do starter em `../Projetos B2/LP-STARTER-B2/sections` e não roda na VPS da B2.
