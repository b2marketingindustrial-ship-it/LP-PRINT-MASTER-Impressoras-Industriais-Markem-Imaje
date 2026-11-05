/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * De 6 a 24 itens com foto e nome. `description` é tudo ou nada: ou todos os
 * itens têm a frase, ou nenhum tem — o componente recusa a mistura no build.
 *
 * `groups` vazio deixa a vitrine em grade. Com grupos, cada um vira uma
 * bloco no topo (nome, frase e contagem) e um selo nos seus cards; os modelos ficam todos numa
 * grade só, sem filtro (pedido do usuário de 05/11/2026).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import produto1 from '@assets/vitrine/produto-1.png'
import produto2 from '@assets/vitrine/produto-2.png'
import produto3 from '@assets/vitrine/produto-3.png'
import produto4 from '@assets/vitrine/produto-4.png'
import produto5 from '@assets/vitrine/produto-5.png'
import produto6 from '@assets/vitrine/produto-6.png'
import produto7 from '@assets/vitrine/produto-7.png'
import produto8 from '@assets/vitrine/produto-8.png'
import produto9 from '@assets/vitrine/produto-9.png'
import produto10 from '@assets/vitrine/produto-10.png'
import produto11 from '@assets/vitrine/produto-11.png'
import produto12 from '@assets/vitrine/produto-12.png'

/** Marca, linha ou família. `logo` é opcional: sem ela, vale o nome. */
export interface ShowcaseGroup {
  id: string
  label: string
  logo: Photo | null
  /** Ícone do bloco da tecnologia (variante local de 05/11/2026). */
  icon: IconName
  /** 1 frase curta sobre a tecnologia, no bloco do topo. */
  description: string
  /** Rótulo curto do selo no card. */
  short: string
}

export interface ShowcaseItem {
  id: string
  /** id de um grupo de `groups`, ou '' quando a vitrine não é agrupada. */
  group: string
  title: string
  /** 1 frase, 50–90 caracteres. '' quando a vitrine é só foto e nome. */
  description: string
  photo: Photo
}

export const showcase = {
  eyebrow: 'Equipamentos',
  /** Pílula acima do H2 (pedido de 05/11/2026). */
  pill: 'Distribuidor autorizado',
  /** Pedido de 05/11/2026: sem "impressora" no título; título e texto em uma linha cada. */
  title: 'Equipamentos Markem-Imaje',
  /** Fim do H2 em verde (05/11/2026). Precisa ser o final exato de `title`. */
  titleHighlight: 'Markem-Imaje',
  text: 'Jato de tinta, transferência térmica e Print & Apply para a sua linha.',
  /** Variante local (mockup de 26/10/2026): marca acima do modelo, rótulo do card e faixa de ajuda. */
  brand: 'Markem-Imaje',
  itemCta: 'Ver equipamento',
  help: {
    /** Cartão de ajuda à direita do H2, como na LP de locação (05/11/2026). */
    text: 'Precisa de ajuda para escolher?',
    cta: 'Fale com um especialista',
  },
  groups: [
    {
      id: 'jato-de-tinta',
      label: 'Jato de tinta contínuo',
      logo: null,
      icon: 'droplet',
      short: 'Jato de tinta',
      description:
        'Datadores CIJ para data, lote e validade direto na embalagem, em linhas rápidas.',
    },
    {
      id: 'transferencia-termica',
      label: 'Transferência térmica',
      logo: null,
      icon: 'flame',
      short: 'Térmica',
      description:
        'Codificadores TTO para filmes flexíveis e rótulos, com textos e códigos nítidos.',
    },
    {
      id: 'print-apply',
      label: 'Print & Apply',
      logo: null,
      icon: 'tag',
      short: 'Print & Apply',
      description: 'Etiquetadoras que imprimem e aplicam a etiqueta em caixas e paletes.',
    },
  ],
  items: [
    {
      id: 'm9018',
      group: 'jato-de-tinta',
      title: 'Markem-Imaje 9018',
      description: '',
      photo: { src: produto1, alt: 'Impressora jato de tinta 9018' },
    },
    {
      id: 'm9450',
      group: 'jato-de-tinta',
      title: 'Markem-Imaje 9450',
      description: '',
      photo: { src: produto2, alt: 'Impressora jato de tinta 9450' },
    },
    {
      id: 'm9750',
      group: 'jato-de-tinta',
      title: 'Markem-Imaje 9750',
      description: '',
      photo: { src: produto3, alt: 'Impressora jato de tinta 9750' },
    },
    {
      id: 'm9410',
      group: 'jato-de-tinta',
      title: 'Markem-Imaje 9410',
      description: '',
      photo: { src: produto4, alt: 'Impressora jato de tinta 9410' },
    },
    {
      id: 'm9330',
      group: 'jato-de-tinta',
      title: 'Markem-Imaje 9330',
      description: '',
      photo: { src: produto5, alt: 'Impressora jato de tinta 9330' },
    },
    {
      id: 'smartdate-oem',
      group: 'transferencia-termica',
      title: 'SmartDate OEM Connect',
      description: '',
      photo: { src: produto6, alt: 'Codificador térmico SmartDate OEM Connect' },
    },
    {
      id: 'smartdate-x30',
      group: 'transferencia-termica',
      title: 'SmartDate X30',
      description: '',
      photo: { src: produto7, alt: 'Codificador térmico SmartDate X30' },
    },
    {
      id: 'smartdate-x45',
      group: 'transferencia-termica',
      title: 'SmartDate X45',
      description: '',
      photo: { src: produto8, alt: 'Codificador térmico SmartDate X45' },
    },
    {
      id: 'smartdate-x65',
      group: 'transferencia-termica',
      title: 'SmartDate X65',
      description: '',
      photo: { src: produto9, alt: 'Codificador térmico SmartDate X65' },
    },
    {
      id: 'pa2200',
      group: 'print-apply',
      title: 'Markem-Imaje 2200',
      description: '',
      photo: { src: produto10, alt: 'Aplicador de etiquetas 2200' },
    },
    {
      id: 'pa2200-pallet',
      group: 'print-apply',
      title: 'Markem-Imaje 2200 Pallet',
      description: '',
      photo: { src: produto11, alt: 'Aplicador de etiquetas para paletes' },
    },
    {
      id: 'cimpak',
      group: 'print-apply',
      title: 'Markem-Imaje Cimpak',
      description: '',
      photo: { src: produto12, alt: 'Etiquetadora automática Cimpak' },
    },
  ],
} as const satisfies {
  eyebrow: string
  pill: string
  title: string
  titleHighlight: string
  text: string
  brand: string
  itemCta: string
  help: { text: string; cta: string }
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
