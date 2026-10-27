```yaml
ficha: 1
padrao: 2.8.0
cliente: Print Master
produto: Impressoras industriais Markem-Imaje
data: 2026-10-26

site:
  brand: Print Master
  brandShort: Print Master
  product: Impressoras industriais Markem-Imaje
  context: linhas de produção
  url: https://printmaster.net.br/lp-impressoras-industriais-markem-imaje/
  address: Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: impressora industrial
  negatives: []
  forbidden: []
  areaAtendida: não confirmada — o endereço em Goiânia/GO não define a área comercial atendida
  onde: nenhum
  familias:
    - nome: produto-categoria
      termos:
        [
          impressora industrial,
          datador,
          codificadora industrial,
          impressora etiquetadora,
          impressora para embalagem,
          datadeira,
        ]
      responde: vitrine
    - nome: tecnologia
      termos:
        [
          jato de tinta contínuo,
          impressora CIJ,
          datador inkjet,
          impressão a laser,
          impressora TTO,
          termo transferência,
          Print & Apply,
        ]
      responde: vitrine
    - nome: aplicacao-material
      termos:
        [impressora para metal, alimentos, garrafas, cabos, fios, lata, papelão, ovos, superfícies]
      responde: aplicacoes
    - nome: marca
      termos: [Markem-Imaje]
      responde: vitrine
    - nome: modelo
      termos: [Markem 9450, SmartDate X45]
      responde: vitrine

publico: [Produção, Engenharia, Qualidade, Compras]

marcas:
  usarLogos: false
  nomes: [Markem-Imaje]
  autorizacao: logo da Markem-Imaje no selo do hero e "Distribuidor autorizado" no eyebrow — decisão do usuário no mockup de abertura de 26/10/2026, o mesmo uso da página atual do cliente

tokens:
  padrao: false
  # verdes da marca aprovados pelo cliente na LP de locação da Print Master (26/10/2026); fonte Manrope mantida
  cores:
    primaria: '#064337'
    acao: '#027653'
    menta: '#61e5a9'

conteudo:
  title: Impressoras industriais Markem-Imaje para codificação | Print Master
  description: 'Impressoras industriais Markem-Imaje para codificação e rastreabilidade: jato de tinta, transferência térmica e Print & Apply, com suporte especializado.'
  hero:
    eyebrow: 'Print Master | Distribuidor autorizado'
    # pedido do usuário (27/10/2026): "codificadoras" no H1 e na tagline do header; o title e a
    # description seguem com "impressoras", a palavra-chave da campanha
    title: Codificadoras industriais Markem-Imaje
    # texto enviado pelo usuário em 27/10/2026; pontos do mockup de abertura aprovado em 26/10/2026
    text: Grava data de validade, lote, fabricação e outros códigos, em diversas posições e materiais com marcações nítidas e de alta definição.
    points:
      - icon: barcode
        line1: Precisão na
        line2: codificação
      - icon: gear
        line1: Alta
        line2: performance
      - icon: users
        line1: Suporte
        line2: especializado
  quote:
    # mockup da cotação de 27/10/2026
    eyebrow: Atendimento Print Master
    title: Fale com quem entende de impressoras industriais.
    text: Nossa equipe ajuda a escolher o equipamento certo para a sua linha e sua embalagem. Preencha o formulário ou fale diretamente conosco pelo WhatsApp.
    trust:
      - icon: zap
        label: Tecnologia de ponta
      - icon: shield
        label: Conformidade regulatória
      - icon: wrench
        label: Suporte da escolha ao pós-venda
    lgpd: Seus dados serão usados apenas para responder à sua solicitação.

blocos:
  linhas:
    veredicto: insuficiente
    falta: as 4 linhas (jato de tinta, laser, etiquetagem, codificação térmica) não têm chip, características nem foto; a linha laser não tem nenhum modelo no material

  especificacoes:
    veredicto: insuficiente
    falta: faltam especificações comparáveis por modelo (3 a 5 colunas, 4 a 10 linhas) e o modelo mais vendido

  vitrine:
    veredicto: completo
    responde: [produto-categoria, tecnologia, marca, modelo]
    papeis: [Produção, Engenharia, Compras]
    eyebrow: Equipamentos
    title: Impressoras industriais por tecnologia
    # variante local do mockup de 26/10/2026: abas por tecnologia, cards com painel verde-escuro e faixa de ajuda
    text: Datadores, codificadoras e etiquetadoras Markem-Imaje para as necessidades da sua produção.
    groups:
      - id: jato-de-tinta
        label: Jato de tinta contínuo
      - id: transferencia-termica
        label: Transferência térmica
      - id: print-apply
        label: Print & Apply
    items:
      - id: m9018
        group: jato-de-tinta
        title: Markem-Imaje 9018
        description: ''
        photo: Impressora jato de tinta 9018
      - id: m9450
        group: jato-de-tinta
        title: Markem-Imaje 9450
        description: ''
        photo: Impressora jato de tinta 9450
      - id: m9750
        group: jato-de-tinta
        title: Markem-Imaje 9750
        description: ''
        photo: Impressora jato de tinta 9750
      - id: m9410
        group: jato-de-tinta
        title: Markem-Imaje 9410
        description: ''
        photo: Impressora jato de tinta 9410
      - id: m9330
        group: jato-de-tinta
        title: Markem-Imaje 9330
        description: ''
        photo: Impressora jato de tinta 9330
      - id: smartdate-oem
        group: transferencia-termica
        title: SmartDate OEM Connect
        description: ''
        photo: Codificador térmico SmartDate OEM Connect
      - id: smartdate-x30
        group: transferencia-termica
        title: SmartDate X30
        description: ''
        photo: Codificador térmico SmartDate X30
      - id: smartdate-x45
        group: transferencia-termica
        title: SmartDate X45
        description: ''
        photo: Codificador térmico SmartDate X45
      - id: smartdate-x65
        group: transferencia-termica
        title: SmartDate X65
        description: ''
        photo: Codificador térmico SmartDate X65
      - id: pa2200
        group: print-apply
        title: Markem-Imaje 2200
        description: ''
        photo: Aplicador de etiquetas 2200
      - id: pa2200-pallet
        group: print-apply
        title: Markem-Imaje 2200 Pallet
        description: ''
        photo: Aplicador de etiquetas para paletes
      - id: cimpak
        group: print-apply
        title: Markem-Imaje Cimpak
        description: ''
        photo: Etiquetadora automática Cimpak

  identificar:
    veredicto: insuficiente
    falta: o comercial não informou os 6 dados que pede para dimensionar e cotar um equipamento

  situacoes:
    veredicto: insuficiente
    falta: o comercial não listou os gatilhos de contato mais comuns

  processo:
    veredicto: completo
    responde: [produto-categoria]
    papeis: [Produção, Compras]
    # inferido do material ("suporte em todas as etapas, desde a escolha do equipamento até o pós-venda"); sem prazos
    # na página, desde 27/10/2026, o painel das etapas deu lugar ao banner enviado pelo usuário (variante local);
    # as etapas ficam registradas aqui para quando o banner sair
    eyebrow: Como funciona
    title: Da escolha do equipamento ao pós-venda
    microcopy: Suporte técnico em todas as etapas
    text: Acompanhamos a sua linha em cada etapa, da escolha da tecnologia de codificação à assistência depois da instalação.
    steps:
      - id: diagnostico
        icon: search
        title: Diagnóstico da linha
        description: Entendemos o produto, a embalagem e a velocidade da sua linha de produção.
      - id: tecnologia
        icon: sliders
        title: Escolha da tecnologia
        description: Indicamos jato de tinta, transferência térmica ou Print & Apply para o seu caso.
      - id: instalacao
        icon: wrench
        title: Instalação
        description: Entregamos e integramos o equipamento à sua linha de produção.
      - id: suporte
        icon: users
        title: Suporte e pós-venda
        description: Equipe técnica preparada para apoiar a sua operação depois da instalação.

  aplicacoes:
    veredicto: completo
    responde: [aplicacao-material]
    papeis: [Produção, Qualidade]
    eyebrow: Aplicações
    # variante local do mockup de 27/10/2026: H2 em duas linhas, cards verde-escuros e faixa de ajuda
    title: Codificação para cada tipo de embalagem.
    text: Soluções para identificar embalagens, produtos e diferentes superfícies da sua produção.
    items:
      - id: papel-cartao
        label: Papel cartão
        description: 'Codificação nítida em embalagens de papel cartão, com tintas de secagem rápida.'
        photo: Data de validade e lote impressos em embalagem de papel cartão
      - id: papelao
        label: Papelão ondulado
        description: 'Identificação de caixas com informações de lote, datas e rastreabilidade.'
        photo: Data de produção e lote impressos em caixa de papelão ondulado
      - id: cabos-fios
        label: Cabos e fios
        description: Marcação legível para identificar cabos e fios ao longo da produção.
        photo: Marcação impressa na capa de cabos elétricos
      - id: alimentos
        label: Alimentos
        description: Soluções de codificação para as necessidades da indústria de alimentos.
        photo: Queijos embalados com data e código de barras impressos

  segmentos:
    veredicto: insuficiente
    falta: faltam 7 setores com descrição, 3 equipamentos ou processos por setor e fotos de contexto

  clientes:
    veredicto: insuficiente
    falta: faltam logos autorizadas de clientes e 3 números com fonte identificável

  diferenciais:
    veredicto: completo
    responde: [produto-categoria, tecnologia]
    papeis: [Engenharia, Compras]
    eyebrow: Por que a Print Master
    titleLines: [Precisão para, sua linha de produção]
    # variante local do mockup de 27/10/2026: cena única no bloco, sem pessoa recortada
    text: Soluções de marcação e rastreabilidade Markem-Imaje, com codificação precisa e suporte especializado para sua indústria.
    scene: Impressoras Markem-Imaje 9410, Cimpak e SmartDate X45 diante de uma linha de envase
    person: Impressoras Markem-Imaje de jato de tinta, transferência térmica e Print & Apply
    reasons:
      - icon: cpu
        title: Tecnologia de ponta
        description: Sistemas modernos, com alta performance e confiabilidade.
      - icon: shield
        title: Conformidade regulatória
        description: Produtos que atendem às normas locais e internacionais.
      - icon: users
        title: Suporte especializado
        description: Apoio técnico da escolha do equipamento ao pós-venda.
      - icon: leaf
        title: Sustentabilidade
        description: Menor consumo de energia e de materiais na operação.
      - icon: gear
        title: Codificação confiável
        description: Equipamentos de alta performance para sua linha de produção.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista real de dúvidas, com respostas aprovadas

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras de itens diferentes

assets:
  pendentes: []

conflitos: []

naoAplicado:
  - locação de impressoras Ricoh e outsourcing de impressão (outra oferta, já atendida pela LP de locação)
  - termo "hot stamping", pausado na lista de palavras-chave
  - '"Desde 2003" (sem fonte e aprovação para virar prova institucional nesta LP)'
  - CNPJ (dado legal, sem bloco previsto no footer padrão)
  - aplicações excedentes (vidro, filmes flexíveis, garrafas plásticas, latas e tampas, peças de metal e plástico, plásticos extrudados, tampas) — citadas no texto da seção
```

