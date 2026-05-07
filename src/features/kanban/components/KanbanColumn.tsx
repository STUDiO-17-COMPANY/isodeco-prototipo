import type { KanbanColumn as KanbanColumnType } from '@/types/domain'
import { KanbanCard } from '@/features/kanban/components/KanbanCard'

interface KanbanColumnProps {
  column: KanbanColumnType
}

export const KanbanColumn = ({ column }: KanbanColumnProps) => (
  <div className="min-w-[300px] w-[300px] bg-stone-100/50 rounded-lg border border-stone-200 flex flex-col h-full max-h-[75vh]">
    <div className="p-4 border-b border-stone-200 flex justify-between items-center bg-stone-50 rounded-t-lg">
      <h3 className="font-bold text-stone-900 text-sm">{column.status}</h3>
      <span className="bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full text-xs font-bold">
        {column.cards.length}
      </span>
    </div>
    <div className="p-4 flex-1 overflow-y-auto space-y-3">
      {column.cards.map((card) => (
        <KanbanCard key={card.id} card={card} />
      ))}
    </div>
  </div>
)
