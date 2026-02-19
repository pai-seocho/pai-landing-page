import type { Metadata } from "next";
import { Container } from "@/app/_components/container";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { CoverImage } from "@/app/_components/cover-image";

export const metadata: Metadata = {
  title: "회사 소개 — PublicAI",
  description: "퍼블릭에이아이의 미션, 비전, 연혁을 소개합니다.",
};

const HISTORY = [
  {
    year: "2025",
    items: ["GS 인증(소프트웨어 품질 인증) 1등급 획득"],
  },
  {
    year: "2024",
    items: [
      "탄자니아 관세청 LLM 기반 HS코드 추천",
      "국세청 Naver HCX AICC PoC",
      "무역투자 GPT 구축",
      "국방부 진료비 시스템 유지보수",
    ],
  },
  {
    year: "2023",
    items: [
      "관세청 불법복제품 판독 시스템 3차",
      "현대자동차 영상 측정·자율주행 프로젝트",
      "EBS AI 문제 추천 서비스",
      "J회계법인 RAG 기반 회계 AI PoC",
      "국방부 민간병원 진료비 직접청구 시스템",
    ],
  },
  {
    year: "2022",
    items: [
      "현대자동차 배터리 소모량 예측 시스템",
      "대검찰청 빅데이터 기반 디지털 증거분석 시스템",
      "행정안전부 행정문서 데이터 전환",
    ],
  },
  {
    year: "2021",
    items: [
      "관세청 영상 기반 불법복제품 판독 시스템",
      "현대자동차 CAN신호 기반 배터리 소모량 예측",
      "스마트 치안 빅데이터 플랫폼 ISP",
      "코오롱베니트 섬유 이상탐지 시스템",
    ],
  },
] as const;

const STATS = [
  { label: "설립", value: "2021" },
  { label: "수행 프로젝트", value: "40+" },
  { label: "주요 협력사", value: "20+" },
  { label: "GS 인증", value: "1등급" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-36">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <p className="text-sm font-semibold text-primary">회사 소개</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                PUBLIC + AI
              </h1>
              <p className="mt-8 text-lg leading-loose text-muted-foreground">
                인공지능이 일상 속 깊숙이 파고들어 세상을 변화시키고 가치를
                만들어내고 있지만, 그 기술의 혜택을 받고 있는 기업은
                극소수입니다. 퍼블릭에이아이는 누구나 인공지능의 혜택을 받을 수
                있는 세상을 만들기 위해 AI를 연구하고, 개발하고, 교육합니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <CoverImage alt="회사 소개 이미지" aspectRatio="aspect-[4/3]" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stats — 숫자 강조 인라인 */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="flex flex-wrap items-baseline justify-between gap-8 md:gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 연혁 — 타임라인 */}
      <section className="border-t border-border py-24 md:py-36">
        <Container>
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary">연혁</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              걸어온 길
            </h2>
          </ScrollReveal>

          <div className="mt-16 divide-y divide-border border-t border-border md:mt-20">
            {HISTORY.map((entry, i) => (
              <ScrollReveal key={entry.year} delay={i * 0.06}>
                <div className="grid gap-4 py-8 md:grid-cols-[120px_1fr] md:gap-12 md:py-10">
                  <span className="text-2xl font-bold text-foreground md:text-3xl">
                    {entry.year}
                  </span>
                  <ul className="space-y-2">
                    {entry.items.map((item) => (
                      <li
                        key={item}
                        className="text-base leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
