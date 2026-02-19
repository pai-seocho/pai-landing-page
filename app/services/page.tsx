import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 — PublicAI",
  description:
    "퍼블릭에이아이의 핵심 서비스 AIMP(AI Management Platform)를 소개합니다.",
};

const AIMP_FEATURES = [
  "쿠버네티스 기반 온프레미스/클라우드 환경 구축",
  "데이터 등록부터 모델 배포까지 AI 전주기 관리",
  "NLP · Vision · 시계열 · 멀티모달 파이프라인 지원",
  "No-code 기반으로 누구나 운영 가능",
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-48">
        <Container>
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              AI를 하나의 플랫폼에서
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              퍼블릭에이아이는 데이터 수집부터 모델 개발, 서비스 운영까지 AI
              전주기를 지원하는 플랫폼을 만듭니다.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* AIMP */}
      <section className="py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  핵심 서비스
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  AIMP
                </h2>
                <p className="mt-1 text-lg text-muted-foreground">
                  AI Management Platform
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-primary">
                GS 인증 1등급 획득
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12">
              <CoverImage
                alt="AIMP 스크린샷"
                aspectRatio="aspect-[21/9]"
                className="rounded-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                자동화된 워크플로우, RAG/sLLM 모델, AI 서비스 결과 분석 및
                모니터링, GPU 기반 인프라 연동을 지원하는 데이터-AI 서비스 통합
                관리 시스템입니다.
              </p>
              <div>
                <ul className="space-y-4">
                  {AIMP_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-base leading-relaxed"
                    >
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                AI 도입이 필요하신가요?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                프로젝트 규모와 상관없이 편하게 문의해주세요.
              </p>
              <a
                href="mailto:info@publicai.co.kr"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                문의하기
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
