/**
 * Dados da seção "Perguntas frequentes" (fase: prova), entre aplicações e diferenciais.
 *
 * VARIANTE LOCAL — Print Master, pedido de 05/11/2026 (docs/BRIEFING.md): seção nova, sem par na
 * biblioteca. As respostas só repetem fatos que a página já afirma (tecnologias, materiais das
 * aplicações, etapas do atendimento, distribuidor autorizado): sem preço, prazo ou área atendida.
 */
export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'Dúvidas sobre codificação industrial',
  text: 'O que as indústrias mais perguntam antes de escolher o equipamento.',
  items: [
    {
      id: 'tecnologia',
      question: 'Qual tecnologia de codificação é a ideal para a minha linha?',
      answer:
        'Depende do material, da embalagem e da velocidade da linha. O jato de tinta contínuo atende linhas rápidas e superfícies variadas, a transferência térmica é indicada para filmes flexíveis e rótulos, e o Print & Apply imprime e aplica etiquetas em caixas e paletes. Nossa equipe avalia a sua linha e indica a melhor opção.',
    },
    {
      id: 'informacoes',
      question: 'Que informações é possível gravar na embalagem?',
      answer:
        'Data de validade, lote, data de fabricação e outros códigos de rastreabilidade, em diversas posições e materiais, com marcação nítida e de alta definição.',
    },
    {
      id: 'materiais',
      question: 'Em quais materiais os equipamentos codificam?',
      answer:
        'Vidro, filmes flexíveis, papel cartão, papelão ondulado, cabos e fios, garrafas de plástico, latas e tampas de metal, peças industriais e plásticos extrudados, entre outros.',
    },
    {
      id: 'instalacao',
      question: 'A Print Master faz a instalação do equipamento?',
      answer:
        'Sim. Entregamos o equipamento e o integramos à sua linha de produção, depois de entender o produto, a embalagem e a velocidade da linha.',
    },
    {
      id: 'suporte',
      question: 'Vocês oferecem suporte depois da instalação?',
      answer:
        'Sim. A equipe técnica da Print Master acompanha a sua operação depois da instalação, com suporte da escolha do equipamento ao pós-venda.',
    },
    {
      id: 'originais',
      question: 'Os equipamentos são Markem-Imaje originais?',
      answer:
        'Sim. A Print Master é distribuidor autorizado Markem-Imaje e trabalha com a linha de codificação da marca.',
    },
    {
      id: 'cotacao',
      question: 'Como solicito uma cotação?',
      answer:
        'Preencha o formulário desta página ou chame a nossa equipe no WhatsApp. Conte o produto, a embalagem e a velocidade da linha para indicarmos o equipamento certo.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly FaqItem[]
}
