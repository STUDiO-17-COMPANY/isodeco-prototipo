import { KpiGrid } from '@/features/overview/components/KpiGrid'
import { PendingApplications } from '@/features/overview/components/PendingApplications'
import { RecentOrdersTable } from '@/features/overview/components/RecentOrdersTable'
import { useOverview } from '@/features/overview/hooks/useOverview'

export const OverviewPage = () => {
  const { kpis, clients } = useOverview()

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpis.data} loading={kpis.loading} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RecentOrdersTable clients={clients.data} loading={clients.loading} />
        <PendingApplications />
      </div>
    </div>
  )
}
