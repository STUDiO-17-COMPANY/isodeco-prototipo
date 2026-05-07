import { useMemo, useState } from 'react'
import { ProductsFlowView } from '@/features/products/components/ProductsFlowView'
import { ProductsTable } from '@/features/products/components/ProductsTable'
import { ProductsToolbar } from '@/features/products/components/ProductsToolbar'
import {
  ProductsViewToggle,
  type ProductsViewMode,
} from '@/features/products/components/ProductsViewToggle'
import { useProducts } from '@/features/products/hooks/useProducts'

export const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<ProductsViewMode>('table')
  const [search, setSearch] = useState('')
  const { data, loading, error } = useProducts()

  const filtered = useMemo(() => {
    if (!data) return []
    const q = search.trim().toLowerCase()
    if (!q) return data
    return data.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    )
  }, [data, search])

  return (
    <div className="space-y-6 h-[80vh] flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-stone-900">Gestão de Produtos</h2>
        <ProductsViewToggle value={viewMode} onChange={setViewMode} />
      </div>

      {viewMode === 'table' ? (
        <div className="bg-white rounded-lg border border-stone-200 shadow-sm overflow-hidden flex-1 flex flex-col">
          <ProductsToolbar search={search} onSearchChange={setSearch} />
          {error ? (
            <div className="p-6 text-sm text-red-600">
              Erro ao carregar produtos: {error.message}
            </div>
          ) : loading ? (
            <div className="p-6">
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-12 bg-stone-100 rounded animate-pulse" />
                ))}
              </div>
            </div>
          ) : (
            <ProductsTable products={filtered} />
          )}
        </div>
      ) : (
        <ProductsFlowView />
      )}
    </div>
  )
}
