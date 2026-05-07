import type { Status, StatusVariant as StatusVariantType } from '@/types/status'
import { StatusVariant } from '@/types/status'

export const variantClasses: Record<StatusVariantType, string> = {
  [StatusVariant.Success]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  [StatusVariant.Warning]: 'bg-amber-100 text-amber-800 border-amber-200',
  [StatusVariant.Danger]: 'bg-red-100 text-red-800 border-red-200',
  [StatusVariant.Neutral]: 'bg-stone-100 text-stone-800 border-stone-200',
  [StatusVariant.Accent]: 'bg-brand-500/10 text-brand-500 border-brand-500/20',
}

export const statusToVariant: Record<Status, StatusVariantType> = {
  // Client status
  Ativo: StatusVariant.Success,
  Lead: StatusVariant.Neutral,
  Pendente: StatusVariant.Warning,

  // Deal status
  'Nova Lead': StatusVariant.Neutral,
  Contactado: StatusVariant.Neutral,
  'Orçamento Enviado': StatusVariant.Neutral,
  'Aguardar Aprovação': StatusVariant.Warning,
  Ganho: StatusVariant.Success,
  Perdido: StatusVariant.Danger,

  // Stock status
  'Em Stock': StatusVariant.Success,
  'Stock Baixo': StatusVariant.Warning,
  Esgotado: StatusVariant.Danger,

  // AI status
  'Orçamento Gerado': StatusVariant.Success,
  'Em Processamento': StatusVariant.Warning,
  'Revisão Necessária': StatusVariant.Warning,
}

export const resolveStatusVariant = (status: Status): StatusVariantType =>
  statusToVariant[status] ?? StatusVariant.Neutral
