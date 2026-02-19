import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/app/_components/container";
import { getAllContent, getContentBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllContent("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — PublicAI 블로그`,
    description: post.meta.description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) notFound();

  return (
    <section className="pt-36 pb-24 md:pt-48 md:pb-36">
      <Container>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          블로그 목록
        </Link>

        <div className="mt-8">
          <span className="text-sm font-medium text-primary">
            {post.meta.category}
          </span>
          <h1 className="mt-1 text-3xl font-bold md:text-4xl">
            {post.meta.title}
          </h1>
          <time className="mt-4 block text-sm text-muted-foreground">
            {post.meta.date}
          </time>
        </div>

        <article className="prose prose-neutral mt-12 max-w-none prose-headings:font-bold prose-h2:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <MDXRemote source={post.content} />
        </article>
      </Container>
    </section>
  );
}
