import type { AIStatus, ClientStatus, DealStatus, EntityType, StockStatus } from '@/types/status'

export interface Kpi {
  title: string
  value: string
  trend: string
  positive: boolean
}

export interface Client {
  id: string
  name: string
  type: EntityType
  contact: string
  location: string
  totalSpent: string
  status: ClientStatus
}

export interface Product {
  id: string
  name: string
  sku: string
  category: string
  stock: number
  priceB2C: string
  priceB2B: string
  status: StockStatus
}

export interface KanbanCard {
  id: number
  client: string
  type: EntityType
  project: string
  value: string
  assignee: string
}

export interface KanbanColumn {
  status: DealStatus
  cards: KanbanCard[]
}

export type KanbanBoard = KanbanColumn[]

export interface AIRequest {
  id: string
  client: string
  room: string
  product: string
  estimate: string
  status: AIStatus
  date: string
}

export interface User {
  name: string
  role: string
  initials: string
}

export interface Notification {
  id: string
  message: string
  read: boolean
  createdAt: string
}
