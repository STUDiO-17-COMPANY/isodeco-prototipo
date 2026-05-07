import { menuItems } from '@/data/menuItems'
import { PATHS } from '@/routes/paths'
import { SidebarItem } from '@/components/layout/SidebarItem'
import { SidebarLogo } from '@/components/layout/SidebarLogo'
import { SidebarUserCard } from '@/components/layout/SidebarUserCard'

export const Sidebar = () => (
  <aside className="w-64 bg-stone-950 h-full flex flex-col flex-shrink-0 border-r border-stone-800 z-20">
    <SidebarLogo />

    <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1" aria-label="Navegação principal">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          to={item.path}
          end={item.path === PATHS.overview}
        />
      ))}
    </nav>

    <SidebarUserCard />
  </aside>
)
