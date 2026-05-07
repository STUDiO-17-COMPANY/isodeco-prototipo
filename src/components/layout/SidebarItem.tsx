import { NavLink } from 'react-router-dom'
import type { LucideIcon } from '@/types/menu'
import { cn } from '@/lib/cn'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  to: string
  end?: boolean
}

export const SidebarItem = ({ icon: Icon, label, to, end }: SidebarItemProps) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      cn(
        'w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors text-sm font-medium',
        isActive
          ? 'bg-stone-800 text-white'
          : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-200',
      )
    }
  >
    {({ isActive }) => (
      <>
        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
        {label}
      </>
    )}
  </NavLink>
)
