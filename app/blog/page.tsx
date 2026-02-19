import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/app/_components/page-layout";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { CoverImage } from "@/app/_components/cover-image";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "블로그 — PublicAI",
  description: "퍼블릭에이아이의 기술 블로그입니다.",
};

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <PageLayout title="블로그">
      {posts.length > 0 ? (
        <div className="grid grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <CoverImage
                  alt={post.title}
                  aspectRatio="aspect-[16/9]"
                  className="transition-transform group-hover:scale-[1.02]"
                />
                <div className="mt-4">
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <time className="mt-4 block text-xs text-muted-foreground">
                    {post.date}
                  </time>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border p-12 text-center">
          <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
        </div>
      )}
    </PageLayout>
  );
}
