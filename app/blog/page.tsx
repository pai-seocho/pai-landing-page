import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/app/_components/container";
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
    <section className="pt-36 pb-24 md:pt-48 md:pb-36">
      <Container>
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary">블로그</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            기술 이야기
          </h1>
        </ScrollReveal>

        {posts.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
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
          <div className="mt-14 rounded-2xl border border-border p-12 text-center">
            <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
