import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import { getAllContent } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '채용 — PublicAI',
  description: '퍼블릭에이아이와 함께할 동료를 찾고 있어요.',
}

export default function CareersPage() {
  const jobs = getAllContent('careers')

  return (
    <PageLayout
      title={
        <>
          퍼블릭에이아이와 함께 할
          <br />
          동료를 찾고 있어요
        </>
      }
    >
      {jobs.length > 0 ? (
        <ScrollReveal delay={0.2}>
          <div className='divide-border divide-y'>
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className='group flex items-center justify-between py-8'
              >
                <div>
                  <span className='text-primary text-sm font-medium'>
                    {job.category}
                  </span>
                  <h3 className='group-hover:text-primary mt-1 text-xl font-bold transition-colors'>
                    {job.title}
                  </h3>
                  <p className='text-muted-foreground mt-2 text-base'>
                    {job.description}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className='text-muted-foreground group-hover:text-primary shrink-0 transition-colors'
                />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      ) : (
        <div className='border-border rounded-2xl border p-12 text-center'>
          <p className='text-muted-foreground'>
            현재 진행 중인 채용 공고가 없어요.
          </p>
        </div>
      )}
    </PageLayout>
  )
}
