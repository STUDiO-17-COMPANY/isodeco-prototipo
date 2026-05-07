import { useAppContext } from '@/contexts/useAppContext'

export const SidebarUserCard = () => {
  const { state } = useAppContext()
  if (!state.user) return null

  return (
    <div className="p-4 border-t border-stone-800">
      <div className="flex items-center gap-3 bg-stone-900 p-3 rounded-lg border border-stone-800 cursor-pointer hover:bg-stone-800 transition-colors">
        <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-white font-bold text-xs">
          {state.user.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-white leading-tight">{state.user.name}</p>
          <p className="text-xs text-stone-400">{state.user.role}</p>
        </div>
      </div>
    </div>
  )
}
