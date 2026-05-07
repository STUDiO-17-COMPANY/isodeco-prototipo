import {
  BarChartHorizontal,
  Boxes,
  Building2,
  CheckSquare,
  CreditCard,
  FileText,
  FolderTree,
  KanbanSquare,
  LayoutDashboard,
  LineChart,
  PackageSearch,
  Receipt,
  Settings,
  ShoppingCart,
  Sparkles,
  Users,
  UsersRound,
} from 'lucide-react'
import type { MenuItem } from '@/types/menu'
import { PATHS } from '@/routes/paths'

export const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: PATHS.overview },
  { id: 'kanban', label: 'Kanban Board', icon: KanbanSquare, path: PATHS.kanban },
  { id: 'pipeline', label: 'Sales Pipeline', icon: BarChartHorizontal, path: PATHS.pipeline },
  { id: 'clients', label: 'Clientes B2C/B2B', icon: Users, path: PATHS.clients },
  { id: 'resellers', label: 'Rede de Revenda', icon: Building2, path: PATHS.resellers },
  { id: 'products', label: 'Produtos', icon: PackageSearch, path: PATHS.products },
  { id: 'orders', label: 'Encomendas', icon: ShoppingCart, path: PATHS.orders },
  { id: 'quotes', label: 'Orçamentos', icon: FileText, path: PATHS.quotes },
  { id: 'invoices', label: 'Faturas', icon: Receipt, path: PATHS.invoices },
  { id: 'payments', label: 'Pagamentos', icon: CreditCard, path: PATHS.payments },
  { id: 'stock', label: 'Stock & Armazém', icon: Boxes, path: PATHS.stock },
  { id: 'team', label: 'Equipa Interna', icon: UsersRound, path: PATHS.team },
  { id: 'tasks', label: 'Tarefas Internas', icon: CheckSquare, path: PATHS.tasks },
  { id: 'reports', label: 'Relatórios', icon: LineChart, path: PATHS.reports },
  { id: 'ai', label: 'Simulações AI', icon: Sparkles, path: PATHS.ai },
  { id: 'documents', label: 'Documentos', icon: FolderTree, path: PATHS.documents },
  { id: 'settings', label: 'Definições', icon: Settings, path: PATHS.settings },
]

export const findMenuItemByPath = (pathname: string): MenuItem | undefined =>
  menuItems.find((item) => item.path === pathname)
