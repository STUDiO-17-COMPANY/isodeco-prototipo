import type { Product } from '@/types/domain'
import { productsMock } from '@/data/products.mock'
import { mockDelay } from '@/services/_mockDelay'

export const getProducts = (): Promise<Product[]> => mockDelay(productsMock)

export const getProduct = (id: string): Promise<Product | undefined> =>
  mockDelay(productsMock.find((p) => p.id === id))
