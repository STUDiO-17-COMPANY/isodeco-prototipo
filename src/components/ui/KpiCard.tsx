import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { Kpi } from '@/types/domain'
import { cn } from '@/lib/cn'

interface KpiCardProps {
  kpi: Kpi
  className?: string
}

export const KpiCard = ({ kpi, className }: KpiCardProps) => {
  const TrendIcon = kpi.positive ? ArrowUpRight : ArrowDownRight
  return (
    <div className={cn('bg-white p-6 rounded-lg border border-stone-200 shadow-sm', className)}>
      <h3 className="text-stone-500 text-sm font-medium mb-2">{kpi.title}</h3>
      <p className="text-3xl font-bold text-stone-900 mb-4">{kpi.value}</p>
      <div
        className={cn(
          'flex items-center text-sm font-medium',
          kpi.positive ? 'text-emerald-600' : 'text-red-600',
        )}
      >
        <TrendIcon size={16} className="mr-1" />
        {kpi.trend}
      </div>
    </div>
  )
}
