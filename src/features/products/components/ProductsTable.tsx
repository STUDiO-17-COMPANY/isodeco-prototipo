import type { Product } from '@/types/domain'
import { StatusBadge } from '@/components/ui/StatusBadge'

interface ProductsTableProps {
  products: Product[]
}

export const ProductsTable = ({ products }: ProductsTableProps) => (
  <div className="overflow-x-auto flex-1">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-stone-500 uppercase bg-white border-b border-stone-200">
        <tr>
          <th className="px-6 py-4">Produto</th>
          <th className="px-6 py-4">SKU</th>
          <th className="px-6 py-4">Categoria</th>
          <th className="px-6 py-4">Stock</th>
          <th className="px-6 py-4">Preço B2C</th>
          <th className="px-6 py-4 text-brand-500">Preço B2B</th>
          <th className="px-6 py-4">Estado</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
          >
            <td className="px-6 py-4 font-bold text-stone-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-stone-200 flex-shrink-0" aria-hidden />
              {product.name}
            </td>
            <td className="px-6 py-4 text-stone-600 font-mono text-xs">{product.sku}</td>
            <td className="px-6 py-4 text-stone-600">{product.category}</td>
            <td className="px-6 py-4 font-medium">{product.stock}</td>
            <td className="px-6 py-4">{product.priceB2C}</td>
            <td className="px-6 py-4 font-bold text-brand-500 bg-brand-500/5">
              {product.priceB2B}
            </td>
            <td className="px-6 py-4">
              <StatusBadge status={product.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
