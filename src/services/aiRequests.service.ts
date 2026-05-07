import type { AIRequest } from '@/types/domain'
import { aiRequestsMock } from '@/data/aiRequests.mock'
import { mockDelay } from '@/services/_mockDelay'

export const getAIRequests = (): Promise<AIRequest[]> => mockDelay(aiRequestsMock)

export const getAIRequest = (id: string): Promise<AIRequest | undefined> =>
  mockDelay(aiRequestsMock.find((r) => r.id === id))
