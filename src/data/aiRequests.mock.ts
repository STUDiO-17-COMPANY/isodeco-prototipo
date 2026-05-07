import type { AIRequest } from '@/types/domain'

export const aiRequestsMock: AIRequest[] = [
  {
    id: 'AI-1042',
    client: 'João Martins',
    room: 'Sala de Estar',
    product: 'Painel Ripado Carvalho',
    estimate: '8.5 m² (14 painéis)',
    status: 'Orçamento Gerado',
    date: 'Hoje, 14:30',
  },
  {
    id: 'AI-1043',
    client: 'Marta Costa',
    room: 'Casa de Banho',
    product: 'Efeito Mármore',
    estimate: 'A calcular...',
    status: 'Em Processamento',
    date: 'Hoje, 15:10',
  },
  {
    id: 'AI-1044',
    client: 'Arq. Silva',
    room: 'Quarto Principal',
    product: 'Painel Madeira Nogueira',
    estimate: '12 m² (20 painéis)',
    status: 'Revisão Necessária',
    date: 'Ontem',
  },
]
