import type { Client } from '@/types/domain'

export const clientsMock: Client[] = [
  {
    id: 'CLI-001',
    name: 'Arq. Sofia Almeida',
    type: 'Arquiteto',
    contact: 'sofia@almeida-arq.pt',
    location: 'Porto',
    totalSpent: '€14.200',
    status: 'Ativo',
  },
  {
    id: 'CLI-002',
    name: 'João Martins',
    type: 'B2C',
    contact: '912 345 678',
    location: 'Lisboa',
    totalSpent: '€0',
    status: 'Lead',
  },
  {
    id: 'CLI-003',
    name: 'Loja Norte Design',
    type: 'Reseller',
    contact: 'compras@nortedesign.pt',
    location: 'Braga',
    totalSpent: '€45.000',
    status: 'Ativo',
  },
  {
    id: 'CLI-004',
    name: 'Hotel Riverside',
    type: 'B2B',
    contact: 'geral@riverside.pt',
    location: 'Douro',
    totalSpent: '€8.400',
    status: 'Pendente',
  },
]
