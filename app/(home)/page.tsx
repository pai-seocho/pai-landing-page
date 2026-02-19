"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/app/_components/page-layout";
import { CoverImage } from "@/app/_components/cover-image";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { ButtonLink } from "@/app/_components/button-link";

const VALUES = [
  {
    title: "모두에게 열린 AI",
    description:
      "산업 규모와 조직 형태에 상관없이 누구나 AI를 이해하고, 적용하고, 활용할 수 있도록 기술 접근성을 높입니다.",
    image: "접근성",
  },
  {
    title: "맞춤형 AI 개발",
    description:
      "분석-설계-구축-운영까지 각 산업과 조직의 방식에 맞춰 실제로 작동하는 맞춤형 AI를 개발하고 내재화합니다.",
    image: "맞춤 개발",
  },
  {
    title: "신뢰할 수 있는 AI",
    description:
      "검증 가능한 데이터, 투명한 모델 운영, 책임 있는 AI 거버넌스를 통해 믿고 사용할 수 있는 AI를 만듭니다.",
    image: "신뢰와 투명성",
  },
] as const;

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

const PARTNERS = [
  "현대자동차",
  "관세청",
  "대검찰청",
  "국방부",
  "신한금융그룹",
  "국세청",
  "EBS",
  "코오롱베니트",
  "행정안전부",
  "탄자니아 관세청",
  "한국고용정보원",
  "삼성서울병원",
  "Deloitte",
  "KT ds",
  "멀티캠퍼스",
] as const;

export default function Home() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: valuesRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      Math.floor(progress * VALUES.length),
      VALUES.length - 1,
    );
    setActiveValue(index);
  });

  return (
    <PageLayout
      title={
        <>
          AI를 연구하고, 개발하고,
          <br />
          교육합니다
        </>
      }
    >
      <CoverImage alt="대표 이미지" aspectRatio="aspect-[21/9]" />

      <section ref={valuesRef} style={{ height: `${VALUES.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="grid w-full grid-cols-2 items-start gap-24">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">
                퍼블릭에이아이가
                <br />
                AI를 만드는 원칙
              </h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-32"
                >
                  <h3 className="text-2xl font-bold">
                    {VALUES[activeValue].title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {VALUES[activeValue].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CoverImage
                    alt={VALUES[activeValue].image}
                    aspectRatio="aspect-[1/1]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div>
        <ScrollReveal>
          <div className="flex flex-row items-end justify-between gap-4">
            <h2 className="text-4xl font-bold">AI의 모든 과정을 함께합니다</h2>
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
              <div className="py-10">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div>
        <ScrollReveal>
          <p className="text-center text-xl font-medium text-muted-foreground">
            도메인 지식의 빠른 습득과 커뮤니케이션을 통한 성공사례가
            <br />
            퍼블릭에이아이의 가치를 입증합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-16 grid grid-cols-5 gap-6">
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-lg border border-border/60 bg-white px-4"
              >
                <span className="text-sm font-medium text-foreground/50">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="overflow-hidden rounded-2xl bg-primary px-16 py-20">
          <h2 className="text-4xl font-bold text-white">
            함께 만들어갈
            <br />
            팀원을 찾고 있습니다
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            퍼블릭에이아이에서 AI의 가치를 함께 만들어갈 동료를 기다립니다.
          </p>
          <ButtonLink href="/careers" variant="white" className="mt-8">
            채용 공고 보기
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
