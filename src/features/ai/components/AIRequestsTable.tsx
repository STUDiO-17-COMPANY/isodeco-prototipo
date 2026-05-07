import type { AIRequest } from '@/types/domain'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { cn } from '@/lib/cn'

interface AIRequestsTableProps {
  requests: AIRequest[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export const AIRequestsTable = ({ requests, selectedId, onSelect }: AIRequestsTableProps) => (
  <div className="lg:col-span-2 bg-white rounded-lg border border-stone-200 shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-200">
          <tr>
            <th className="px-6 py-4">ID / Data</th>
            <th className="px-6 py-4">Cliente</th>
            <th className="px-6 py-4">Divisão</th>
            <th className="px-6 py-4">Produto Selecionado</th>
            <th className="px-6 py-4">Estado</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr
              key={req.id}
              onClick={() => onSelect(req.id)}
              className={cn(
                'border-b border-stone-100 cursor-pointer transition-colors',
                selectedId === req.id ? 'bg-stone-50' : 'hover:bg-stone-50',
              )}
            >
              <td className="px-6 py-4">
                <div className="font-mono text-xs font-bold text-stone-900">{req.id}</div>
                <div className="text-xs text-stone-500">{req.date}</div>
              </td>
              <td className="px-6 py-4 font-medium">{req.client}</td>
              <td className="px-6 py-4 text-stone-600">{req.room}</td>
              <td className="px-6 py-4 text-stone-600">{req.product}</td>
              <td className="px-6 py-4">
                <StatusBadge status={req.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
