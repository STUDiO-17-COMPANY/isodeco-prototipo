import type { Client, Kpi } from '@/types/domain'
import type { AsyncState } from '@/hooks/useAsync'
import { useAsync } from '@/hooks/useAsync'
import { getClients } from '@/services/clients.service'
import { getKpis } from '@/services/kpi.service'

export interface OverviewData {
  kpis: AsyncState<Kpi[]>
  clients: AsyncState<Client[]>
}

export const useOverview = (): OverviewData => {
  const kpis = useAsync<Kpi[]>(getKpis, [])
  const clients = useAsync<Client[]>(getClients, [])
  return { kpis, clients }
}