# Ficha de execução — Print Master / Impressoras industriais Markem-Imaje

> Montada no editor a partir de `docs/briefing-cliente/briefing_print_master_impressoras_industriais.md` (briefing organizado de 22/10/2026) e da página atual do cliente, `printmaster.net.br/lp-impressoras-industriais-markem-imaje/`, por pedido de uma primeira versão publicada antes da entrevista completa no chat — o mesmo caminho da LP de locação da Print Master. Os pontos marcados como **inferido** precisam ser validados com o cliente; se mudarem, a ficha é regerada.

## O que foi decidido

LP de produto para a campanha de impressoras industriais da Print Master, com a palavra-chave `impressora industrial` no H1 ("Impressoras industriais Markem-Imaje", o mesmo título da página atual) e no title. A área atendida não está confirmada, então nenhuma geografia aparece na página além do endereço no rodapé.

A oferta abre em `vitrine`, com os 12 modelos da página atual em três prateleiras por tecnologia: jato de tinta contínuo (9018, 9450, 9750, 9410, 9330), transferência térmica (SmartDate OEM Connect, X30, X45, X65) e Print & Apply (2200, 2200 Pallet, Cimpak). Sem descrição por modelo — o material não tem, e a vitrine é tudo ou nada. Os modelos 9450 e SmartDate X45, comprados por nome na campanha, aparecem na vitrine. O apoio mostra o caminho do atendimento em `processo`. A prova usa as quatro aplicações priorizadas pelo briefing em `aplicacoes`, e o texto da seção cita os demais materiais (metal, garrafas, latas, vidro, ovos). A autoridade fecha com a frase de autoridade "Precisão para sua linha de produção" e os cinco diferenciais do briefing.

