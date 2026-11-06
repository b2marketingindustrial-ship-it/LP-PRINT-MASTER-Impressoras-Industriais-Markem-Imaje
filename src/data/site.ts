/**
 * Dados globais da LP. Tudo que aparece em mais de um lugar (head, header, footer,
 * JSON-LD) vem daqui. Transcrito da ficha de execução (`docs/FICHA-LP.md`): campos `site` e `campanha`.
 */
export const site = {
  /** Nome completo da empresa (entrada 1). */
  brand: 'Print Master',
  /** Nome curto usado em frases como "Por que a …" (entrada 2). */
  brandShort: 'Print Master',
  /** Produto principal, no plural (entrada 3). Vai na tagline do header e no H1. */
  product: 'Impressoras industriais Markem-Imaje',
  /** Contexto de uso (entrada 4). Completa o H1 e o title. */
  context: 'linhas de produção',
  /** URL absoluta da página no ar (entrada 10). Usada em canonical e og:url. */
  url: 'https://printmaster.net.br/lp-impressoras-industriais-markem-imaje/',
  /** Endereço completo com CEP (entrada 9). Footer e JSON-LD. */
  address: 'Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350',
  /** Versão do padrão B2 que esta LP segue. Não editar manualmente; vem do template. */
  standardVersion: '2.8.0',
} as const

/**
 * Shortcodes do plugin de atendimento do WordPress (entrada 11 da entrevista).
 *
 * Ficam aqui, e não na página, porque `src/pages/index.astro` é gerado por
 * `npm run compose` e seria sobrescrito a cada recomposição.
 */
export const shortcodes = {
  /** Chat na coluna de 300px do hero. */
  chat: '[atendimento_chat id="default"]',
  /** Formulário da seção de cotação. */
  form: '[atendimento_form id="default-form"]',
} as const

/**
 * Título da aba. Pedido de 06/11/2026: a palavra-chave principal passou a "codificadora
 * industrial" (a do H1); "impressoras" fica no title para a busca orgânica. 67 caracteres.
 */
export const title = `Impressoras e codificadoras industriais Markem-Imaje | ${site.brand}`

/** Meta description (≤ 160 caracteres). Ajuste o texto, mantendo marcas e o apoio técnico. */
export const description =
  'Impressoras industriais Markem-Imaje para codificação e rastreabilidade: jato de tinta, transferência térmica, Print & Apply e laser, com suporte técnico.'

/**
 * Campanha que leva tráfego para esta LP (entrada 15). Quem clica digitou a
 * palavra-chave antes: se o H1 não a repete, a pessoa volta para o Google.
 */
export const campaign = {
  /**
   * Palavra-chave principal, como está na campanha. O `check:lp` falha se ela não
   * estiver no H1 e no title — aceita maiúscula, acento, plural e outra ordem.
   * `null` quando a LP não tem campanha definida; vazio é entrada não preenchida.
   */
  mainKeyword: 'codificadora industrial',
  /**
   * Negativas **de oferta** da campanha — o que a empresa não vende. O `check:lp`
   * avisa quando o texto da página usa uma delas. As de intenção (emprego, curso)
   * ficam só no BRIEFING.md.
   */
  negatives: [],
  /**
   * Claims que o briefing proíbe ("autorizado", "distribuidor", "até 42%"), em todas
   * as formas em que podem aparecer. O `check:lp` falha se a página usar qualquer um.
   */
  forbidden: [],
} as const satisfies {
  mainKeyword: string | null
  negatives: readonly string[]
  forbidden: readonly string[]
}

/** WhatsApp comercial (entrada 12). Número no formato internacional, só dígitos (ex.: 5511999999999). Vazio desativa o botão flutuante. */
export const whatsapp = ''
