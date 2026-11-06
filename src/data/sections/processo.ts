/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * VARIANTE LOCAL — Print Master, pedido de 05/11/2026 (docs/BRIEFING.md). Refeita no mesmo dia
 * ("sem conter em uma caixa"): faixa verde em largura total, foto sangrando à direita e as etapas
 * numa linha do tempo, sem cards; os destaques (`highlights`) saíram da página. Antes: o banner com o texto
 * embutido virou um bloco no estilo da referência SEIVE — texto em HTML sobre o verde profundo,
 * a cena do banner à direita, destaques sem quantidades, CTA com o selo Markem-Imaje e as 4 etapas da ficha
 * (`docs/FICHA-LP.md`) em cards sobrepostos à base do bloco.
 *
 * As cenas são recortes das artes enviadas pelo usuário em 27/10/2026, sem a parte do texto.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import cenaDesktop from '@assets/processo/cena-desktop.jpg'
import cenaMobile from '@assets/processo/cena-mobile.jpg'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
}

const sceneAlt =
  'Técnico da Print Master ao lado de aplicadores de etiquetas Markem-Imaje numa linha de caixas'

export const process = {
  eyebrow: 'Como funciona',
  title: 'Codificação e rastreabilidade com mais precisão.',
  /** O H2 em duas partes: a segunda em menta, como na arte do banner. */
  titleLead: 'Codificação e rastreabilidade',
  titleHighlight: 'com mais precisão.',
  text:
    'Tecnologia Markem-Imaje e suporte especializado da Print Master para a sua indústria. ' +
    'Acompanhamos a sua linha em cada etapa, da escolha da tecnologia à assistência depois da instalação.',
  /** Cena à direita no desktop. */
  scene: { src: cenaDesktop, alt: sceneAlt },
  /** Recorte da arte vertical, abaixo do texto no celular. */
  sceneMobile: { src: cenaMobile, alt: sceneAlt },
  steps: [
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico da linha',
      description: 'Entendemos o produto, o material e a velocidade da sua linha de produção.',
    },
    {
      id: 'tecnologia',
      icon: 'sliders',
      title: 'Escolha da tecnologia',
      description:
        'Indicamos jato de tinta, transferência térmica, Print & Apply ou laser para o seu caso.',
    },
    {
      id: 'instalacao',
      icon: 'wrench',
      title: 'Instalação',
      description: 'Entregamos e integramos o equipamento à sua linha de produção.',
    },
    {
      id: 'suporte',
      icon: 'users',
      title: 'Suporte e pós-venda',
      description: 'Equipe técnica preparada para apoiar a sua operação depois da instalação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLead: string
  titleHighlight: string
  text: string
  scene: Photo
  sceneMobile: Photo
  steps: readonly [ProcessStep, ProcessStep, ProcessStep, ProcessStep]
}
