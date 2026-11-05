/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * VARIANTE LOCAL — Print Master, mockup de 27/10/2026 (docs/BRIEFING.md): H2 em duas linhas,
 * cards com foto 8:5 e corpo verde-escuro, e uma faixa de ajuda no fim. O card inteiro é o CTA.
 *
 * Pedido do usuário (05/11/2026): as 11 aplicações, com os textos enviados por ele, num
 * carrossel infinito. Só 4 têm foto (recortadas do mockup); as outras levam `photo: null` e
 * mostram o ícone num palco verde até a foto chegar — a pendência está no BRIEFING.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'

export interface Application {
  id: string
  label: string
  description: string
  /** Ícone do palco quando ainda não há foto. */
  icon: IconName
  photo: Photo | null
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Codificação para cada tipo de embalagem.',
  /** O H2 quebrado em duas linhas, como no mockup. */
  titleLines: ['Codificação para cada', 'tipo de embalagem.'],
  text: 'Soluções para identificar embalagens, produtos e diferentes superfícies da sua produção.',
  help: {
    text: 'Encontre a solução ideal para sua aplicação.',
    cta: 'Fale com um especialista',
  },
  /** Intercaladas com e sem foto, para a esteira não juntar os palcos de ícone. */
  items: [
    {
      id: 'papel-cartao',
      label: 'Embalagens de papel cartão',
      description:
        'Tintas de secagem rápida com resistência a manchas para impressão em papel cartão.',
      icon: 'box',
      photo: { src: app1, alt: 'Data e hora impressas em embalagem de papel cartão' },
    },
    {
      id: 'vidro',
      label: 'Vidro',
      description:
        'Códigos 100% legíveis que garantem a rastreabilidade do produto, com tintas especiais.',
      icon: 'glass',
      photo: null,
    },
    {
      id: 'papelao',
      label: 'Caixa de papelão ondulado',
      description: 'Econômico e conforme as normas: o código certo na caixa certa, sempre.',
      icon: 'box',
      photo: { src: app2, alt: 'Data de produção e lote impressos em caixa de papelão ondulado' },
    },
    {
      id: 'filmes-flexiveis',
      label: 'Filmes flexíveis',
      description: 'Quatro tecnologias de impressão para melhor atender às suas necessidades.',
      icon: 'layers',
      photo: null,
    },
    {
      id: 'cabos-fios',
      label: 'Cabos e fios',
      description:
        'Códigos 100% permanentes e legíveis, mesmo nos mais adversos ambientes de produção e utilização.',
      icon: 'zap',
      photo: { src: app3, alt: 'Marcação impressa na capa de cabos elétricos pretos' },
    },
    {
      id: 'garrafas-plastico',
      label: 'Garrafas de plástico',
      description:
        'Codificação super rápida e a opção de códigos permanentes ou removíveis para garrafas de plástico.',
      icon: 'bottle',
      photo: null,
    },
    {
      id: 'alimentos',
      label: 'Alimentos',
      description:
        'Tintas 100% seguras e comestíveis, em conformidade com normas locais e nacionais.',
      icon: 'utensils',
      photo: { src: app4, alt: 'Queijos embalados com lote e datas impressos' },
    },
    {
      id: 'latas-metal',
      label: 'Latas e tampas de metal',
      description:
        'Códigos permanentes que garantem a segurança e rastreio para as indústrias de alimentos e bebidas.',
      icon: 'cylinder',
      photo: null,
    },
    {
      id: 'pecas-industriais',
      label: 'Peças industriais de metal e plástico',
      description:
        'Garanta rastreabilidade e conformidade regulatória ao codificar suas peças industriais de metal e plástico.',
      icon: 'gear',
      photo: null,
    },
    {
      id: 'plasticos-extrudados',
      label: 'Plásticos extrudados',
      description:
        'Códigos 100% permanentes e legíveis de alto contraste, mesmo nos substratos de plásticos mais difíceis.',
      icon: 'ruler',
      photo: null,
    },
    {
      id: 'tampas',
      label: 'Tampas',
      description:
        'Impressão em alta resolução e alta velocidade em grandes áreas de superfície e vários campos de impressão.',
      icon: 'disc',
      photo: null,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly string[]
  text: string
  help: { text: string; cta: string }
  items: readonly Application[]
}
