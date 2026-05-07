import { Search } from 'lucide-react'

export const HeaderSearch = () => (
  <div className="relative hidden md:block w-64">
    <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
      size={16}
      aria-hidden
    />
    <input
      type="text"
      placeholder="Pesquisar clientes, faturas..."
      aria-label="Pesquisa global"
      className="w-full pl-9 pr-4 py-1.5 bg-stone-100 border-transparent rounded-full text-sm focus:bg-white focus:border-stone-300 focus:ring-0 transition-all outline-none"
    />
  </div>
)
