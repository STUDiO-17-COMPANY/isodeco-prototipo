import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'

export const AppShell = () => (
  <div className="flex h-screen w-full overflow-hidden text-stone-900">
    <Sidebar />
    <main className="flex-1 flex flex-col min-w-0 bg-[#F9F9F8]">
      <Header />
      <div className="flex-1 overflow-auto p-8">
        <Outlet />
      </div>
    </main>
  </div>
)
