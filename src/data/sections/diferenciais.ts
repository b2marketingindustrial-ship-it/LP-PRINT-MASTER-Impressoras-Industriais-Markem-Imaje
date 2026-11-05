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
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Precisão para', 'sua linha de produção.'],
  /** Mockup de 27/10/2026: texto curto, em duas linhas no desktop. */
  text: 'Soluções de marcação e rastreabilidade Markem-Imaje, com codificação precisa e suporte especializado para sua indústria.',
  /** Cena do bloco inteiro (mockup de 27/10/2026): os equipamentos já estão na foto. */
  scene: {
    src: cenario,
    alt: 'Impressoras Markem-Imaje 9410, Cimpak e SmartDate X45 diante de uma linha de envase',
  },
  reasons: [
    {
      icon: 'cpu',
      title: 'Tecnologia de ponta',
      description: 'Sistemas modernos, com alta performance e confiabilidade.',
    },
    {
      icon: 'shield',
      title: 'Conformidade regulatória',
      description: 'Produtos que atendem às normas locais e internacionais.',
    },
    {
      icon: 'users',
      title: 'Suporte especializado',
      description: 'Apoio técnico da escolha do equipamento ao pós-venda.',
    },
    {
      icon: 'leaf',
      title: 'Sustentabilidade',
      description: 'Menor consumo de energia e de materiais na operação.',
    },
    {
      icon: 'gear',
      title: 'Codificação confiável',
      description: 'Equipamentos de alta performance para sua linha de produção.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
