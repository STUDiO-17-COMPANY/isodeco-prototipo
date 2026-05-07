import { Download, Sparkles } from 'lucide-react'
import type { AIRequest } from '@/types/domain'
import { StatusVariant } from '@/types/status'
import { variantClasses } from '@/lib/statusVariants'

interface AIRequestDetailPanelProps {
  request: AIRequest | null
}

const PREVIEW_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'

export const AIRequestDetailPanel = ({ request }: AIRequestDetailPanelProps) => {
  if (!request) {
    return (
      <div className="bg-stone-900 rounded-lg border border-stone-800 shadow-lg p-6 text-stone-400 flex items-center justify-center min-h-[400px]">
        Selecione um pedido para ver detalhes
      </div>
    )
  }

  return (
    <div className="bg-stone-900 rounded-lg border border-stone-800 shadow-lg p-6 text-white flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Sparkles className="text-brand-500 opacity-50" size={48} aria-hidden />
      </div>
      <div className="mb-4">
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variantClasses[StatusVariant.Neutral]}`}
        >
          Detalhe do Pedido: {request.id}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-1">{request.room}</h3>
      <p className="text-stone-400 text-sm mb-6">Cliente: {request.client}</p>

      <div className="space-y-4 flex-1">
        <div className="aspect-video bg-stone-800 rounded-md overflow-hidden relative border border-stone-700">
          <img src={PREVIEW_IMAGE} className="w-full h-full object-cover" alt="Preview AI" />
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs">
            Simulação AI: {request.status}
          </div>
        </div>

        <div className="bg-stone-800 p-4 rounded-md border border-stone-700">
          <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
            Cálculo Estimado (Visão AI)
          </p>
          <p className="text-xl font-bold text-brand-500">{request.estimate}</p>
          <p className="text-sm text-stone-300">Produto: {request.product}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="flex-1 bg-brand-500 hover:bg-brand-600 text-white py-2 px-4 rounded-sm text-sm font-medium transition-colors"
        >
          Converter em Orçamento
        </button>
        <button
          type="button"
          aria-label="Descarregar"
          className="px-4 py-2 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white rounded-sm transition-colors flex items-center justify-center"
        >
          <Download size={18} />
        </button>
      </div>
    </div>
  )
}
