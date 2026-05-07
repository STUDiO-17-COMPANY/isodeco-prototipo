import type { Kpi } from '@/types/domain'

export const kpiMock: Kpi[] = [
  { title: 'Receita Mensal', value: '€84.500', trend: '+12.5%', positive: true },
  { title: 'Orçamentos Pendentes', value: '24', trend: '€45.200 total', positive: true },
  { title: 'Novos Resellers (B2B)', value: '8', trend: 'Em análise', positive: true },
  { title: 'Produtos Baixo Stock', value: '12', trend: 'Atenção necessária', positive: false },
]
