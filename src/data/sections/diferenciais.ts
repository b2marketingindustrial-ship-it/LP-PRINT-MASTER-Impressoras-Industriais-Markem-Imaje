/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade sobre a cena (variante local, sem a
 * pessoa recortada), e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /**
   * Pedido de 05/11/2026: foco institucional, como na LP de locação. "Desde 2003" vem da LP de
   * locação no ar (mesmo cliente); a área atendida segue não confirmada — só a sede em Goiânia.
   * Cada item é uma linha do H2 (quebra forçada).
   */
  titleLines: ['Duas décadas de', 'soluções em impressão.'],
  text: 'A Print Master une a tecnologia Markem-Imaje, suporte técnico e atendimento próximo para indústrias que precisam codificar com precisão, da escolha do equipamento ao pós-venda.',
  /** Cena do bloco inteiro (mockup de 27/10/2026): os equipamentos já estão na foto. */
  scene: {
    src: cenario,
    alt: 'Impressoras Markem-Imaje 9410, Cimpak e SmartDate X45 diante de uma linha de envase',
  },
  reasons: [
    {
      icon: 'badge-check',
      title: 'Desde 2003',
      description: 'Mais de duas décadas em soluções de impressão para empresas.',
    },
    {
      icon: 'shield',
      title: 'Distribuidor autorizado',
      description: 'Revenda autorizada da linha de codificação Markem-Imaje.',
    },
    {
      icon: 'building',
      title: 'Escritório e indústria',
      description: 'Experiência em dois segmentos, com solução para cada rotina.',
    },
    {
      icon: 'map-pin',
      title: 'Sede em Goiânia',
      description: 'Estrutura e equipe técnica próprias em Goiânia/GO.',
    },
    {
      icon: 'users',
      title: 'Suporte completo',
      description: 'Suporte técnico em todas as etapas, da indicação à assistência.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
