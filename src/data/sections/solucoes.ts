/**
 * Dados da seção "Soluções" (fase: oferta), entre o hero e a vitrine.
 *
 * VARIANTE LOCAL — Print Master, pedido de 05/11/2026 (docs/BRIEFING.md): textos enviados pelo
 * usuário, da página atual do cliente. Seção nova, sem par na biblioteca do starter.
 * "Impressoras a laser" aparece só aqui: a vitrine ainda não tem modelo laser.
 */
import type { IconName } from '@data/icons'

export interface Solution {
  id: string
  icon: IconName
  title: string
  description: string
}

export const solutions = {
  eyebrow: 'Soluções Print Master',
  title: 'Aumente a eficiência e reduza erros com as nossas soluções!',
  /** Trecho do H2 em verde. Precisa estar dentro de `title`. */
  highlight: 'reduza erros',
  /** Três linhas no desktop (pedido de 05/11/2026): versão enxuta do texto do cliente. */
  text: 'Na Print Master, você encontra as soluções de marcação e rastreabilidade Markem-Imaje, líderes globais em qualidade e desempenho, com codificação precisa e legível para alimentos, bebidas, farmacêuticos e eletrônicos.',
  listTitle: 'Nossas soluções em destaque',
  items: [
    {
      id: 'jato-de-tinta',
      icon: 'droplet',
      title: 'Impressoras a jato de tinta',
      description: 'Precisão inigualável em altas velocidades para uma ampla gama de materiais.',
    },
    {
      id: 'laser',
      icon: 'crosshair',
      title: 'Impressoras a laser',
      description: 'Solução de marcação permanente e de alta resolução para garantir durabilidade.',
    },
    {
      id: 'etiquetagem',
      icon: 'tag',
      title: 'Etiquetagem automática',
      description:
        'Perfeição no posicionamento e aplicação de etiquetas em caixas e produtos de todos os tamanhos.',
    },
    {
      id: 'termica',
      icon: 'flame',
      title: 'Codificação térmica',
      description: 'Ideal para filmes flexíveis, garantindo qualidade superior em codificação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  listTitle: string
  items: readonly [Solution, Solution, Solution, Solution]
}
