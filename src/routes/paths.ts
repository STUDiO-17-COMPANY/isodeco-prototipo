export const PATHS = {
  overview: '/',
  kanban: '/kanban',
  pipeline: '/pipeline',
  clients: '/clients',
  resellers: '/resellers',
  products: '/products',
  orders: '/orders',
  quotes: '/quotes',
  invoices: '/invoices',
  payments: '/payments',
  stock: '/stock',
  team: '/team',
  tasks: '/tasks',
  reports: '/reports',
  ai: '/ai',
  documents: '/documents',
  settings: '/settings',
} as const

export type AppPath = (typeof PATHS)[keyof typeof PATHS]
