import type { KanbanBoard } from '@/types/domain'
import { kanbanMock } from '@/data/kanban.mock'
import { mockDelay } from '@/services/_mockDelay'

export const getKanban = (): Promise<KanbanBoard> => mockDelay(kanbanMock)
