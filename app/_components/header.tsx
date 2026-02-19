'use client'

import Link from 'next/link'
import { Container } from '@/app/_components/container'
import { NAV_ITEMS } from '@/app/_lib/navigation'

export function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-16 w-full items-center bg-white/80 backdrop-blur-sm'>
      <Container className='flex h-16 items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          <span className='text-primary'>PUBLIC</span>
          <span className='text-foreground'>AI</span>
        </Link>

        <nav className='flex items-center gap-8'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-muted-foreground hover:text-foreground text-base font-medium transition-colors'
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
