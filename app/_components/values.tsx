"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";

const VALUES = [
  {
    number: "01",
    title: "모두에게 열린 AI",
    description:
      "산업 규모와 조직 형태에 상관없이 누구나 AI를 이해하고, 적용하고, 활용할 수 있도록 기술 접근성을 높입니다.",
    image: "접근성",
  },
  {
    number: "02",
    title: "맞춤형 AI 개발",
    description:
      "분석-설계-구축-운영까지 각 산업과 조직의 방식에 맞춰 실제로 작동하는 맞춤형 AI를 개발하고 내재화합니다.",
    image: "맞춤 개발",
  },
  {
    number: "03",
    title: "신뢰할 수 있는 AI",
    description:
      "검증 가능한 데이터, 투명한 모델 운영, 책임 있는 AI 거버넌스를 통해 믿고 사용할 수 있는 AI를 만듭니다.",
    image: "신뢰와 투명성",
  },
] as const;

function ValueBlock({
  value,
  index,
  onActivate,
}: {
  value: (typeof VALUES)[number];
  index: number;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  });

  useEffect(() => {
    if (isInView) onActivate(index);
  }, [isInView, index, onActivate]);

  return (
    <div
      ref={ref}
      className="flex min-h-[60vh] items-center py-16 first:pt-0 last:pb-0"
    >
      <div>
        <span
          className="text-base font-medium transition-colors duration-300"
          style={{
            color: isInView
              ? "var(--color-primary)"
              : "var(--color-muted-foreground)",
          }}
        >
          {value.number}
        </span>
        <h3
          className="mt-2 text-3xl font-bold transition-colors duration-300 md:text-4xl"
          style={{
            color: isInView
              ? "var(--color-foreground)"
              : "var(--color-muted-foreground)",
          }}
        >
          {value.title}
        </h3>
        <p
          className="mt-4 max-w-lg text-lg leading-relaxed transition-colors duration-300 md:text-xl md:leading-relaxed"
          style={{
            color: isInView
              ? "var(--color-muted-foreground)"
              : "var(--color-border)",
          }}
        >
          {value.description}
        </p>
      </div>

      <div className="mt-8 md:hidden">
        <CoverImage alt={value.image} aspectRatio="aspect-[4/3]" />
      </div>
    </div>
  );
}

export function Values() {
  const [active, setActive] = useState(0);
  const handleActivate = useCallback((i: number) => setActive(i), []);

  return (
    <section className="py-24 md:py-36">
      <Container>
        <p className="text-sm font-semibold text-primary">핵심 가치</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          퍼블릭에이아이가 AI를 만드는 원칙
        </h2>

        <div className="mt-16 md:grid md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            {VALUES.map((value, i) => (
              <ValueBlock
                key={value.number}
                value={value}
                index={i}
                onActivate={handleActivate}
              />
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <CoverImage
                    alt={VALUES[active].image}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
