import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/app/_components/header'
import { Footer } from '@/app/_components/footer'

export const metadata: Metadata = {
  title: 'PublicAI — 누구나 누리는 AI',
  description:
    '퍼블릭에이아이는 인공지능 기술을 다양한 산업 분야에 적용하여 누구나 AI의 혜택을 받을 수 있는 세상을 만듭니다.',
  keywords: ['PublicAI', '퍼블릭에이아이', 'AI', '인공지능', 'MLOps', 'LLM'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
