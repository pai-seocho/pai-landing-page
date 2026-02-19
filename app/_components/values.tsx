"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Container } from "@/app/_components/container";
import { CoverImage } from "@/app/_components/cover-image";

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

export function Values() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      Math.floor(progress * VALUES.length),
      VALUES.length - 1,
    );
    setActive(index);
  });

  return (
    <section
      ref={sectionRef}
      style={{ height: `${VALUES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen">
        <Container className="flex h-full items-center">
          <div className="grid w-full items-start gap-10 md:grid-cols-2 md:gap-24">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold md:text-4xl">
                퍼블릭에이아이가
                <br />
                AI를 만드는 원칙
              </h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-32"
                >
                  <h3 className="text-xl font-bold md:text-2xl">
                    {VALUES[active].title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                    {VALUES[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CoverImage
                    alt={VALUES[active].image}
                    aspectRatio="aspect-[1/1]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
