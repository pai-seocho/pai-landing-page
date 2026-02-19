import type { Metadata } from "next";
import { PageLayout } from "@/app/_components/page-layout";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

export const metadata: Metadata = {
  title: "회사 소개 — PublicAI",
  description: "퍼블릭에이아이의 미션, 비전, 연혁을 소개해요.",
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
    <PageLayout
      title={
        <>
          기술을 넘어
          <br />
          산업의 변화를 이끌어요
        </>
      }
    >
      <ScrollReveal>
        <div className="grid grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <div>
        <ScrollReveal>
          <h2 className="text-4xl font-bold">걸어온 길</h2>
        </ScrollReveal>

        <div className="mt-16 divide-y divide-border border-y">
          {HISTORY.map((entry, i) => (
            <ScrollReveal key={entry.year} delay={i * 0.06}>
              <div className="py-10">
                <span className="text-3xl font-bold text-foreground">
                  {entry.year}
                </span>
                <ul className="mt-4 space-y-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="text-lg leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
