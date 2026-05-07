import { Plus } from 'lucide-react'
import { KanbanColumn } from '@/features/kanban/components/KanbanColumn'
import { useKanban } from '@/features/kanban/hooks/useKanban'

export const KanbanPage = () => {
  const { data, loading, error } = useKanban()

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-stone-900">Pipeline de Vendas</h2>
        <button
          type="button"
          className="flex items-center bg-brand-500 text-white hover:bg-brand-600 px-4 py-2 rounded-sm text-sm font-medium transition-colors"
        >
          <Plus size={18} className="mr-2" /> Novo Negócio
        </button>
      </div>

      {error ? (
        <div className="text-red-600 text-sm">Erro ao carregar o pipeline: {error.message}</div>
      ) : (
        <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
          {loading || !data
            ? Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[300px] w-[300px] h-[300px] bg-stone-100/50 rounded-lg border border-stone-200 animate-pulse"
                />
              ))
            : data.map((column) => <KanbanColumn key={column.status} column={column} />)}
        </div>
      )}
    </div>
  )
}
