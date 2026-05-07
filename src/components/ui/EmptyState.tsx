import type { ReactNode } from 'react'
import type { LucideIcon } from '@/types/menu'
import { cn } from '@/lib/cn'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description?: ReactNode
  className?: string
}

export const EmptyState = ({ icon: Icon, title, description, className }: EmptyStateProps) => (
  <div
    className={cn(
      'h-full flex flex-col items-center justify-center bg-white border border-stone-200 rounded-lg border-dashed p-8',
      className,
    )}
  >
    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-400">
      <Icon size={32} />
    </div>
    <h2 className="text-2xl font-bold text-stone-900 mb-2">{title}</h2>
    {description ? (
      <p className="text-stone-500 max-w-md text-center">{description}</p>
    ) : null}
  </div>
)
