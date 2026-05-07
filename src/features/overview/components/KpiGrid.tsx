import type { Kpi } from '@/types/domain'
import { KpiCard } from '@/components/ui/KpiCard'

interface KpiGridProps {
  kpis: Kpi[] | null
  loading: boolean
}

const SkeletonCard = () => (
  <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm animate-pulse">
    <div className="h-4 bg-stone-200 rounded w-24 mb-3" />
    <div className="h-8 bg-stone-200 rounded w-32 mb-4" />
    <div className="h-4 bg-stone-100 rounded w-20" />
  </div>
)

export const KpiGrid = ({ kpis, loading }: KpiGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {loading || !kpis
      ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
      : kpis.map((kpi) => <KpiCard key={kpi.title} kpi={kpi} />)}
  </div>
)