O logo da Markem-Imaje (selo branco do hero) e o eyebrow "Print Master | Distribuidor autorizado" entraram por decisão do usuário no mockup de abertura de 26/10/2026, o mesmo uso da página atual do cliente. No resto da página a marca aparece por extenso.

As cores são os verdes da marca já aprovados pelo cliente na LP de locação (26/10/2026); a estrutura fixa segue o padrão.

As imagens são as da página atual do cliente, nos slots posicionais do padrão.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                                     | Papéis                        | O que falta                                                          |
| ---------- | ---------------- | ------------- | -------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| Oferta     | `vitrine`        | completo      | produto/categoria, tecnologia, marca, modelo | Produção, Engenharia, Compras | descrição por modelo (opcional); logo da Markem-Imaje não autorizado |
| Oferta     | `linhas`         | insuficiente  | —                                            | —                             | chips, características e fotos; linha laser sem modelos              |
| Oferta     | `especificacoes` | insuficiente  | —                                            | —                             | especificações comparáveis                                           |
| Apoio      | `processo`       | completo      | produto/categoria                            | Produção, Compras             | sequência **inferida**; sem prazos                                   |
| Apoio      | `identificar`    | insuficiente  | —                                            | —                             | os 6 dados que o comercial pede para cotar                           |
| Apoio      | `situacoes`      | insuficiente  | —                                            | —                             | gatilhos de contato reais                                            |
| Prova      | `aplicacoes`     | completo      | aplicação/material                           | Produção, Qualidade           | fotos do site em resolução muito abaixo de 1200×900                  |
| Prova      | `segmentos`      | insuficiente  | —                                            | —                             | 7 setores completos                                                  |
| Prova      | `clientes`       | insuficiente  | —                                            | —                             | logos autorizadas e números com fonte                                |
| Autoridade | `diferenciais`   | completo      | produto/categoria, tecnologia                | Engenharia, Compras           | foto de pessoa da equipe (hoje entram três equipamentos recortados)  |
| Autoridade | `perguntas`      | insuficiente  | —                                            | —                             | lista real de dúvidas do comercial                                   |
| Autoridade | `escopo`         | não se aplica | —                                            | —                             | não é consolidação de compras                                        |

