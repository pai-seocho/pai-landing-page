'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Container } from '@/app/_components/container'
import { NAV_ITEMS } from '@/app/_lib/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className='bg-background sticky top-0 z-50 flex h-16 w-full items-center'>
      <Container className='flex h-16 items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          <span className='text-primary'>PUBLIC</span>
          <span className='text-foreground'>AI</span>
        </Link>

        <nav className='flex items-center gap-8'>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
