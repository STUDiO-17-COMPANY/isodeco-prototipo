import { Wrench } from 'lucide-react'
import { EmptyState } from '@/components/ui/EmptyState'

interface PlaceholderPageProps {
  title: string
}

export const PlaceholderPage = ({ title }: PlaceholderPageProps) => (
  <EmptyState
    icon={Wrench}
    title={`Módulo: ${title}`}
    description="Este módulo faz parte da arquitetura da plataforma ISODECO CRM. A vista detalhada seria implementada na fase de desenvolvimento completo."
  />
)