## Núcleo

| #   | Entrada            | Valor                                                                          | Origem                                  |
| --- | ------------------ | ------------------------------------------------------------------------------ | --------------------------------------- |
| 1   | MARCA              | Print Master                                                                   | briefing                                |
| 2   | MARCA_CURTA        | Print Master                                                                   | briefing                                |
| 3   | PRODUTO_PRINCIPAL  | Impressoras industriais Markem-Imaje                                           | briefing                                |
| 4   | CONTEXTO_DE_USO    | linhas de produção                                                             | briefing ("para sua linha de produção") |
| 5   | PUBLICO            | Produção, Engenharia, Qualidade, Compras                                       | **inferido** — ausente no material      |
| 6   | HERO               | codificação e rastreabilidade, alta performance, suporte especializado         | briefing                                |
| 7   | MARCAS_ATENDIDAS   | Markem-Imaje, só por extenso                                                   | briefing; logo sem autorização          |
| 8   | SELOS_DE_CONFIANCA | tecnologia de ponta, conformidade regulatória, suporte da escolha ao pós-venda | briefing                                |
| 9   | ENDERECO           | Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO                     | briefing                                |
| 10  | URL + PRIVACIDADE  | `printmaster.net.br/lp-impressoras-industriais-markem-imaje/`; sem política    | **inferido** — URL da página atual      |
| 11  | SHORTCODES         | padrão do plugin                                                               | default                                 |
| 12  | WHATSAPP           | sem botão flutuante                                                            | ausente no material                     |
| 13  | STACK + PUBLICACAO | padrão da agência + prévia na Vercel                                           | default                                 |
| 14  | TOKENS + FONTE     | verdes da marca (#064337, #027653, #61e5a9); Manrope                           | LP de locação aprovada (26/10)          |
| 15  | CAMPANHA           | `impressora industrial`                                                        | briefing                                |

## Pendências

| O que falta                          | Quem resolve        | Especificação                                                                                                  |
| ------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Banner do hero                       | designer            | 1981×900, fundo escuro, equipamento na faixa de 62–79% da largura; hoje é uma montagem com o 9750 recortado    |
| Fotos das aplicações em alta         | cliente ou banco    | as do site têm 165 a 235 px de altura; pedir 1200×900                                                          |
| Pessoa da equipe recortada           | cliente ou designer | 1220×1000 com fundo transparente; hoje entram três equipamentos recortados do site                             |
| Cenário de diferenciais              | cliente ou banco    | 1600×900; hoje é a foto de garrafa de vidro da página atual                                                    |
| Área comercial atendida              | cliente             | habilita selo de área na cotação                                                                               |
| Validar a sequência de `processo`    | cliente             | inferida (diagnóstico, tecnologia, instalação, suporte); sem prazos                                            |
| Público (cargos que decidem)         | cliente             | inferido: Produção, Engenharia, Qualidade, Compras                                                             |
| Registro da autorização Markem-Imaje | cliente             | logo e "distribuidor autorizado" já estão na página por decisão do usuário; arquivar a autorização por escrito |
| Descrição de cada modelo             | cliente             | 1 frase de 50–90 caracteres para todos os 12 (ou nenhum)                                                       |
| Modelos laser                        | cliente             | a palavra-chave "impressão a laser" não tem modelo na página                                                   |
| Especificações comparáveis           | cliente             | habilitaria `especificacoes` (tabela técnica)                                                                  |
| Os 6 dados para cotar um equipamento | comercial           | habilitaria `identificar` no apoio                                                                             |
| Lista de dúvidas reais               | comercial           | habilitaria `perguntas` na autoridade                                                                          |
| WhatsApp comercial                   | cliente             | número com DDD; liga o botão flutuante                                                                         |
| Política de privacidade              | cliente             | link para a nota de LGPD                                                                                       |

## Conflitos com o padrão

Nenhum.

## Dados não usados pelo padrão

Locação de impressoras Ricoh e outsourcing de impressão (outra oferta); termo "hot stamping" (pausado); "Desde 2003"; CNPJ; aplicações excedentes (citadas no texto de `aplicacoes`); "Print Master 2026 | Todos direitos reservados" (o footer gera o ano).
