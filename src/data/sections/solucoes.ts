/**
 * Dados da seção "Soluções" (fase: oferta), entre o hero e a vitrine.
 *
 * VARIANTE LOCAL — Print Master, pedido de 05/11/2026 (docs/BRIEFING.md): textos enviados pelo
 * usuário, da página atual do cliente. Seção nova, sem par na biblioteca do starter.
 * "Impressoras a laser" aparece só aqui: a vitrine ainda não tem modelo laser.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

// Fotos de produto da própria LP (05/11/2026). O laser veio do usuário em 06/11/2026, recortado
// num quadro 4:3 como as fotos da vitrine; segue fora da vitrine.
import fotoJato from '@assets/vitrine/produto-4.png'
import fotoLaser from '@assets/solucoes/marcacao-laser.png'
import fotoEtiqueta from '@assets/vitrine/produto-10.png'
import fotoTermica from '@assets/vitrine/produto-8.png'

export interface Solution {
  id: string
  icon: IconName
  title: string
  description: string
  photo: Photo | null
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
      title: 'Jato de tinta',
      description: 'Precisão inigualável em altas velocidades para uma ampla gama de materiais.',
      photo: { src: fotoJato, alt: 'Codificador jato de tinta Markem-Imaje 9410' },
    },
    {
      id: 'laser',
      icon: 'crosshair',
      title: 'Marcação a laser',
      description: 'Solução de marcação permanente e de alta resolução para garantir durabilidade.',
      photo: {
        src: fotoLaser,
        alt: 'Marcador a laser Markem-Imaje SmartLase montado em coluna, com tela de controle',
      },
    },
    {
      id: 'etiquetagem',
      icon: 'tag',
      title: 'Etiquetagem automática',
      description:
        'Perfeição no posicionamento e aplicação de etiquetas em caixas e produtos de todos os tamanhos.',
      photo: { src: fotoEtiqueta, alt: 'Aplicador de etiquetas Markem-Imaje 2200' },
    },
    {
      id: 'termica',
      icon: 'flame',
      title: 'Codificação térmica',
      description: 'Ideal para filmes flexíveis, garantindo qualidade superior em codificação.',
      photo: { src: fotoTermica, alt: 'Codificador térmico SmartDate X45' },
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
