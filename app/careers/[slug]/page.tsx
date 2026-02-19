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
  const jobs = getAllContent("careers");
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("careers", slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — PublicAI 채용`,
    description: post.meta.description,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug("careers", slug);
  if (!post) notFound();

  return (
    <Container className="pt-48 pb-24">
      <Link
        href="/careers"
        className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        채용 공고 목록
      </Link>

      <div className="mt-8">
        <span className="text-sm font-medium text-primary">
          {post.meta.category}
        </span>
        <h1 className="mt-1 text-4xl font-bold">{post.meta.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {post.meta.description}
        </p>
      </div>

      <article className="prose prose-neutral mt-12 max-w-none prose-headings:font-bold prose-h2:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
        <MDXRemote source={post.content} />
      </article>

      <div className="mt-16 border-t border-border pt-8">
        <p className="text-base text-muted-foreground">
          지원은{" "}
          <a
            href="mailto:info@publicai.co.kr"
            className="font-semibold text-primary hover:underline"
          >
            info@publicai.co.kr
          </a>
          로 이력서를 보내주세요.
        </p>
      </div>
    </Container>
  );
}
