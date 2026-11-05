/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * VARIANTE LOCAL — Print Master, pedido de 05/11/2026 (docs/BRIEFING.md): o banner com o texto
 * embutido virou um bloco no estilo da referência SEIVE — texto em HTML sobre o verde profundo,
 * a cena do banner à direita, três destaques, CTA com o selo Markem-Imaje e as 4 etapas da ficha
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

/** Destaque da faixa de números. Só fatos da própria página: sem números sem fonte. */
export interface ProcessHighlight {
  value: string
  label: string
}

const sceneAlt =
  'Técnico da Print Master ao lado de aplicadores de etiquetas Markem-Imaje numa linha de caixas'

export const process = {
  eyebrow: 'Como funciona',
  title: 'Impressoras industriais para codificação e rastreabilidade com mais precisão.',
  /** O H2 em duas partes: a segunda em menta, como na arte do banner. */
  titleLead: 'Impressoras industriais para codificação e rastreabilidade',
  titleHighlight: 'com mais precisão.',
  text:
    'Tecnologia Markem-Imaje e suporte especializado da Print Master para sua indústria. ' +
    'Acompanhamos a sua linha em cada etapa, da escolha da tecnologia à assistência depois da instalação.',
  highlights: [
    { value: '3 tecnologias', label: 'jato de tinta, térmica e Print & Apply' },
    { value: '12 modelos', label: 'Markem-Imaje para a sua linha' },
    { value: 'Ponta a ponta', label: 'da escolha ao pós-venda' },
  ],
  /** Cena à direita no desktop. */
  scene: { src: cenaDesktop, alt: sceneAlt },
  /** Recorte da arte vertical, abaixo do texto no celular. */
  sceneMobile: { src: cenaMobile, alt: sceneAlt },
  steps: [
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico da linha',
      description: 'Entendemos o produto, a embalagem e a velocidade da sua linha de produção.',
    },
    {
      id: 'tecnologia',
      icon: 'sliders',
      title: 'Escolha da tecnologia',
      description:
        'Indicamos jato de tinta, transferência térmica ou Print & Apply para o seu caso.',
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
  highlights: readonly [ProcessHighlight, ProcessHighlight, ProcessHighlight]
  scene: Photo
  sceneMobile: Photo
  steps: readonly [ProcessStep, ProcessStep, ProcessStep, ProcessStep]
}
