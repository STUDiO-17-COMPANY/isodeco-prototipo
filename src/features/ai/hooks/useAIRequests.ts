import type { AIRequest } from '@/types/domain'
import { useAsync } from '@/hooks/useAsync'
import { getAIRequests } from '@/services/aiRequests.service'

export const useAIRequests = () => useAsync<AIRequest[]>(getAIRequests, [])
