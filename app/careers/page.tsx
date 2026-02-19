import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/app/_components/page-layout";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "채용 — PublicAI",
  description: "퍼블릭에이아이와 함께할 동료를 찾고 있습니다.",
};

export default function CareersPage() {
  const jobs = getAllContent("careers");

  return (
    <PageLayout
      title={
        <>
          퍼블릭에이아이와 함께 성장할
          <br />
          동료를 찾고 있습니다
        </>
      }
    >
      {jobs.length > 0 ? (
        <div className="divide-y divide-border">
          {jobs.map((job, i) => (
            <ScrollReveal key={job.slug} delay={i * 0.05}>
              <Link
                href={`/careers/${job.slug}`}
                className="group flex items-center justify-between py-8"
              >
                <div>
                  <span className="text-sm font-medium text-primary">
                    {job.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold transition-colors group-hover:text-primary">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {job.description}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border p-12 text-center">
          <p className="text-muted-foreground">
            현재 진행 중인 채용 공고가 없습니다.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
