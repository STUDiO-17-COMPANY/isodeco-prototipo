export type EntityType = 'B2C' | 'B2B' | 'Reseller' | 'Arquiteto'

export type ClientStatus = 'Ativo' | 'Lead' | 'Pendente'

export type DealStatus =
  | 'Nova Lead'
  | 'Contactado'
  | 'Orçamento Enviado'
  | 'Aguardar Aprovação'
  | 'Ganho'
  | 'Perdido'

export type StockStatus = 'Em Stock' | 'Stock Baixo' | 'Esgotado'

export type AIStatus = 'Orçamento Gerado' | 'Em Processamento' | 'Revisão Necessária'

export type Status = ClientStatus | DealStatus | StockStatus | AIStatus

export const StatusVariant = {
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Neutral: 'neutral',
  Accent: 'accent',
} as const

export type StatusVariant = (typeof StatusVariant)[keyof typeof StatusVariant]
