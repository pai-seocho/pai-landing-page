import { CoverImage } from '@/app/_components/cover-image'
import { PageLayout } from '@/app/_components/page-layout'
import { ScrollReveal } from '@/app/_components/scroll-reveal'
import { getAllContent } from '@/lib/content'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '블로그 — PublicAI',
  description: '퍼블릭에이아이의 기술 블로그예요.',
}

export default function BlogPage() {
  const posts = getAllContent('blog')

  return (
    <PageLayout
      title={
        <>
          고민하고, 해결하고,
          <br />
          나누었던 우리들의 여정
        </>
      }
    >
      {posts.length > 0 ? (
        <ScrollReveal delay={0.2}>
          <div className='grid grid-cols-2 gap-8'>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='group block'
              >
                <CoverImage
                  alt={post.title}
                  aspectRatio='aspect-[16/9]'
                  className='transition-transform group-hover:scale-[1.02]'
                />
                <div className='mt-4'>
                  <span className='text-primary text-sm font-medium'>
                    {post.category}
                  </span>
                  <h3 className='group-hover:text-primary mt-1 text-xl font-bold transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-muted-foreground mt-2 text-base leading-relaxed'>
                    {post.description}
                  </p>
                  <time className='text-muted-foreground mt-4 block text-xs'>
                    {post.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      ) : (
        <div className='border-border rounded-2xl border p-12 text-center'>
          <p className='text-muted-foreground'>아직 작성된 글이 없어요.</p>
        </div>
      )}
    </PageLayout>
  )
}
