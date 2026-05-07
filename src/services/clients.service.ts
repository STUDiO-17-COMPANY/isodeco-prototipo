import type { Client } from '@/types/domain'
import { clientsMock } from '@/data/clients.mock'
import { mockDelay } from '@/services/_mockDelay'

export const getClients = (): Promise<Client[]> => mockDelay(clientsMock)

export const getClient = (id: string): Promise<Client | undefined> =>
  mockDelay(clientsMock.find((c) => c.id === id))
