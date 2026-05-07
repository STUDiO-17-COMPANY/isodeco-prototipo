import { Network } from 'lucide-react'
import { cn } from '@/lib/cn'

export type ProductsViewMode = 'table' | 'flow'

interface ProductsViewToggleProps {
  value: ProductsViewMode
  onChange: (mode: ProductsViewMode) => void
}

export const ProductsViewToggle = ({ value, onChange }: ProductsViewToggleProps) => (
  <div className="flex gap-2 bg-stone-100 p-1 rounded-md border border-stone-200">
    <button
      type="button"
      onClick={() => onChange('table')}
      aria-pressed={value === 'table'}
      className={cn(
        'px-4 py-1.5 text-sm font-medium rounded-sm transition-colors',
        value === 'table'
          ? 'bg-white shadow-sm text-stone-900'
          : 'text-stone-500 hover:text-stone-900',
      )}
    >
      Tabela
    </button>
    <button
      type="button"
      onClick={() => onChange('flow')}
      aria-pressed={value === 'flow'}
      className={cn(
        'flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-sm transition-colors',
        value === 'flow'
          ? 'bg-white shadow-sm text-stone-900'
          : 'text-stone-500 hover:text-stone-900',
      )}
    >
      <Network size={16} /> Fluxo Visual
    </button>
  </div>
)
