import type { Kpi } from '@/types/domain'
import { kpiMock } from '@/data/kpi.mock'
import { mockDelay } from '@/services/_mockDelay'

export const getKpis = (): Promise<Kpi[]> => mockDelay(kpiMock)
