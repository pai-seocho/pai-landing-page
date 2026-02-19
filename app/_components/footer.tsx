import Link from 'next/link'
import { Container } from '@/app/_components/container'
import { NAV_ITEMS } from '@/app/_lib/navigation'

export function Footer() {
  return (
    <footer className='border-border border-t'>
      <Container className='py-16'>
        <div className='flex flex-row items-start justify-between gap-10'>
          <div className='space-y-4'>
            <Link href='/' className='font-bold'>
              (주)퍼블릭에이아이
            </Link>
            <div className='text-muted-foreground space-y-1 text-sm'>
              <p>TEL 070-4788-8825</p>
              <p>
                <a
                  href='mailto:info@publicai.co.kr'
                  className='hover:text-foreground transition-colors'
                >
                  info@publicai.co.kr
                </a>
              </p>
              <p>서울 서초구 서초대로 48길 107 에덴빌딩 2층</p>
            </div>
          </div>

          <nav className='flex flex-wrap gap-8'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
