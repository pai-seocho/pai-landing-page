import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Coffee,
  Monitor,
  Plane,
  Heart,
} from "lucide-react";
import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { CoverImage } from "@/app/_components/cover-image";

export const metadata: Metadata = {
  title: "팀문화 — PublicAI",
  description: "퍼블릭에이아이의 팀 구성, 일하는 방식, 복지를 소개합니다.",
};

const WAYS = [
  {
    title: "문제 중심으로 일합니다",
    description:
      "기술이 아닌 고객의 문제에서 출발합니다. 해결할 가치가 있는 문제를 찾고, 가장 효과적인 방법을 선택합니다.",
  },
  {
    title: "작게 시작하고 빠르게 검증합니다",
    description:
      "PoC를 통해 빠르게 가설을 검증하고, 성과가 확인된 방향으로 확장해 나갑니다.",
  },
  {
    title: "함께 성장합니다",
    description:
      "기술 공유, 코드 리뷰, 스터디를 통해 팀 전체의 역량을 높이고, 각자의 전문성을 존중합니다.",
  },
] as const;

const TEAMS = [
  {
    name: "AI 연구",
    description:
      "NLP, 컴퓨터 비전, 시계열, 멀티모달 등 최신 AI 기술을 연구하고 실무에 적용 가능한 모델로 발전시킵니다.",
  },
  {
    name: "개발",
    description:
      "MLOps 플랫폼부터 웹/앱 서비스까지, 안정적이고 확장 가능한 시스템을 설계하고 구축합니다.",
  },
  {
    name: "기획·컨설팅",
    description:
      "고객의 비즈니스를 이해하고 AI가 실질적 가치를 만들 수 있는 전략을 함께 수립합니다.",
  },
  {
    name: "교육",
    description:
      "비전공자부터 실무자까지, 대상에 맞는 모듈식 AI 교육 커리큘럼을 직접 설계하고 운영합니다.",
  },
] as const;

const BENEFITS = [
  { icon: Clock, title: "유연 근무", description: "자율 출퇴근제 운영" },
  {
    icon: BookOpen,
    title: "교육 지원",
    description: "도서·강의·컨퍼런스 지원",
  },
  { icon: Coffee, title: "간식·음료", description: "사무실 상시 제공" },
  {
    icon: Monitor,
    title: "장비 지원",
    description: "업무에 필요한 최신 장비",
  },
  { icon: Plane, title: "휴가", description: "연차 + 리프레시 휴가" },
  { icon: Heart, title: "건강", description: "종합 건강검진 지원" },
] as const;

export default function CulturePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-48">
        <Container>
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              각자의 전문성으로 몰입하고
              <br />
              함께 성장합니다
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              퍼블릭에이아이는 구성원이 본인의 전문성에 집중할 수 있도록
              불필요한 절차를 줄이고, 자율과 책임 기반의 문화를 만들어가고
              있습니다.
            </p>
          </ScrollReveal>
        </Container>

        <ScrollReveal delay={0.1}>
          <Container className="mt-12 md:mt-16">
            <CoverImage
              alt="팀 분위기"
              aspectRatio="aspect-[21/9]"
              className="rounded-2xl"
            />
          </Container>
        </ScrollReveal>
      </section>

      {/* 이렇게 일합니다 */}
      <section className="py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              이렇게 일합니다
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
            {WAYS.map((way, i) => (
              <ScrollReveal key={way.title} delay={i * 0.08}>
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-2xl font-bold md:text-3xl">
                      {way.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {way.description}
                    </p>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <CoverImage alt={way.title} aspectRatio="aspect-[4/3]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 우리 팀 */}
      <section className="border-t border-border py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              우리 팀
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
            {TEAMS.map((team, i) => (
              <ScrollReveal key={team.name} delay={i * 0.06}>
                <div className="rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-bold">{team.name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {team.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 복지 */}
      <section className="relative overflow-hidden bg-foreground py-24 text-white md:py-36">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              지속 가능한 성장을 위해 지원합니다
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <benefit.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-base text-white/60">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                AI의 가치를 함께 만들어갈
                <br />
                동료를 찾고 있습니다
              </h2>
              <Link
                href="/careers"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                채용 공고 보기
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
