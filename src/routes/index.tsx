import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { OverviewPage } from '@/features/overview/OverviewPage'
import { KanbanPage } from '@/features/kanban/KanbanPage'
import { ProductsPage } from '@/features/products/ProductsPage'
import { AIRequestsPage } from '@/features/ai/AIRequestsPage'
import { PlaceholderPage } from '@/features/placeholder/PlaceholderPage'
import { PATHS } from '@/routes/paths'

export const AppRoutes = () => (
  <Routes>
    <Route path={PATHS.overview} element={<AppShell />}>
      <Route index element={<OverviewPage />} />
      <Route path="kanban" element={<KanbanPage />} />
      <Route path="pipeline" element={<PlaceholderPage title="Sales Pipeline" />} />
      <Route path="clients" element={<PlaceholderPage title="Clientes B2C/B2B" />} />
      <Route path="resellers" element={<PlaceholderPage title="Rede de Revenda" />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="orders" element={<PlaceholderPage title="Encomendas" />} />
      <Route path="quotes" element={<PlaceholderPage title="Orçamentos" />} />
      <Route path="invoices" element={<PlaceholderPage title="Faturas" />} />
      <Route path="payments" element={<PlaceholderPage title="Pagamentos" />} />
      <Route path="stock" element={<PlaceholderPage title="Stock & Armazém" />} />
      <Route path="team" element={<PlaceholderPage title="Equipa Interna" />} />
      <Route path="tasks" element={<PlaceholderPage title="Tarefas Internas" />} />
      <Route path="reports" element={<PlaceholderPage title="Relatórios" />} />
      <Route path="ai" element={<AIRequestsPage />} />
      <Route path="documents" element={<PlaceholderPage title="Documentos" />} />
      <Route path="settings" element={<PlaceholderPage title="Definições" />} />
      <Route path="*" element={<PlaceholderPage title="Não Encontrado" />} />
    </Route>
  </Routes>
)
