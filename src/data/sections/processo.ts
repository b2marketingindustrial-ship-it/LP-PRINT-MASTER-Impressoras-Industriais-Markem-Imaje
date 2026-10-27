/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * VARIANTE LOCAL — Print Master, pedido de 27/10/2026 (docs/BRIEFING.md): no lugar do painel
 * com as 4 etapas entra o banner enviado pelo usuário, clicável (CTA `processo-cta`). O texto
 * do banner está na imagem; `title` e `alt` repetem esse texto para leitores de tela e busca.
 * As etapas continuam registradas na ficha (`docs/FICHA-LP.md`) para quando o banner sair.
 */
import type { Photo } from '@data/types'

import banner from '@assets/processo/banner-desktop.jpg'
import bannerMobile from '@assets/processo/banner-mobile.jpg'

const alt =
  'Print Master e Markem-Imaje: impressoras industriais para codificação e rastreabilidade com ' +
  'mais precisão. Tecnologia Markem-Imaje e suporte especializado da Print Master para sua ' +
  'indústria.'

export const process = {
  /** H2 só para leitores de tela: o título visível está no banner. */
  title: 'Impressoras industriais para codificação e rastreabilidade com mais precisão.',
  /** Banner inteiro (desktop e tablet). */
  banner: { src: banner, alt },
  /** Arte vertical (941×1672) enviada pelo usuário em 27/10/2026 para o celular. */
  bannerMobile: { src: bannerMobile, alt },
} as const satisfies {
  title: string
  banner: Photo
  bannerMobile: Photo
}
