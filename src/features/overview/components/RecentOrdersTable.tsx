import type { Client } from '@/types/domain'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TypeBadge } from '@/components/ui/TypeBadge'

interface RecentOrdersTableProps {
  clients: Client[] | null
  loading: boolean
}

export const RecentOrdersTable = ({ clients, loading }: RecentOrdersTableProps) => (
  <div className="xl:col-span-2 bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-bold text-stone-900">Últimas Encomendas e Pedidos</h3>
      <button
        type="button"
        className="px-3 py-1.5 text-xs border border-stone-300 text-stone-900 hover:bg-stone-50 rounded-sm transition-colors"
      >
        Ver Tudo
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-y border-stone-200">
          <tr>
            <th className="px-4 py-3">Cliente / Entidade</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Valor</th>
            <th className="px-4 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {loading || !clients
            ? Array.from({ length: 4 }).map((_, i) => (
                <tr key={i} className="border-b border-stone-100">
                  <td className="px-4 py-4" colSpan={4}>
                    <div className="h-4 bg-stone-100 rounded w-full animate-pulse" />
                  </td>
                </tr>
              ))
            : clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
                >
                  <td className="px-4 py-4 font-medium text-stone-900">{client.name}</td>
                  <td className="px-4 py-4">
                    <TypeBadge type={client.type} />
                  </td>
                  <td className="px-4 py-4 text-stone-600">{client.totalSpent}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={client.status} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  </div>
)
