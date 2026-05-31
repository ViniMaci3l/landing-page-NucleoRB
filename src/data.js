export const whatsappUrl = 'https://wa.me/5598991663020'

export const technologies = [
  {
    name: 'Ultraformer MPT',
    description:
      'O Ultraformer MPT representa a nova geracao de ultrassom micro e macrofocado, promovendo lifting, estimulo intenso de colageno, firmeza facial e remodelacao corporal com mais conforto, precisao e tecnologia avancada.',
    tone: 'precision',
  },
  {
    name: 'Bioestimuladores',
    description:
      'Estimulo gradual de colageno para qualidade de pele, contorno e sustentacao com abordagem natural.',
    tone: 'skin',
  },
  {
    name: 'Implantes hormonais',
    description:
      'Estrategias individualizadas para equilibrio hormonal, sempre com avaliacao medica e acompanhamento.',
    tone: 'hormonal',
  },
  {
    name: 'Peptideos',
    description:
      'Protocolos integrativos para performance, vitalidade e suporte metabolico dentro de indicacoes clinicas.',
    tone: 'cellular',
  },
  {
    name: 'Terapias regenerativas',
    description:
      'Tecnologias e recursos voltados a reparo, longevidade e qualidade tecidual.',
    tone: 'regenerative',
  },
  {
    name: 'Tratamentos capilares',
    description:
      'Avaliacao especializada para fortalecimento, densidade e saude do couro cabeludo.',
    tone: 'hair',
  },
  {
    name: 'Spa capilar',
    description:
      'Experiencia sensorial e terapeutica para cuidado do couro cabeludo em ambiente premium.',
    tone: 'spa',
  },
  {
    name: 'Harmonizacao glutea',
    description:
      'Planejamento corporal com foco em proporcao, seguranca, naturalidade e acompanhamento.',
    tone: 'body',
  },
  {
    name: 'Estetica intima feminina',
    description:
      'Cuidado reservado, humanizado e tecnico para saude, conforto e autoestima feminina.',
    tone: 'intimate',
  },
  {
    name: 'Emagrecimento avancado',
    description:
      'Estrategias clinicas para composicao corporal, metabolismo e manutencao de resultados.',
    tone: 'metabolic',
  },
  {
    name: 'Telemedicina',
    description:
      'Acompanhamento medico a distancia para pacientes elegiveis, com privacidade e praticidade.',
    tone: 'digital',
  },
]

export const specialties = [
  ['Harmonizacao glutea', 'Contorno corporal com planejamento individual e criterios de seguranca.'],
  ['Menopausa', 'Acolhimento, investigacao clinica e estrategias para qualidade de vida.'],
  ['Andropausa', 'Avaliacao hormonal masculina com foco em vitalidade e performance.'],
  ['Rejuvenescimento facial', 'Abordagem integrada para pele, sustentacao e naturalidade.'],
  ['Harmonizacao corporal', 'Proporcao, firmeza e composicao corporal com olhar medico.'],
  ['Emagrecimento', 'Condutas personalizadas para metabolismo, rotina e acompanhamento.'],
  ['Terapia hormonal', 'Cuidado individualizado, exames e monitoramento medico.'],
  ['Implantes hormonais', 'Indicacao criteriosa e acompanhamento para casos selecionados.'],
  ['Longevidade', 'Prevencao, performance e saude ao longo do tempo.'],
  ['Peptideos', 'Protocolos integrativos sob avaliacao clinica.'],
  ['Tratamento capilar', 'Cuidado medico e tecnologico para saude capilar.'],
  ['Estetica intima feminina', 'Tratamentos reservados, tecnicos e humanizados.'],
  ['Telemedicina', 'Consulta online exclusiva para casos elegiveis.'],
].map(([name, description]) => ({ name, description }))

export const protocols = [
  {
    name: 'RB Menopause Performance',
    description:
      'Protocolo para mulheres que buscam qualidade de vida, vitalidade e acompanhamento no climatério e menopausa.',
    indication: 'Indicacao geral: avaliacao hormonal, sintomas, rotina e objetivos individuais.',
  },
  {
    name: 'RB Gluteo Sculpt',
    description:
      'Planejamento de harmonizacao glutea com foco em proporcao, naturalidade e seguranca.',
    indication: 'Indicacao geral: contorno corporal, firmeza e composicao glutea.',
  },
  {
    name: 'RB Longevity',
    description:
      'Estrategia integrativa para longevidade, performance, metabolismo e saude regenerativa.',
    indication: 'Indicacao geral: prevencao, energia, composicao corporal e acompanhamento.',
  },
  {
    name: 'RB Hair Restore',
    description:
      'Cuidado capilar personalizado com avaliacao do couro cabeludo, tratamentos e rotina.',
    indication: 'Indicacao geral: queda, densidade, fortalecimento e saude capilar.',
  },
]

export const team = [
  ['Dra. Renata Bogea', 'Medicina estetica, hormonal e regenerativa'],
  ['Carolina Rabelo', 'Atendimento e experiencia do paciente'],
  ['Demilla', 'Equipe tecnica'],
  ['Rosana Camara', 'Equipe tecnica'],
  ['Rafaela Serpa', 'Nutricionista'],
  ['Claudia', 'Nutricionista'],
  ['Erisson Lamar', 'Equipe multidisciplinar'],
  ['Maria Nunes', 'Equipe de atendimento'],
].map(([name, role]) => ({
  name,
  role,
  bio: 'Mini bio pendente de validacao com dados oficiais da clinica.',
}))

export const gallery = [
  ['Recepcao', 'Ambiente de chegada com atmosfera reservada e premium.'],
  ['Consultorios', 'Espacos pensados para avaliacao, privacidade e conforto.'],
  ['Spa capilar', 'Ritual de cuidado capilar com experiencia sensorial.'],
  ['Tecnologias', 'Equipamentos e protocolos integrados ao plano individual.'],
  ['Detalhes da estrutura', 'Materiais, luz e acabamento como parte da experiencia.'],
  ['Atendimento', 'Fluxo acolhedor, discreto e personalizado.'],
].map(([title, description]) => ({ title, description }))
