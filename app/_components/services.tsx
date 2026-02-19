import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

const SERVICES = [
  {
    title: "End to End MLOps 플랫폼",
    description:
      "AI 프로젝트 관리부터 서비스 운영, 분석 결과 관리까지 데이터-AI 전주기를 하나의 플랫폼에서.",
  },
  {
    title: "LLM/RAG 기반 AI 서비스",
    description:
      "RAG 기반 상담 자동화, 추천 서비스, 업무 자동화 등 대규모 언어 모델을 활용한 실무 솔루션.",
  },
  {
    title: "AI 활용 시스템 구축",
    description:
      "웹/앱 서비스, 백오피스, 기간계 시스템에 AI를 접목하여 기존 업무 흐름을 혁신합니다.",
  },
  {
    title: "AI 기획·교육·컨설팅",
    description:
      "비전공자부터 현업 실무자까지, 조직의 목표에 맞춘 AI 전략 수립과 실무 중심 교육.",
  },
] as const;

export function Services() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                AI의 모든 과정을 함께합니다
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
            >
              서비스 더 알아보기
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div className="py-8 md:py-10">
                <h3 className="text-xl font-bold md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
