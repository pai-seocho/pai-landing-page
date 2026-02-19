import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

export const metadata: Metadata = {
  title: "서비스 — PublicAI",
  description: "퍼블릭에이아이가 제공하는 AI 서비스를 소개합니다.",
};

const SERVICES = [
  {
    title: "AIMP",
    description:
      "데이터 등록부터 모델 학습, 배포, 운영까지 AI 전주기를 하나의 플랫폼에서 관리합니다. 쿠버네티스 기반 온프레미스/클라우드 환경 구축과 No-code 기반 운영을 지원합니다.",
    image: "AIMP 스크린샷",
  },
  {
    title: "AI 컨설팅",
    description:
      "조직의 현재 데이터와 업무 프로세스를 분석하고, AI 도입 전략을 함께 수립합니다.",
    image: "AI 컨설팅",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-24 md:pt-48 md:pb-36">
        <Container>
          <ScrollReveal>
            <h1 className="text-4xl font-bold leading-snug md:text-5xl">
              데이터에서 서비스까지
              <br />
              AI의 모든 과정을 함께합니다
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-36">
        <Container>
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              {i > 0 && (
                <div className="mb-20 border-t border-border md:mb-28" />
              )}
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <CoverImage alt={service.image} aspectRatio="aspect-[16/10]" />
              </div>
              {i < SERVICES.length - 1 && <div className="mt-20 md:mt-28" />}
            </ScrollReveal>
          ))}
        </Container>
      </section>

      <section className="py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
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
