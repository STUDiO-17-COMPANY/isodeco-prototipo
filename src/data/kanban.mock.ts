import type { KanbanBoard } from '@/types/domain'

export const kanbanMock: KanbanBoard = [
  {
    status: 'Nova Lead',
    cards: [
      {
        id: 1,
        client: 'João Martins',
        type: 'B2C',
        project: 'Parede TV',
        value: '€1.250',
        assignee: 'MA',
      },
      {
        id: 2,
        client: 'Ana Silva',
        type: 'B2C',
        project: 'Renovação WC',
        value: '€850',
        assignee: 'PL',
      },
    ],
  },
  {
    status: 'Contactado',
    cards: [
      {
        id: 3,
        client: 'Loja Norte Design',
        type: 'Reseller',
        project: 'Aplicação B2B',
        value: '€12.000/ano',
        assignee: 'JP',
      },
    ],
  },
  {
    status: 'Orçamento Enviado',
    cards: [
      {
        id: 4,
        client: 'Arq. Sofia Almeida',
        type: 'Arquiteto',
        project: 'Moradia Foz',
        value: '€3.800',
        assignee: 'MA',
      },
      {
        id: 5,
        client: 'Hotel Riverside',
        type: 'B2B',
        project: 'Lobby Paneling',
        value: '€8.400',
        assignee: 'JP',
      },
    ],
  },
  {
    status: 'Aguardar Aprovação',
    cards: [
      {
        id: 6,
        client: 'Miguel Ferreira',
        type: 'B2C',
        project: 'Pavimento SPC',
        value: '€890',
        assignee: 'PL',
      },
    ],
  },
  {
    status: 'Ganho',
    cards: [
      {
        id: 7,
        client: 'Construções Lda',
        type: 'B2B',
        project: 'Empreendimento',
        value: '€24.500',
        assignee: 'JP',
      },
    ],
  },
]
