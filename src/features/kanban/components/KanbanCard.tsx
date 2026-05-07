import { MoreVertical } from 'lucide-react'
import type { KanbanCard as KanbanCardType } from '@/types/domain'
import { TypeBadge } from '@/components/ui/TypeBadge'

interface KanbanCardProps {
  card: KanbanCardType
}

export const KanbanCard = ({ card }: KanbanCardProps) => (
  <div className="bg-white p-4 rounded-md border border-stone-200 shadow-sm cursor-pointer hover:border-stone-300 hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-2">
      <TypeBadge type={card.type} />
      <button
        type="button"
        aria-label="Mais opções"
        className="text-stone-400 hover:text-stone-600"
      >
        <MoreVertical size={16} />
      </button>
    </div>
    <h4 className="font-bold text-stone-900 text-sm mb-1">{card.client}</h4>
    <p className="text-xs text-stone-500 mb-3">{card.project}</p>
    <div className="flex justify-between items-center border-t border-stone-100 pt-3">
      <span className="font-bold text-stone-900 text-sm">{card.value}</span>
      <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] font-bold">
        {card.assignee}
      </div>
    </div>
  </div>
)
