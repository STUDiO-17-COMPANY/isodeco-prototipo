import { ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { findMenuItemByPath } from '@/data/menuItems'

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const current = findMenuItemByPath(pathname)?.label ?? 'Página'

  return (
    <div className="flex items-center text-stone-500 text-sm font-medium">
      <span className="text-stone-400">Dashboard</span>
      <ChevronRight size={14} className="mx-2" aria-hidden />
      <span className="text-stone-900">{current}</span>
    </div>
  )
}
