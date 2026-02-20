import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllContent, getContentBySlug } from '@/lib/content'
import { PageLayout } from '@/app/_components/page-layout'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = getAllContent('blog')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getContentBySlug('blog', slug)
  if (!post) return {}
  return {
    title: `${post.meta.title} — PublicAI 블로그`,
    description: post.meta.description,
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = getContentBySlug('blog', slug)
  if (!post) notFound()

  return (
    <PageLayout>
      <div>
        <Link
          href='/blog'
          className='text-muted-foreground hover:text-foreground font-semibold transition-colors'
        >
          <ArrowLeft size={24} />
        </Link>

        <div className='mt-8'>
          <span className='text-primary text-sm font-medium'>
            {post.meta.category}
          </span>
          <h1 className='mt-1 text-4xl font-bold'>{post.meta.title}</h1>
          <p className='text-muted-foreground mt-4 text-lg'>
            {post.meta.description}
          </p>
        </div>
      </div>

      <article className='prose prose-neutral prose-headings:font-bold prose-h2:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none'>
        <MDXRemote source={post.content} />
      </article>
    </PageLayout>
  )
}
