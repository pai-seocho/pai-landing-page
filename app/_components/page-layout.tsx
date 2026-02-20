import { cn } from '@/lib/utils'
import { Container } from '@/app/_components/container'
import { ScrollReveal } from '@/app/_components/scroll-reveal'

interface PageLayoutProps {
  title?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function PageLayout({ title, children, className }: PageLayoutProps) {
  return (
    <Container className={cn('flex flex-col gap-24 py-24', className)}>
      {title && (
        <ScrollReveal>
          <h1 className='text-5xl leading-snug font-bold'>{title}</h1>
        </ScrollReveal>
      )}
      {children}
    </Container>
  )
}
