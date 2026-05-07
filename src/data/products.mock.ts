import type { Product } from '@/types/domain'

export const productsMock: Product[] = [
  {
    id: 'PRD-001',
    name: 'Painel Ripado Carvalho Natural',
    sku: 'RIP-CARV-01',
    category: 'Painéis Ripados',
    stock: 145,
    priceB2C: '€34.90',
    priceB2B: '€22.50',
    status: 'Em Stock',
  },
  {
    id: 'PRD-002',
    name: 'Pavimento SPC Cinza Pedra',
    sku: 'SPC-CINZ-04',
    category: 'Pavimentos SPC',
    stock: 820,
    priceB2C: '€24.50/m2',
    priceB2B: '€16.80/m2',
    status: 'Em Stock',
  },
  {
    id: 'PRD-003',
    name: 'Efeito Mármore Calacatta PVC',
    sku: 'PVC-MAR-02',
    category: 'Revestimentos Parede',
    stock: 12,
    priceB2C: '€45.00',
    priceB2B: '€31.00',
    status: 'Stock Baixo',
  },
  {
    id: 'PRD-004',
    name: 'Cola Híbrida High Tack',
    sku: 'COL-HT-01',
    category: 'Acessórios',
    stock: 0,
    priceB2C: '€9.90',
    priceB2B: '€6.50',
    status: 'Esgotado',
  },
]
