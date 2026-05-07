import type { Status, StatusVariant as StatusVariantType } from '@/types/status'
import { cn } from '@/lib/cn'
import { resolveStatusVariant, variantClasses } from '@/lib/statusVariants'

interface StatusBadgeProps {
  status: Status
  variant?: StatusVariantType
  className?: string
}

export const StatusBadge = ({ status, variant, className }: StatusBadgeProps) => {
  const resolved = variant ?? resolveStatusVariant(status)
  return (
    <span
      className={cn(
        'px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        variantClasses[resolved],
        className,
      )}
    >
      {status}
    </span>
  )
}
