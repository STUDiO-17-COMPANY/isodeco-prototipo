import { Filter, Plus, Search } from 'lucide-react'

interface ProductsToolbarProps {
  search: string
  onSearchChange: (value: string) => void
}

export const ProductsToolbar = ({ search, onSearchChange }: ProductsToolbarProps) => (
  <div className="p-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
    <div className="relative w-64">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
        size={18}
        aria-hidden
      />
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Pesquisar produto..."
        aria-label="Pesquisar produto"
        className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />
    </div>
    <div className="flex gap-3">
      <button
        type="button"
        className="flex items-center px-3 py-2 text-sm bg-white border border-stone-300 hover:bg-stone-50 rounded-sm transition-colors"
      >
        <Filter size={16} className="mr-2" /> Filtros
      </button>
      <button
        type="button"
        className="flex items-center px-3 py-2 text-sm bg-stone-900 text-white hover:bg-stone-800 rounded-sm transition-colors"
      >
        <Plus size={16} className="mr-2" /> Adicionar Produto
      </button>
    </div>
  </div>
)
