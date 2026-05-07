import type { EntityType } from '@/types/status'
import { StatusVariant } from '@/types/status'
import { cn } from '@/lib/cn'
import { variantClasses } from '@/lib/statusVariants'

interface TypeBadgeProps {
  type: EntityType
  className?: string
}

export const TypeBadge = ({ type, className }: TypeBadgeProps) => (
  <span
    className={cn(
      'px-2.5 py-0.5 rounded-full text-xs font-semibold border',
      variantClasses[StatusVariant.Accent],
      className,
    )}
  >
    {type}
  </span>
)
