import { PageLayout } from '@/app/_components/page-layout'
import { getAllContent, getContentBySlug } from '@/lib/content'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const jobs = getAllContent('careers')
  return jobs.map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getContentBySlug('careers', slug)
  if (!post) return {}
  return {
    title: `${post.meta.title} — PublicAI 채용`,
    description: post.meta.description,
  }
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  const post = getContentBySlug('careers', slug)
  if (!post) notFound()

  return (
    <PageLayout>
      <div>
        <Link
          href='/careers'
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
