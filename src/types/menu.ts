import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'

export type LucideIcon = ComponentType<LucideProps>

export interface MenuItem {
  id: string
  label: string
  icon: LucideIcon
  path: string
}
