/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * VARIANTE LOCAL — Print Master, mockup de 27/10/2026 (docs/BRIEFING.md): H2 numa linha só (pedido de 05/11/2026),
 * cards com foto 6:5 e corpo verde-escuro, sem faixa de ajuda (removida em 05/11/2026). O card inteiro é o CTA.
 *
 * Pedido do usuário (05/11/2026): as 11 aplicações, com os textos enviados por ele, num
 * carrossel infinito. 10 têm foto (4 do mockup e 6 da galeria da página atual do cliente);
 * garrafas de plástico segue com `photo: null` e o ícone num palco verde — a galeria não tem foto
 * dela (a de garrafa é de vidro).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'
// Fotos da galeria da página atual do cliente (05/11/2026), recortadas em 6:5.
import appVidro from '@assets/aplicacoes/aplicacao-vidro.jpg'
import appFilmes from '@assets/aplicacoes/aplicacao-filmes-flexiveis.jpg'
import appLatas from '@assets/aplicacoes/aplicacao-latas-metal.jpg'
import appPecas from '@assets/aplicacoes/aplicacao-pecas-industriais.jpg'
import appExtrudados from '@assets/aplicacoes/aplicacao-plasticos-extrudados.jpg'
import appTampas from '@assets/aplicacoes/aplicacao-tampas.jpg'

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
  title: 'Codificação para cada material e superfície.',
  text: 'Soluções para identificar produtos, caixas e diferentes superfícies da sua produção.',
  /** Intercaladas com e sem foto, para a esteira não juntar os palcos de ícone. */
  items: [
    {
      id: 'papel-cartao',
      label: 'Papel cartão',
      description:
        'Tintas de secagem rápida com resistência a manchas para impressão em papel cartão.',
      icon: 'box',
      photo: { src: app1, alt: 'Data e hora impressas em caixa de papel cartão' },
    },
    {
      id: 'vidro',
      label: 'Vidro',
      description:
        'Códigos 100% legíveis que garantem a rastreabilidade do produto, com tintas especiais.',
      icon: 'glass',
      photo: { src: appVidro, alt: 'Código impresso em garrafa de vidro com bebida' },
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
      description: 'Diferentes tecnologias de impressão para melhor atender às suas necessidades.',
      icon: 'layers',
      photo: { src: appFilmes, alt: 'Código impresso em sachês de filme flexível' },
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
      photo: {
        src: appLatas,
        alt: 'Texto de esterilização impresso na tampa de uma lata de metal',
      },
    },
    {
      id: 'pecas-industriais',
      label: 'Peças industriais de metal e plástico',
      description:
        'Garanta rastreabilidade e conformidade regulatória ao codificar suas peças industriais de metal e plástico.',
      icon: 'gear',
      photo: { src: appPecas, alt: 'Símbolos e QR code marcados no cabo de uma peça industrial' },
    },
    {
      id: 'plasticos-extrudados',
      label: 'Plásticos extrudados',
      description:
        'Códigos 100% permanentes e legíveis de alto contraste, mesmo nos substratos de plásticos mais difíceis.',
      icon: 'ruler',
      photo: { src: appExtrudados, alt: 'Texto impresso em tubos de plástico extrudado' },
    },
    {
      id: 'tampas',
      label: 'Tampas',
      description:
        'Impressão em alta resolução e alta velocidade em grandes áreas de superfície e vários campos de impressão.',
      icon: 'disc',
      photo: { src: appTampas, alt: 'Códigos impressos no interior de tampas plásticas' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Application[]
}
