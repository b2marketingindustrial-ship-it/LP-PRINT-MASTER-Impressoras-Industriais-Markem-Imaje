/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'

import heroBg from '@assets/heroBg.png'
import heroMarca from '@assets/heroMarca.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Mockup de abertura (26/10/2026): a tagline é só a categoria; a marca está no H1. */
  /** Pedido do usuário (27/10/2026): "codificadoras" no lugar de "impressoras", aqui e no H1. */
  tagline: 'Codificadoras industriais',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  /** Selo de distribuidor: decisão do usuário no mockup de abertura (26/10/2026). */
  eyebrow: 'Print Master | Distribuidor autorizado',
  /**
   * Pedido do usuário (27/10/2026): o H1 diz "Codificadoras", e não "Impressoras" como em
   * `site.product` (que segue no title, na description e no JSON-LD).
   */
  title: 'Codificadoras industriais Markem-Imaje',
  /** Trecho do H1 que vai para a última linha, em menta (mockup de 26/10/2026). */
  highlight: 'Markem-Imaje',
  /** Texto enviado pelo usuário em 27/10/2026, no lugar do de codificação e rastreabilidade. */
  text: 'Grava data de validade, lote, fabricação e outros códigos, em diversas posições e materiais com marcações nítidas e de alta definição.',
  banner: {
    src: heroBg,
    alt: 'Impressoras jato de tinta Markem-Imaje 9410 e 9750 lado a lado sobre fundo verde-escuro',
  },
  /** Selo branco com o logo da marca, acima dos equipamentos. */
  badge: { src: heroMarca, alt: 'Markem-Imaje' },
  /** Link que leva à vitrine, no lugar do segundo botão (mockup de 26/10/2026). */
  link: 'Conheça os equipamentos',
  points: [
    { icon: 'barcode', line1: 'Precisão na', line2: 'codificação' },
    { icon: 'gear', line1: 'Alta', line2: 'performance' },
    { icon: 'users', line1: 'Suporte', line2: 'especializado' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  banner: Photo
  badge: Photo
  link: string
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  /** Mockup da cotação (27/10/2026). */
  eyebrow: 'Atendimento Print Master',
  /** Pedido de 05/11/2026: sem "impressoras" no título da cotação. */
  title: 'Fale com quem entende de codificação industrial.',
  /** Trecho final do H2, em menta. */
  highlight: 'codificação industrial.',
  text: 'Nossa equipe ajuda a escolher o equipamento certo para a sua linha e sua embalagem. Preencha o formulário ou fale diretamente conosco pelo WhatsApp.',
  /** Convite acima do espaço do botão de WhatsApp (o botão vem do plugin). */
  whatsappPrompt: 'Prefere conversar com a nossa equipe?',
  trust: [
    { icon: 'zap', label: 'Tecnologia de ponta' },
    { icon: 'shield', label: 'Conformidade regulatória' },
    { icon: 'wrench', label: 'Suporte da escolha ao pós-venda' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação.',
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  whatsappPrompt: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
