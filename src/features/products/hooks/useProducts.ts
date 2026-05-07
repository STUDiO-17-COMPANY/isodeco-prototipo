import type { Product } from '@/types/domain'
import { useAsync } from '@/hooks/useAsync'
import { getProducts } from '@/services/products.service'

export const useProducts = () => useAsync<Product[]>(getProducts, [])
