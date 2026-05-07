import { useMemo, useState } from 'react'
import { AIRequestDetailPanel } from '@/features/ai/components/AIRequestDetailPanel'
import { AIRequestsTable } from '@/features/ai/components/AIRequestsTable'
import { useAIRequests } from '@/features/ai/hooks/useAIRequests'

export const AIRequestsPage = () => {
  const { data, loading, error } = useAIRequests()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const requests = useMemo(() => data ?? [], [data])
  const effectiveSelectedId = selectedId ?? requests[0]?.id ?? null
  const selectedRequest = useMemo(
    () => requests.find((r) => r.id === effectiveSelectedId) ?? null,
    [requests, effectiveSelectedId],
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-stone-900">Visualizações e Pedidos AI</h2>
          <p className="text-sm text-stone-500">
            Gestão das simulações de ambiente criadas pelos clientes.
          </p>
        </div>
      </div>

      {error ? (
        <div className="text-red-600 text-sm">Erro ao carregar pedidos: {error.message}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <div className="lg:col-span-2 bg-stone-100 rounded-lg h-64 animate-pulse" />
              <div className="bg-stone-100 rounded-lg h-64 animate-pulse" />
            </>
          ) : (
            <>
              <AIRequestsTable
                requests={requests}
                selectedId={effectiveSelectedId}
                onSelect={setSelectedId}
              />
              <AIRequestDetailPanel request={selectedRequest} />
            </>
          )}
        </div>
      )}
    </div>
  )
}
