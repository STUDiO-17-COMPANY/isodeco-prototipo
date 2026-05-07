import { Bell } from 'lucide-react'
import { useAppContext } from '@/contexts/useAppContext'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { HeaderSearch } from '@/components/layout/HeaderSearch'

export const Header = () => {
  const { state } = useAppContext()
  const hasUnread = state.notifications.unreadCount > 0

  return (
    <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
      <Breadcrumb />

      <div className="flex items-center gap-6">
        <HeaderSearch />
        <div className="flex items-center gap-4 text-stone-500">
          <button
            type="button"
            className="relative hover:text-stone-900 transition-colors"
            aria-label={
              hasUnread
                ? `Notificações (${state.notifications.unreadCount} por ler)`
                : 'Notificações'
            }
          >
            <Bell size={20} />
            {hasUnread ? (
              <span
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
                aria-hidden
              />
            ) : null}
          </button>
        </div>
      </div>
    </header>
  )
}
