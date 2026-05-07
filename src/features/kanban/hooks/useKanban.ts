import type { KanbanBoard } from '@/types/domain'
import { useAsync } from '@/hooks/useAsync'
import { getKanban } from '@/services/kanban.service'

export const useKanban = () => useAsync<KanbanBoard>(getKanban, [])
